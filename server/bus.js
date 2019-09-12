const _ = require('lodash')
const express = require('express')
const validator = require('validator')
const EventEmitter = require('events')

const router = express.Router()
const docs = require('../docs/temp')

const bus = new EventEmitter()

const routes = docs.result
const httpMethods = Object.keys(routes)
httpMethods.forEach(httpMethod => {
  routes[httpMethod].forEach(command => {
    router[httpMethod](`/${command.endpoint}`, (req, res) => {
      const { args, errors } = validateRequest(req, command, httpMethod)
      const payload = { httpMethod, args, command, req, res }
      if (errors.length) {
        payload.errors = errors
        bus.emit('validation-failed', payload)
      } else {
        bus.emit('request', payload)
      }
    })
  })
})

function validateRequest(req, command, expectedMethod) {
  const { method, body = {} } = req
  const { name, arguments = {}, resultType, apiCommandGroup } = _.get(
    command,
    'apiCommand',
    {}
  )

  const errors = []

  if (method.toLowerCase() !== expectedMethod.toLowerCase()) {
    errors.push(`Expected HTTP method ${expectedMethod} for command ${name}`)
  }

  const args = {}
  Object.keys(arguments).forEach(key => {
    const param = key // TODO is the argument the key, or the name?!
    let provided = body[param]
    const original = provided
    const { name, defaultValue, type, parse, validate } = parseArgument(
      arguments[key]
    )
    let parsed
    if (provided === undefined || provided === null) {
      // do we need to validate required?
      // provided = new String(defaultValue)
      provided = defaultValue
    }

    if (!validate(provided)) {
      const msg = `Expected type=${type} for parameter=${param} but received=${original}`
      return errors.push(msg)
    } else {
      parsed = parse(provided)
      if (!validate(parsed)) {
        const msg = `Expected type=${type} for parameter=${param} but received=${original} and parsed=${parsed}`
        return errors.push(msg)
      }
    }
    args[param] = parsed
  })

  return { errors, args }
}

function parseArgument(arg, property) {
  const {
    name,
    value: defaultValue,
    ordinalNumber: ordinal,
    getValueType
  } = arg
  const { type, parse, validate } = convertDotNetType(getValueType)
  return {
    name,
    defaultValue,
    ordinal,
    type,
    parse,
    validate
  }
}

// ewww but works for now
function convertDotNetType(type) {
  const noop = raw => raw
  const target = type
    .toLowerCase()
    .split(',')[0]
    .replace('system.', '')
  switch (target) {
    case 'datetime':
      return {
        type: 'date',
        parse: raw => new Date(raw),
        validate: validator.isISO8601
      }
    case 'int32':
      return {
        type: 'int',
        parse: parseInt,
        validate: validator.isInt
      }
    case 'double':
      return {
        type: 'double',
        parse: parseFloat,
        validate: validator.isFloat
      }
    case 'boolean':
      return {
        type: 'boolean',
        parse: raw => new Boolean(raw),
        // this one was stupid. hopefully not the others too
        validate: raw =>
          raw instanceof Boolean ||
          typeof raw === 'boolean' ||
          validator.isBoolean(raw)
      }
    case 'string':
      return {
        type: 'string',
        parse: raw => (raw === undefined ? raw.toString() : raw),
        validate: () => true
      }
    default:
      console.log(`Unexpected .NET type to convert: ${type}`)
      return { type, parse: noop, validate: validator.isISO8601 }
  }
}

module.exports = {
  httpMethods,
  router,
  bus
}

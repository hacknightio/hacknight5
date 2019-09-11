const express = require('express')
const router = express.Router()
const EventEmitter = require('events')
const bus = new EventEmitter()

const routes = require('../docs/temp').result
Object.keys(routes).forEach(httpMethod => {
  routes[httpMethod].forEach(command => {
    router[httpMethod](`/${command.endpoint}`, (req, res) => {
      bus.emit(httpMethod, { httpMethod, command, req, res })
    })
  })
})

module.exports = {
  router,
  bus
}

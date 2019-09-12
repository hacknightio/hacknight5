const dispatcher = ctx => {
  const { bus } = ctx
  bus.on('request', e => handleRequest(e, ctx))
  bus.on('validation-failed', e => handleRequest(e, ctx))
}

function handleRequest(e, ctx) {
  const { bus, io, state } = ctx
  const { res, command, httpMethod, args } = e

  const { name, apiCommandGroup: group } = command.apiCommand
  const file = `./${group}/${name}`

  let fn
  try {
    // console.log('Loading command file', { file })
    fn = require(file)
  } catch (err) {
    // no implementation found, default
    return res.send({
      status: 'ok',
      __mock: true,
      __default: true,
      __ctx: {
        name,
        group,
        httpMethod,
        args,
        fields: command.apiCommand.arguments
      }
    })
  }

  // must have a function by now, so run it!
  try {
    fn({ state, busEvent: e, io })
  } catch (err) {
    e.res.status(500).send({
      message: 'Failed to execute command',
      file
    })
  }
}

function handleValidationError(e, ctx) {
  const { res, errors } = e
  const message = 'Invalid payload submitted'
  // TODO include command info?
  res.status(400).json({
    message,
    errors
  })
}

module.exports = {
  dispatcher,
  handleRequest,
  handleValidationError
}

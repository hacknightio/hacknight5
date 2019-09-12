module.exports = ctx => {
  const {
    _,
    bus,
    io,
    state,
    busEvent: { req, res, args }
  } = ctx

  state.drive = {
    linearVelocity: 0,
    angularVelocity: 0,
    ...state.drive,
    ..._.pick(args, 'linearVelocity,angularVelocity')
  }

  res.send({ message: 'ok' })
}

module.exports = ctx => {
  const {
    _,
    bus,
    io,
    state,
    busEvent: { req, res, args }
  } = ctx

  state.drive = {
    ...state.drive,
    linearVelocity: 0,
    angularVelocity: 0
  }

  // TODO stop head and arm motors too

  res.send({ message: 'ok' })
}

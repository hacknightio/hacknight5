module.exports = ctx => {
  const {
    _,
    bus,
    io,
    state,
    helpers: { timers },
    busEvent: { req, res, args }
  } = ctx
  const { timeMs, degree } = args
  const { timeoutId } = state.drive

  if (!!timeoutId) {
    timers.clear(timeoutId)
  }

  // set drive to 0 after?
  const newTimeoutId = timers.timeout(() => {
    state.drive = {
      ...state.drive,
      linearVelocity: 0,
      angularVelocity: 0,
      timeoutId: null
    }
  }, timeMs)

  // const current = { ...state.drive }
  state.drive = {
    linearVelocity: 0,
    angularVelocity: 0,
    ...state.drive,
    ..._.pick(args, ['linearVelocity', 'angularVelocity']),
    degree,
    timeoutId: newTimeoutId
  }

  res.send({ message: 'ok' })
}

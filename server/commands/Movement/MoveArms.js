module.exports = ctx => {
  const {
    _,
    bus,
    io,
    state,
    helpers: { timers },
    busEvent: { req, res, args }
  } = ctx

  // maybe slowly do it to simulate delays?

  const { leftArmPosition, rightArmPosition } = args

  let itr = 0
  let timerId
  timerId = timers.interval(() => {
    // console.log({ args, current: state.arms })

    const left = normalize(state.arms.left.position, leftArmPosition)
    const right = normalize(state.arms.right.position, rightArmPosition)

    const nl = state.arms.left.position + left
    const nr = state.arms.right.position + right

    const cl = state.arms.left
    const cr = state.arms.right

    // console.log({ nl, nr, cr, cl, left, right })
    state.arms = {
      ...state.arms,
      left: left === 0 ? cl : { ...cl, position: nl },
      right: right === 0 ? cr : { ...cr, position: nr }
    }

    // console.log('set', itr++)

    if (left === 0 && right === 0) {
      timers.clear(timerId)
    }
  }, 50)
  // TODO stop head and arm motors too

  res.send({ message: 'ok' })
}

function normalize(current, desired) {
  const diff = current - desired
  let delta = 0
  if (diff < 0) {
    // move arms down
    delta = Math.min(diff * -1, 5)
  } else if (diff > 0) {
    // move arms up
    delta = Math.max(diff * -1, -5)
  }
  return delta
}

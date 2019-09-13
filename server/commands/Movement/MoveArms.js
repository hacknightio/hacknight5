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

  let { leftArmPosition: desiredLeft, rightArmPosition: desiredRight } = args

  desiredLeft = Math.min(desiredLeft, 90)
  desiredLeft = Math.max(desiredLeft, -29)

  desiredRight = Math.min(desiredRight, 90)
  desiredRight = Math.max(desiredRight, -29)
  // console.log('starting', {
  //   desiredLeft,
  //   desiredRight
  // })

  // let itr = 0
  let timeoutId
  timeoutId = timers.interval(() => {
    // console.log({ args, current: state.arms })

    const cl = state.arms.left
    const cr = state.arms.right

    const left = normalize(cl.position, desiredLeft)
    const right = normalize(cr.position, desiredRight)

    const nl = cl.position + left
    const nr = cr.position + right

    // console.log({ nl, nr, cr, cl, left, right })
    if (left === 0 && right === 0) {
      timers.clear(timeoutId)
      timeoutId = null
    } else {
      state.arms = {
        ...state.arms,
        timeoutId,
        left: { ...cl, position: nl },
        right: { ...cr, position: nr }
      }
    }

    // console.log('set', itr++)
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

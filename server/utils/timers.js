const timeouts = []

const timeout = (fn, delay) => {
  return timeouts.push(setTimeout(fn, delay)) - 1
}

const interval = (fn, delay) => {
  return timeouts.push(setInterval(fn, delay)) - 1
}

const clear = id => {
  const timer = timeouts[id]
  if (timer) {
    console.log('clearing', id)
    clearTimeout(timer)
    clearInterval(timer)
    timeouts[id] = null
    return true
  }
  return false
}

const delay = timeMs => new Promise(res => setTimeout(res, timeMs))

module.exports = {
  timeout,
  clear,
  delay,
  interval
}

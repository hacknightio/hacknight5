const timeouts = []

const timeout = (fn, delay) => {
  return timeouts.push(setTimeout(fn, delay))
}

const clear = id => {
  if (timeouts[id]) {
    clearTimeout(timeouts[id])
    timeouts[id] = null
    return true
  }
  return false
}

module.exports = {
  timeout,
  clear
}

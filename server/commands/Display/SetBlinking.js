module.exports = ({ state, busEvent, io }) => {
  const { req, res } = busEvent
  console.log({req, res})
  io.emit('MESSAGE', { emitting: true })

  res.send({
    blinking: true,
    state
  })
}

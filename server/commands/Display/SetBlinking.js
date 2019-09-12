module.exports = ({ state, busEvent, io }) => {
  const { req, res } = busEvent

  io.emit('MESSAGE', { emitting: true })

  res.send({
    blinking: true,
    state
  })
}

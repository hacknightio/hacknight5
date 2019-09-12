module.exports = ({ state, busEvent, io }) => {
  const { req, res } = busEvent
  const { body: { on } } = req

  io.emit('MESSAGE', { emitting: true })
  console.log({ on })
  res.send({
    on,
    state
  })
}

module.exports = ({ state, busEvent, io }) => {
  const { req, res } = busEvent
  const { body: { red, green, blue } } = req

  io.emit('MESSAGE', { emitting: true })
  console.log({ red, green, blue })
  res.send({
    red,
    green,
    blue,
    state
  })
}

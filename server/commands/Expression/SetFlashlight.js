module.exports = ({ state, busEvent, io }) => {
  const { req, res } = busEvent

  io.emit('MESSAGE', { emitting: true })
  console.log({res, req})
  res.send({
    on: true,
    state
  })
}

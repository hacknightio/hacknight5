module.exports = ({ state, busEvent, io }) => {
  const { req, res } = busEvent
  const { query } = req

  io.emit('MESSAGE', { emitting: true })
  console.log({ query })
  res.send({
    ...query
  })
}

module.exports = ({ state, busEvent, io }) => {
  const { req, res } = busEvent
  const { body } = req

  io.emit('MESSAGE', { emitting: true })
  console.log({ body })
  res.send({
    ...body
  })
}

module.exports = ({ state, busEvent, io }) => {
  const { req, res } = busEvent
  const { body: { fileName, timeoutSeconds, alpha } } = req

  io.emit('MESSAGE', { emitting: true })
  console.log({ fileName, timeoutSeconds, alpha })
  res.send({
    fileName,
    timeoutSeconds,
    alpha
  })
}

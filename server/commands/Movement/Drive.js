module.exports = ctx => {
  const {
    bus,
    io,
    args,
    busEvent: { req, res }
  } = ctx

  console.log({ args })

  res.send({ message: 'ok' })
}

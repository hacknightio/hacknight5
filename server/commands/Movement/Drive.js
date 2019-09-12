const bind = ctx => {
  const { bus, io, args, res } = ctx

  console.log({ args })

  res.send({ message: 'ok' })
}

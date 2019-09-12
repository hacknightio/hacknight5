const data = require(`../docs/temp`)
Object.keys(data.result).forEach(method => {
  data.result[method].forEach(command => {
    console.log(`${command.apiCommand.webCategory} ${method} /${command.endpoint}`)
  })
})

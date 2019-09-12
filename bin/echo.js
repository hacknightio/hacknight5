const data = require(`../docs/temp`)
Object.keys(data.result).forEach(method => {
  data.result[method].forEach(command => {
    console.log(`${method} /${command.endpoint}`)
    console.log(`\t${}`)
  })
})

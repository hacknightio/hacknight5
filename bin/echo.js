const data = require(`../docs/temp`)

const categories = {}
Object.keys(data.result).forEach(method => {
  data.result[method].forEach(command => {
    const category = command.apiCommand.webCategory || 'no_category'
    if (categories[category] === undefined) {
      categories[category] = []
    }

    const msg = `${method} /${command.endpoint} ${command.apiCommand.name}`
    categories[category].push(msg)
    // console.log(msg)
  })
})

Object.keys(categories).forEach(cat => {
  console.log(cat.toUpperCase() + '\n========================')
  categories[cat].forEach(e => console.log(e))
  console.log('\n\n')
})

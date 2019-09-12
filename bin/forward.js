const redbird = require('redbird')
const ngrok = require('ngrok')

const ip = `10.10.10.48`
const port = 8090

;(async () => {
  const url = await ngrok.connect({
    proto: 'http',
    subdomain: 'misty',
    addr: port,
    onLogEvent: data => {
      // console.log('ngrok', data)
    }
  })
  const base = url.replace('https://', '')
  console.log('ngrok listening', { url, base })

  const proxy = redbird({ port })
  proxy.register(base, `http://${ip}`)
  proxy.register('localhost', `http://${ip}`)
  console.log(
    `\n\n\nSUCCESS: redbird listneing on ${port} and available publicly at ${base}`
  )
})()

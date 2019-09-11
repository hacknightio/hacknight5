const redbird = require('redbird')
const ngrok = require('ngrok')

const ip = `10.10.10.48`
const port = 8090

//space
;(async () => {
  const url = await ngrok.connect({
    proto: 'http', // http|tcp|tls, defaults to http
    subdomain: 'misty',
    addr: port,
    onLogEvent: data => {
      console.log('ngrok', data)
    } // returns stdout messages from ngrok process
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

// const url = await ngrok.connect({
//     proto: 'http', // http|tcp|tls, defaults to http
//     addr: 8080, // port or network address, defaults to 80
//     auth: 'user:pwd', // http basic authentication for tunnel
//     subdomain: 'alex', // reserved tunnel name https://alex.ngrok.io
//     authtoken: '12345', // your authtoken from ngrok.com
//     region: 'us', // one of ngrok regions (us, eu, au, ap), defaults to us
//     configPath: '~/git/project/ngrok.yml', // custom path for ngrok config file
//     binPath: default => default.replace('app.asar', 'app.asar.unpacked'), // custom binary path, eg for prod in electron
//     onStatusChange: status => {}, // 'closed' - connection is lost, 'connected' - reconnected
//     onLogEvent: data => {}, // returns stdout messages from ngrok process
// });

// var localtunnel = require('localtunnel')

// var tunnel = localtunnel(port, function(err, tunnel) {
//   if (err) {
//     throw err
//   }
//   const url = tunnel.url.replace('https://')
//   console.log(url)

//   console.log('listening on ', tunnel.url, port)
// })

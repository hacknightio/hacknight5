const express = require('express')
const SocketIO = require('socket.io')

const { dispatcher } = require('./commands/dispatch')
const { router, bus } = require('./bus')

// the state of our misty robot!
const state = {}

// Wire up our express app
const app = express()
app.use(express.json())
app.use(router)
app.get('/', function(req, res) {
  res.send('Hello World')
})

// Tell express to get started
const port = process.env.PORT || 3000
const server = app.listen(port, () => {
  console.log('Listening on port', port)
})

// Websocket our emulator up!
const io = SocketIO(server)
io.on('connection', function(socket) {
  console.log('Websocket connection', socket.id)
  io.emit('MESSAGE', { id: 'jake' })
})

dispatcher({ io, bus, state })

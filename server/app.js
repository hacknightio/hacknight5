const express = require('express')
const app = express()
const WebSocket = require('ws')

const ws = new WebSocket('http://localhost:4000/')

app.use(express.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/misty/api/drive', function (req, res) {
  const { LinearVelocity, AngularVelocity } = req.body
  if (LinearVelocity && AngularVelocity){
    if (typeof(LinearVelocity) === 'number' && typeof(AngularVelocity) === 'number'){
      res.send(true)
      ws.send('something')
    }
    else {
      res.send(false)
    }
  }
  else{
    res.send(false)
  }
})

app.listen(3000)
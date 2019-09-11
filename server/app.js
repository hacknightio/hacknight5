const express = require('express')
const app = express()
const { router, bus } = require('./bus')

app.use(express.json())
app.use(router)

bus.on('get', e => {
  const { res, command, httpMethod } = e
  res.send({
    httpMethod,
    fields: command.apiCommand.arguments
  })
})

app.get('/', function(req, res) {
  res.send('Hello World')
})

// Drive
app.post('/misty/api/drive', function(req, res) {
  const { LinearVelocity, AngularVelocity } = req.body
  if (LinearVelocity && AngularVelocity) {
    if (validTypes([LinearVelocity, AngularVelocity], 'number')) {
      res.send(true)
    } else {
      res.send(false)
    }
  } else {
    res.send(false)
  }
})

// DriveTime
app.post('/misty/api/drive/time', function(req, res) {
  // Degree is optional
  const { LinearVelocity, AngularVelocity, TimeMs, Degree } = req.body
  if (LinearVelocity && AngularVelocity && TimeMs) {
    if (validTypes([LinearVelocity, AngularVelocity, TimeMs], 'number')) {
      res.send(true)
    } else {
      res.send(false)
    }
  } else {
    res.send(false)
  }
})

// DriveTrack
app.post('/misty/api/drive/track', function(req, res) {
  const { LeftTrackSpeed, RightTrackSpeed } = req.body
  if (LeftTrackSpeed && RightTrackSpeed) {
    if (validTypes([LinearVelocity, AngularVelocity, TimeMs], 'number')) {
      res.send(true)
    } else {
      res.send(false)
    }
  } else {
    res.send(false)
  }
})

// MoveArm
app.post('/misty/api/arms', function(req, res) {
  // Velocity and Units are optional
  const { Arm, Position, Velocity, Units } = req.body
  if (Arm && Position) {
    if (validTypes([Position], 'number') && validTypes([Arm], 'string')) {
      res.send(true)
    } else {
      res.send(false)
    }
  } else {
    res.send(false)
  }
})

// MoveArms
app.post('/misty/api/arms/set', function(req, res) {
  // all inputs are optional
  const {
    LeftArmPosition,
    RightArmPosition,
    LeftArmVelocity,
    RightArmVelocity,
    Units
  } = req.body
  res.send(true)
})

// MoveHead
app.post('/misty/api/head', function(req, res) {
  // Velocity and Units are optional
  const { Pitch, Roll, Yaw, Velocity, Units } = req.body
  if ((Roll && Pitch, Yaw)) {
    if (validTypes([Roll, Pitch, Yaw], 'number')) {
      res.send(true)
    } else {
      res.send(false)
    }
  } else {
    res.send(false)
  }
})

// Halt
app.post('/misty/api/halt', function(req, res) {
  // No parameters and return value
})

// Stop
app.post('/misty/api/drive/stop', function(req, res) {
  // No parameters and return value
})

const port = process.env.PORT || 3000
const server = app.listen(port, () => {
  console.log('Listening on port', port)
})
const io = require('socket.io')(server)

io.on('connection', function(socket) {
  console.log('Socket connection', socket.id)
  io.emit('MESSAGE', { id: 'jake' })
})

function validTypes(Args, type) {
  return Args.reduce(
    (status, nextArg) => (status ? typeof nextArg === type : status),
    true
  )
}

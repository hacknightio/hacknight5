const express = require('express')

const { router, bus } = require('./bus')

// the state of our misty robot!
const state = {}

const app = express()
app.use(express.json())
app.use(router)

bus.on('request', e => {
  const { res, command, httpMethod, args } = e

  const { name, apiCommandGroup: group } = command.apiCommand

  const ctx = {
    name,
    group,
    httpMethod,
    args,
    fields: command.apiCommand.arguments
  }

  try {
    const file = `./commands/${group}/${name}`
    // console.log({ file })
    const fn = require(file)
    fn({ state, busEvent: e, io })
  } catch (err) {
    // no implementation found, default
    res.send({
      status: 'ok',
      __mock: true,
      __default: true,
      __ctx: ctx
    })
  }
})

bus.on('validation-failed', e => {
  const { res, errors } = e
  const message = 'Invalid payload submitted'
  // TODO include command info?
  res.status(400).json({
    message,
    errors
  })
})

app.get('/', function(req, res) {
  e.res.send('Hello World')
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

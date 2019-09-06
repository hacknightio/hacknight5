const express = require('express')
const app = express()

app.use(express.json())

app.get('/', function(req, res) {
  res.send('Hello World')
})

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

app.listen(3000)

function validTypes(Args, type) {
  return Args.reduce(
    (status, nextArg) => (status ? typeof nextArg === type : status),
    true
  )
}

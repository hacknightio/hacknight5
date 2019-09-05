const express = require('express')
const app = express()

app.use(express.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/misty/api/drive', function (req, res) {
  const { LinearVelocity, AngularVelocity } = req.body
  if (LinearVelocity && AngularVelocity){
    if (typeof(LinearVelocity) === Number && typeof(AngularVelocity) === Number){
      res.send(true)
    }
  }
  else {
    res.send(false)
  }
})

app.listen(3000)
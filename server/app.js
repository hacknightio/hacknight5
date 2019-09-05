const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/misty/api/drive', function (req, res) {
  const {linearVelocity, angularVelocity} = req.body
  if (linearVelocity && angularVelocity){
    console.log(linearVelocity, angularVelocity)
    res.send(true)
  }
  else {
    res.send(false)
  }
})

app.listen(3000)
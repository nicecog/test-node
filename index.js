const express = require('express')
const app = express()
const port = 3000
const test = null

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port,() => 
{
    console.log(`listening on port ${port}`)
    console.log()
});
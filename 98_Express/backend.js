const express = require('express')
const app = express()
const path=require('path')
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log(req.query.class)
})
app.get('/contact', (req, res) => {
  res.send('Contact')
})
app.get('/map', (req, res) => {
  res.send('map')
})
app.get('/about', (req, res) => {
  res.send('about')
})
app.get('/htmlparse', (req, res) => {
  res.sendFile(path.join(__dirname,'./index.html'))
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
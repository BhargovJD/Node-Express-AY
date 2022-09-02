const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })

app.get('/about', (req, res) => {
    res.send('<h2>About Page</h2>')
  })

app.listen(port, function(){
    console.log("Server started on port 3000")
})


// nodemon server.js
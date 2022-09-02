const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended:true}))

const port = 3000

// Getting request from browser
app.get('/', (req, res) => {
  res.sendFile(__dirname+"/index.html")
})

// Post request from browser
app.post('/', (req, res) => {
    var num1 = Number(req.body.fnumber);
    var num2 = Number(req.body.lnumber);

    var result = num1+num2

    res.send("The result of the calculation is: "+result);
  })



app.listen(port, function(){
    console.log("Server started on port 3000")
})


// nodemon server.js
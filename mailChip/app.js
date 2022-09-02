const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.use(express.static("public"))

app.use(bodyParser.urlencoded({extended:true}))

const port = 3000

// Getting request from browser
app.get('/', (req, res) => {
  res.sendFile(__dirname+"/signup.html")
})


// Getting post from browser
app.post('/', (req, res) => {
  const firstName = req.body.fname;
  const lastName = req.body.lname;
  const email = req.body.email;

  console.log(firstName,lastName,email)
})





app.listen(port, function(){
    console.log("Server started on port 3000")
})


// MailChip API
// bfe07bd0c56611944508637b3d25c656-us17
const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')


const app = express()
app.use(bodyParser.urlencoded({extended:true}))

const port = 3000


// Getting request from browser
// http://localhost:3000/
app.get('/', function(req, res)  {

    res.sendFile(__dirname+"/index.html")



//   res.send("Server is up and running...")
})


app.post("/", function(req,res){
const cityName = req.body.cityName;

const query =cityName;
const appKey = "ae232f006210eced62bfd717e9b74e1d&units"

const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+appKey+"=metric";



https.get(url, function(response){
    // console.log(response);
    // console.log(response.statusCode);

    // Hexadecimal data
    // response.on("data", function(data){
    //     console.log(data)
    // })

    response.on("data", function(data){
       const weatherData = JSON.parse(data)
       // console.log(weatherData)

       const temp = weatherData.main.temp
       const desc =  weatherData.weather[0].description
       const icon =  weatherData.weather[0].icon

    //    http://openweathermap.org/img/wn/10d@2x.png
       const imageUrl = " http://openweathermap.org/img/wn/"+icon+"@2x.png"
    //    console.log(temp)
    //    console.log(desc)
    res.write("<p>The weather is currently: "+desc+"</p>")
    res.write("<h1>The temp. in "+query+" is: "+temp+" degree Celcius.</h1>")
    res.write("<img src="+imageUrl+">")
    res.send()
    })


    // Changing Json into string
    // const obj = {
    //     name: "Bhargov",
    //     age:26
    // }
    // console.log(JSON.stringify(obj));


})
})





app.listen(port, function(){
    console.log("Server started on port 3000")
})



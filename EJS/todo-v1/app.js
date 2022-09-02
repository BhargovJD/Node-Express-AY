const express = require('express')
const bodyParser = require('body-parser')
const date = require(__dirname+'/date.js')

// console.log(date.getDate())
// console.log(date.getDay())

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.set("view engine","ejs")

const port = 3000

var items=["apple","banana"] ;
var workItems=[] ;

// Getting request from browser
// app.get('/', (req, res) => {
  
//   var today = new Date();
//   var currentDay = today.getDay()
//   var day =""
// //   1 = Monday
//   if(currentDay===6 || currentDay===0){
//     day = "Weekend"
//     // res.render('list',{kindOfDay:day})
//   }
//   else{
//     day = "Weekday"
//     // res.render('list',{kindOfDay:day})
//   }

//   res.render('list',{kindOfDay:day})
  
// })



// Getting request from browser
// app.get('/', (req, res) => {
  
//   var today = new Date();
//   var currentDay = today.getDay()
//   var day =""
// //   1 = Monday

// switch(currentDay){
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuseday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thurseday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
//   default:
//     console.log("Error")

// }
  

//   res.render('list',{kindOfDay:day})
  
// })



// Getting request from browser
app.get('/', (req, res) => {
  
 
var day = date.getDate()

  res.render('list',{listTitle:day, newListItems:items})
  
})



app.post('/', (req, res) => {
  
  // console.log(req.body)

  var item = req.body.newItem;

  if(req.body.list == 'Work_List'){
    workItems.push(item)
    res.redirect("/work")
  }
  else{
    items.push(item)
    res.redirect("/")
  }

})



app.get('/work', (req, res) => {
  
  res.render('list',{listTitle:"Work_List", newListItems:workItems})
  
})


app.get("/about", (req,res)=>{
  res.render("about")
})



app.listen(port, function(){
    console.log("Server started on port 3000")
})


// nodemon server.js
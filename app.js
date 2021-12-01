// const http = require('http');
// var createError = require('http-errors')  
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path'); 
//Express
const express = require('express')
const app = express() 
const mongoose = require('mongoose');

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017',
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
).then(()=>{
    console.log("Connected to Database");
}).catch((error)=>{
    console.log(error);
})

// log requests
app.use(morgan('tiny'));

// Import Router
 
const studentRouter = require("./routes/student");
const indexRouter = require("./routes/index");

app.use(express.json());
// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))
 
app.use("/api", studentRouter);
app.use("/", indexRouter);



// set view engine
app.set("view engine", "js")

app.listen(8080, () => {
  console.log("Server is running at port 8080");
});

 

// print the obj converted by the form
 
module.exports = app;
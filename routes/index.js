var express = require("express");
var router = express.Router();
const Student = require("../models/Student")

// GET Home Page

 
 Student.find().select("-__v").lean().exec()
    .then((data) => {
      // FIRST CONSOLE.LOG
      console.log(data);

      router.get("/", (req,res)=> res.render("index.ejs" ,{datas:data}));

      return data;
    })
    .catch((err) => {
      return 'error occured';
    });


module.exports = router;
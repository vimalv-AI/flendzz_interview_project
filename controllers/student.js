const Student = require("../models/Student")

global.grade = 0;
exports.addStudent = async (req, res) =>{

    try{
        console.log(req.body.mark);
         
         
        if(req.body.mark > 0 && req.body.mark <= 50){
            grade = "Fail";
           
        }
        if(req.body.mark >= 51 && req.body.mark <= 60){
            grade = "E+";
         
        }
        if(req.body.mark >= 61 && req.body.mark <= 70){
            grade = "D+";
        
        }
        if(req.body.mark >= 71 && req.body.mark <= 80){
            grade = "C+";
         
        }
        if(req.body.mark >= 81 && req.body.mark <= 90){
            grade = "B+";
        
        }
        if(req.body.mark >= 91 && req.body.mark <= 100){
             grade = "A+";
        
        }
 
 
        const student = new Student({
            _id:req.body._id,
            name:req.body.name,
            dob:req.body.dob,
            mark:req.body.mark,
            grade: grade
        });

        const savedStudent = await student.save();
        res.status(201).json({message:"Student Created"});

    } catch(err){
        res.status(400).send(err.message);
    }
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

};
 

exports.listStudent = async (req, res)=> {
    try{
        const studentFount = await Student.find().select("-__v").lean();
        res.status(200).json(studentFount);
    } catch (error) {
        res.status(400).send(error.message);
    }
};


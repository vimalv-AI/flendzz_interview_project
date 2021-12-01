const express = require("express");
const router = express.Router();

const studentController = require("../controllers/student");
// student data post

router.post("/student", studentController.addStudent);
router.get("/student", studentController.listStudent);


module.exports = router;
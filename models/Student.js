const mongoose = require("mongoose")
const Schema = mongoose.Schema;

// const {updatedAtIfCurrentPlugin} = require("mongoose-update-if-current");

const studentSchema = new Schema(
{
    _id: {type:String,required:[true, "ID Required"]},
    name: {type:String,required:[true, "Name Required"], maxLength: 200},
    dob: {type:Date,required:[true, "Roll Number Required"]},
    mark: {type:Number,required:[true, "Mark Required"]},
    grade: {type:String},
},
    {timestamps:{createdAt:"start", updatedAt:"u_dt"}}
)

// studentSchema.plugin(updatedAtIfCurrentPlugin);

module.exports = mongoose.model("Student", studentSchema, "student");




const mongoose = require("mongoose");

const employeeScheme = new mongoose.Schema({
      Full_name :{
        type:String,
        required: true
      },
      password :{
        type:String,
        required: true
      },
      confirm_password :{
        type:String,
        required: true
      },
      Scholar_Number:{
        type: Number,
        required: true,
        unique: true
      },
      Phone_no:{
        type: Number,
        required: true,
        unique: true
      },
      Email:{
        type:String,
        required:true,
        unique:true
      },
      DOBs:{
        type:String,
        required:true
      },
      Year_of_study:{
        type:Number,
        required:true
      },
      Course:{
        type:String,
        required:true
      },
      Gender:{
        type:String,
        required:true
      }
      
})


const Register = new mongoose.model("Register", employeeScheme);
module.exports = Register;
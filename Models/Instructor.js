const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InstructorSchema = new Schema({
    Username: {
      type: String,
      required: true, 
      unique: true
    },
    Password:{
      type: String,
      required: true
    },
    First_Name:{
      type: String,
      required: true
    },
    Last_Name:{
      type: String,
      required: true
    },
    Email:{
        type: String,
        required: true
    },
    Gender: {
      type: String,
      required: true
    },
    Bio:{
      type:String,
      required:false
    },
    Rating:{
      type:Number,
      required:false
    },
    Instructor_Ratings:{
      type:[Number],
      required:false
    }
  }, { timestamps: true });



  const Instructors = mongoose.model('instructor', InstructorSchema);
module.exports = Instructors;
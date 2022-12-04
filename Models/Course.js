const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const courseSchema = new Schema({
  Title:{
    type: String,
    required: true
  },
  Subject:{
    type: String,
    required: true
  },
  // Subtitles:{
  //   type: String,
  //   required: true
  // },
  Subtitles_Total_Hours:{
    type: Number,
    required: true
  },
  // Exercises:{
  //   type: String,
  //   required: true
  // },
  Course_Total_Hours:{
    type: Number,
    required: true
  },
  Price: {
    type: String,
    required: true
  }, 
  // Rating:{
  //   type: Number,
  //   required: true
  // },
  // Instructor_Name:{
  //       type:String,
  //       required:true
  //   },
  Discount:{
    type: Number,
    required:false
  },
  Course_Description:{
    type:String,
    required:false
  },
  PreviewLink:{
    type:String,
    required:true
  },
    Instructor:{
        type: mongoose.Types.ObjectId,
        ref:'instructor'
    },
}, { timestamps: true });

const Course = mongoose.model('course', courseSchema);
module.exports = Course;
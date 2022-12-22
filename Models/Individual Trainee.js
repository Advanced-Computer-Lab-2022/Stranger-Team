const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const individualTraineeSchema = new Schema({
  Username: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
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
  Gender:{
    type: String,
    required: true
  },
  Registered_Courses:{
    type:[mongoose.Types.ObjectId],
    ref:'course',
    required:false
  },
  Role:{
    type:String,
    reuired:true
  },
  Wallet:{
        type:Number,
        required:true,
        default:0
    }
}, { timestamps: true });

const Individual_Trainee = mongoose.model('individualTrainee', individualTraineeSchema);
module.exports = Individual_Trainee;
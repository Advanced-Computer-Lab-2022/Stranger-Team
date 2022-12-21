const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const refund = new Schema({
    CourseId:{
        type: mongoose.Types.ObjectId,
        ref:'course',
        required:true
    },
    Trainee_Id:{
        type:mongoose.Types.ObjectId,
        ref:'individualTrainee',
        required:true
    },
    RefundStatus:{
        type:String,
    },
    Amount:{
        type:String
    }

  }, { timestamps: true });
  const Refund = mongoose.model('refunds', refund);
module.exports = Refund;
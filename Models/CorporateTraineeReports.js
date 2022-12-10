const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const corporateTraineeReportSchema = new Schema({
    Corporate_Trainee_Id:{
        type:mongoose.Types.ObjectId,
        ref:'corporatetrainee',
        required:true
    },
    Reported_Problem:{
        type:String,
        required:true
    },
    Report_Type:{
        type:String,
        required:true
    },
    Status:{
        type:String,
        required:false
    }
}, { timestamps: true });

const CorporateTraineeReportSchema = mongoose.model('corporateTraineeReports', corporateTraineeReportSchema);
module.exports = CorporateTraineeReportSchema;
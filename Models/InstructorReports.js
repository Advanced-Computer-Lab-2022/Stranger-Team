const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const instructorReportSchema = new Schema({
    Instructor_Id:{
        type:mongoose.Types.ObjectId,
        ref:'instructor',
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
    },
    Username:{
        type:String,
        required:true
    },
    Admin_Response:{
        type:String,
        required:false
    }
}, { timestamps: true });

const InstructorReportSchema = mongoose.model('instructorReports', instructorReportSchema);
module.exports = InstructorReportSchema;
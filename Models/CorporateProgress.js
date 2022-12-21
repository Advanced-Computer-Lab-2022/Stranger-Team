const mongoose = require('mongoose');
//const { getNumberofSubtitlies } = require('../Routes/coursesController');
const Schema = mongoose.Schema;

const corporateTraineeProgress = new Schema({
    Corporate_Trainee_Id:{
        type:mongoose.Types.ObjectId,
        ref:'corporatetrainee',
        required:true
    },
    SubtitleId:{
        type:mongoose.Types.ObjectId,
        ref:'subtitles',
        required:false,
        default:""
    },
    ProgressStatus:{
        type:Boolean,
        default:false
    },
    Progress:{
        type:Number,
        default:0
    },
    CourseId:{
        type: mongoose.Types.ObjectId,
        ref:'course',
        required:true
    },
    
}, { timestamps: true });

const CorporateTraineeProgress = mongoose.model('corporateTraineeProgress', corporateTraineeProgress);
module.exports = CorporateTraineeProgress;
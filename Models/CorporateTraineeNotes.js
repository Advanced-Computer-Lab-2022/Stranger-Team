const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const corporateTraineeNotesSchema = new Schema({
    Corporate_Trainee_Id:{
        type:mongoose.Types.ObjectId,
        ref:'corporatetrainee',
        required:true
    },
    SubtitleId:{
        type:mongoose.Types.ObjectId,
        ref:'subtitles',
        required:true
    },
    Notes:{
        type:String
    }
    
}, { timestamps: true });

const CorporateTraineeNotes = mongoose.model('corporateTraineeNotes', corporateTraineeNotesSchema);
module.exports = CorporateTraineeNotes;
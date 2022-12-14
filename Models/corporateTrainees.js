    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;

    const corporateTraineeSchema = new Schema({
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
    Corporate: {
        type: String,
        required: true
    },
    Registered_Courses:{
    type:[mongoose.Types.ObjectId],
    ref:'course',
    required:false
    },
    Role: {
        type: String,
        required: true
    }
    }, { timestamps: true });

    const corporateTrainees = mongoose.model('corporateTrainees', corporateTraineeSchema);
    module.exports = corporateTrainees;
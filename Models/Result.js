const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const resultSchema = new Schema({
    
    UserID:
    {
        type: mongoose.Types.ObjectId,
        ref:'corporatetrainees'
    },

    EID: {
        type: mongoose.Types.ObjectId,
        ref:'exercises'
    },

    Res: {
        type: Array,
        default: []
    },

    Attempts: {
        type: Number,
        default: 0
    },

    Points: {
        type: Number,
        default: 0
    },

    Achieved: {
        type: String,
        default: ''
    }
    
  }, { timestamps: true });
  
  const result = mongoose.model('result', resultSchema);
  module.exports = result;
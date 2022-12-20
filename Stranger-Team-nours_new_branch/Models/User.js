const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
    // required: true
  },
  Last_Name:{
    type: String,
    // required: true
  },
  Gender:{
    type: String,
    // required: true
  },
  Country: {
      type: String,
      required: true
    },
    Currency: {
        type: String,
        required: true,
      }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
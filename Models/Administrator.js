const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const adminSchema = new Schema({
    Username: {
      type: String,
      required: true,
      unique: true
    },
    Password:{
      type: String,
      required: true
    },verified: { type: Boolean, default: true },
  },
 
   { timestamps: true });
   adminSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, "secret", {
        expiresIn: "7d",
    });
    return token;
};
  const Administrator = mongoose.model('admins', adminSchema);
module.exports = {Administrator};
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  gender: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  password: {
    type: String,
  },
  phoneNumber: {
    type: String,
    unique: true,
  },
  speciality: {
    type: String,
  },
  yearsOfExperience: {
    type: String,
  },
  educationBackground: {
    type: String,
  },
  address: {
    type: String,
  },
  CIN: {
    type: String,
    unique: true,
  },
  createdAt: {
    type: String,
  },
});

module.exports = mongoose.model("Doctors", doctorSchema);

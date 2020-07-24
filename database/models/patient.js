const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
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
  CIN: {
    type: String,
    unique: true,
  },
  phoneNumber: {
    type: String,
    unique: true,
  },
  address: {
    type: String,
  },
  job: {
    type: String,
  },
  createdAt: {
    type: String,
  },
  imageName: {
    type: String,
  },
});

module.exports = mongoose.model("Patients", patientSchema);

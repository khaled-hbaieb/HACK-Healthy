const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recordSchema = new Schema({
  patientCIN: {
    type: String,
    unique: true,
  },
  dateOfBirth: {
    type: String,
  },
  bloodType: {
    type: String,
  },
  allergies: {
    type: String,
  },
  vaccinations: {
    type: String,
  },
  fatherName: {
    type: String,
  },
  fatherNumber: {
    type: String,
    unique: true,
  },
  motherName: {
    type: String,
  },
  motherNumber: {
    type: String,
    unique: true,
  },
  createdAt: {
    type: String,
  },
});

module.exports = mongoose.model("Records", recordSchema);

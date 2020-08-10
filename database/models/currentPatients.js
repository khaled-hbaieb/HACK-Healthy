const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const currentPatientsSchema = new Schema({
  fullName: {
    type: String,
  },
  patientCIN: {
    type: String,
  },
  doctorCIN: {
    type: String,
  },
  doctorName:{
    type:String,
  },
  roomNumber: {
    type: String,
    unique: true,
  },
  entryDate: {
    type: String,
  },
  illness: {
    type: String,
  },
  createdAt: {
    type: String,
  },
  fullName: {
    type: String,
  },
  email: {
    type: String,
  },
  gender: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  address: {
    type: String,
  },
  job: {
    type: String,
  },
  imageName: {
    type: String,
  },
});

module.exports = mongoose.model("CurrentPatients", currentPatientsSchema);

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
});

module.exports = mongoose.model("CurrentPatients", currentPatientsSchema);

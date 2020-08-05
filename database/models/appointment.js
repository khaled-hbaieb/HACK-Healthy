const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  patientCIN: {
    type: String,
  },
  patientName: {
    type: String,
  },
  doctorName: {
    type: String,
  },
  doctorCIN: {
    type: String,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  cause: {
    type: String,
  },
  state: {
    type: Boolean,
  },
  createdAt: {
    type: String,
  },
});

module.exports = mongoose.model("Appointments", appointmentSchema);

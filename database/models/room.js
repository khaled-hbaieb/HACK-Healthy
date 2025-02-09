const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  roomNumber: {
    type: String,
    unique: true,
  },
  availibility: {
    type: Boolean,
  },
  patientCIN: {
    type: String,
  },
  doctorCIN: {
    type: String,
  },
});

module.exports = mongoose.model("Rooms", roomSchema);

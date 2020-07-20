const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const historySchema = new Schema({
  patientCIN: {
    type: String,
  },
  doctorCIN: {
    type: String,
  },
  entryDate: {
    type: String,
  },
  exitDate: {
    type: String,
  },
  roomNumber: {
    type: String,
  },
  drugs: {
    type: String,
  },
  operations: {
    type: String,
  },
  tests: {
    type: String,
  },
  illness: {
    type: String,
  },
  createdAt: {
    type: String,
  },
});

module.exports = mongoose.model("History", historySchema);

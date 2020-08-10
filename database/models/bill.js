const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billSchema = new Schema({
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
  tests: {
    type: String,
  },
  operations: {
    type: String,
  },
  drugs: {
    type: String,
  },
  toPay: {
    type: String,
  },
  state: {
    type: String,
  },
  paymentMethod: {
    type: String,
  },
  createdAt: {
    type: String,
  },
});

module.exports = mongoose.model("Bills", billSchema);

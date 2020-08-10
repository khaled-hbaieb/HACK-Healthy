const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AppointmentBillSchema = new Schema({
  patientCIN: {
    type: String,
  },
  doctorCIN: {
    type: String,
  },
  patientName: {
    type: String,
  },
  doctorName: {
    type: String,
  },
  time: {
    type: String,
  },
  date: {
    type: String,
  },
  toPay: {
    type: String,
  },
  paymentMethod: {
    type: String,
  },
  state: {
    type: String,
  },
  createdAt: {
    type: String,
  },
});
module.exports = mongoose.model("AppointmentBill", AppointmentBillSchema);

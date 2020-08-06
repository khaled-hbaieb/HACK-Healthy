const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AppointmentBillSchema = new Schema({
  patientCIN: {
    type: String,
  },
  doctorCIN: {
    type: String,
  },
  date: {
    type:String
  },
  toPay: {
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
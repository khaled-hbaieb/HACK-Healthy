const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clinicStateSchema = new Schema({
  numberOfRooms: {
    type: String,
  },
  numberOfDoctors: {
    type: String,
  },
  numberOfPatients: {
    type: String,
  },
  clinicName: {
    type: String,
    unique: true,
  },
  availableRooms: {
    type: String,
  },
});

module.exports = mongoose.model("ClinicState", clinicStateSchema);

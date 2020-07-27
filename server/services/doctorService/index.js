const Doctors = require("../../../database/models/doctor");
const bcrypt = require("bcrypt");
const {
  DocumentList,
} = require("twilio/lib/rest/preview/sync/service/document");
module.exports = {
  async findDoctors() {
    return Doctors.find({});
  },
  async searchDoctors(doctor) {
    if (doctor.fullName || doctor.speciality) {
      return Doctors.find(doctor);
    } else {
      return Doctors.find({});
    }
  },
  async createDoctor(doctor) {
    doctor.password = bcrypt.hashSync(doctor.password, 10);
    console.log(doctor)
    return Doctors.create(doctor);
  },
  async updateDoctor(doctor) {
    return Doctors.updateOne({ CIN: doctor.CIN }, doctor.doctor);
  },
};

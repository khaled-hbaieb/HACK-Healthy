const Doctors = require("../../../database/models/doctor");
const bcrypt = require("bcrypt");
module.exports = {
  async findDoctors(doctor) {
    return Doctors.find(doctor);
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

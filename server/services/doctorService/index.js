const Doctors = require("../../../database/models/doctor");

module.exports = {
  async findDoctors(doctor) {
    return Doctors.find(doctor);
  },
  async createDoctor(doctor) {
    return Doctors.create(doctor);
  },
  async updateDoctor(doctor) {
    return Doctors.updateOne({ CIN: doctor.CIN }, doctor.doctor);
  },
};

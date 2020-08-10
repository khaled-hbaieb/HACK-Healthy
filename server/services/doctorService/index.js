const Doctors = require("../../../database/models/doctor");
const bcrypt = require("bcrypt");

module.exports = {
  async findAllDoctors() {
    return Doctors.find({});
  },
  async findDoctors(filter) {
    return Doctors.find(filter);
  },
  async searchDoctors(doctor) {
    if (doctor.fullName) {
      return Doctors.find({ fullName: new RegExp(doctor.fullName, "i") });
    } else if (doctor.speciality) {
      return Doctors.find({ speciality: doctor.speciality });
    } else {
      return Doctors.find({});
    }
  },
  async createDoctor(doctor) {
    doctor.password = bcrypt.hashSync(doctor.password, 10);
    return Doctors.create(doctor)
  },
  async updateDoctor(filter, payload) {
    if (payload.password) {
      payload.password = bcrypt.hashSync(payload.password, 10);
    }
    return Doctors.updateOne(filter, payload)
  },
};

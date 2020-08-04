const Doctors = require("../../../database/models/doctor");
const bcrypt = require("bcrypt");
const {
  DocumentList,
} = require("twilio/lib/rest/preview/sync/service/document");
module.exports = {
  async findAllDoctors() {
    return Doctors.find({});
  },
  async findDoctor(doctor) {
    return Doctors.find(doctor);
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
    console.log(doctor);
    return Doctors.create(doctor);
  },
  async updateDoctor(filter, payload) {
    payload.password = bcrypt.hashSync(payload.password, 10);
    console.log('filter',filter)
    console.log('payload', payload)
    return Doctors.updateOne(filter, payload)
    .catch(err => console.log(err));
  },
};

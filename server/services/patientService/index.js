const Patients = require("../../../database/models/patient");
const bcrypt = require("bcrypt");

module.exports = {
  async findPatients(patient) {
    return Patients.find(patient);
  },
  async createPatient(patient) {
    patient.password = bcrypt.hashSync(patient.password, 10);
    return Patients.create(patient);
  },
  async updatePatient(filter, payload) {
    payload.password = bcrypt.hashSync(payload.password, 10);
    console.log('payload', payload)
    console.log('filter', filter)
    return Patients.updateOne(filter, payload).catch((err) => console.log(err));
  },

  async checkPatient(patient) {
    return Patients.find({ email: patient.email });
  },
};

const Patients = require("../../../database/models/patient");
const bcrypt = require("bcrypt");

module.exports = {
  async findAllPatients() {
    return Patients.find({});
  },
  async findPatients(filter) {
    return Patients.find(filter);
  },
  async createPatient(patient) {
    patient.password = bcrypt.hashSync(patient.password, 10);
    return Patients.create(patient);
  },
  async updatePatient(filter, payload) {
    if (payload.password) {
      payload.password = bcrypt.hashSync(payload.password, 10);
    }
    return Patients.updateOne(filter, payload);
  },
  async searchPatients(patient) {
    return Patients.find({ fullName: new RegExp(patient.fullName, "i") });
  },
  async checkPatient(filter) {
    return Patients.find(filter);
  },
};

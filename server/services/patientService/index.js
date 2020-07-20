const Patients = require("../../../database/models/patient");

module.exports = {
  async findPatients(patient) {
    return Patients.find(patient);
  },
  async createPatient(patient) {
    return Patients.create(patient);
  },
  async updatePatient(patient) {
    return Patients.updateOne({ CIN: patient.CIN }, patient.patient);
  },
};

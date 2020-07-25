const Patients = require("../../../database/models/patient");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  async findPatients(patient) {
    return Patients.find(patient);
  },
  async createPatient(patient) {
    patient.password = bcrypt.hashSync(patient.password, 10);
    console.log(patient);
    return Patients.create(patient);
  },
  async updatePatient(patient) {
    return Patients.updateOne({ CIN: patient.CIN }, patient.patient);
  },

  async checkPatient(patient) {
    return Patients.find({ email: patient.email });
  },
};

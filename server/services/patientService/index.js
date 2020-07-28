const Patients = require("../../../database/models/patient");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtDecode = require("jwt-decode");

module.exports = {
  async findPatients(patient) {
    return Patients.find(patient);
  },
  async createPatient(patient) {
    patient.password = bcrypt.hashSync(patient.password, 10);
    console.log(patient);
    return Patients.create(patient);
  },
  async updatePatient(filter, payload) {
    
    return Patients.updateOne(filter, payload)
    .catch( err => console.log(err))

  },

  async checkPatient(patient) {
    return Patients.find({ email: patient.email });
  },
};

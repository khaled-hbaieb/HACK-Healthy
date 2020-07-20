const Clinic = require("../../../database/models/clinicState");

module.exports = {
  async findClinic(clinic) {
    return Clinic.find(clinic);
  },
  async createClinic(clinic) {
    return Clinic.create(clinic);
  },
  async updatePatient(clinic) {
    return Clinic.updateOne({ clinicName: clinic.name }, clinic.clinic);
  },
};

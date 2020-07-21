const CurrentPatients = require("../../../database/models/currentPatients");

module.exports = {
  async findCurrentPatients(currentPatient) {
    return CurrentPatients.find(currentPatient);
  },
  async createClinic(currentPatient) {
    return CurrentPatients.create(currentPatient);
  },
};

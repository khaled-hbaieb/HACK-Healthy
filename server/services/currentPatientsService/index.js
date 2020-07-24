const CurrentPatients = require("../../../database/models/currentPatients");

module.exports = {
  async findCurrentPatients(currentPatients) {
    return CurrentPatients.find(currentPatients);
  },
  async createCurrentPatient(currentPatient) {
    return CurrentPatients.create(currentPatient);
  },
  async deleteCurrentPatient(currentPatient) {
    return CurrentPatients.deleteOne({ CIN: currentPatient.CIN });
  },
};

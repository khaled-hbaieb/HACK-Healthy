const CurrentPatients = require("../../../database/models/currentPatients");

module.exports = {
  async findAllCurrentPatients() {
    return CurrentPatients.find({});
  },
  async createCurrentPatient(currentPatient) {
    return CurrentPatients.create(currentPatient);
  },
  async findCurrentPatients(filter) {
    return CurrentPatients.find(filter);
  },
  async deleteCurrentPatient(currentPatient) {
    return CurrentPatients.deleteOne({ CIN: currentPatient.CIN });
  },
  async searchCurrentPatients(filter) {
    return CurrentPatients.find({
      fullName: new RegExp(filter.fullName, "i"),
    });
  },
};

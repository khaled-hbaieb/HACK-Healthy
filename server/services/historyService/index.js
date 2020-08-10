const History = require("../../../database/models/history");

module.exports = {
  async findHistory(history) {
    return History.find(history);
  },
  async createHistory(history) {
    return History.create(history);
  },
  async updateHistory(history) {
    return History.updateOne({ CIN: history.CIN }, history.history);
  },
  async findOneHistory(history) {
    return History.find({patientCIN : history.CIN});
  },
};

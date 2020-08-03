const Records = require("../../../database/models/record");

module.exports = {
  async createRecord(record) {
    return Records.create(record);
  },
  async findRecord(filter) {
    console.log(filter);
    return Records.find(filter);
  },
};

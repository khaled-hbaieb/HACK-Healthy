const Administrators = require("../../../database/models/administrator");

module.exports = {
  async findAdministrators(administrator) {
    return Administrators.find(administrator);
  },
  async createAdministrator(administrator) {
    return Administrators.create(administrator);
  },
  async updateAdministrator(administrator) {
    return Administrators.updateOne(
      { CIN: administrator.CIN },
      administrator.administrator
    );
  },
};

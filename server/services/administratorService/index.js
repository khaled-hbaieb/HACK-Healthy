const Administrators = require("../../../database/models/administrator");
const bcrypt = require("bcrypt");
const jwtDecode = require("jwt-decode");

module.exports = {
  async findAdministrators(administrator) {
    return Administrators.find(administrator);
  },
  async checkAdministrator(administrator) {
    return Administrators.find(administrator);
  },
  async createAdministrator(administrator) {
    administrator.password = bcrypt.hashSync(administrator.password, 10);
    return Administrators.create(administrator);
  },
  async updateAdministrator(administrator) {
    return Administrators.updateOne(
      { CIN: administrator.CIN },
      administrator.administrator
    );
  },
};

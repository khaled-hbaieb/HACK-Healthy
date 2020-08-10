const Administrators = require("../../../database/models/administrator");
const bcrypt = require("bcrypt");
const jwtDecode = require('jwt-decode')

module.exports = {
  async findAdministrators(administrator) {
    console.log(administrator)
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
  // async auth(administrator) {
  //   let token = jwtDecode(localStorage.getItem('token'))
  //   let user = await (r)
  // }
};

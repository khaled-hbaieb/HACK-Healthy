const Appointments = require("../../../database/models/appointment");

module.exports = {
  async findAppointments() {
    return Appointments.find({});
  },
  async findOneAppointment(appointment) {
    return Appointments.find(appointment);
  },
  async createAppointment(appointment) {
    return Appointments.create(appointment);
  },
  async updatePatient(filter, payload) {
    return Appointments.updateOne(filter, payload);
  },
};

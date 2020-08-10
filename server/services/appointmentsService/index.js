const Appointments = require("../../../database/models/appointment");

module.exports = {
  async findAllAppointments() {
    return Appointments.find({});
  },
  async findAppointments(filter) {
    return Appointments.find(filter);
  },
  async createAppointment(appointment) {
    return Appointments.create(appointment);
  },
  async updatePatient(filter, payload) {
    return Appointments.updateOne(filter, payload);
  },
  cancelAppointment(filter) {
    return Appointments.deleteOne(filter);
  },
  checkoutAppointment(filter) {
    return Appointments.updateOne(filter, { state: true });
  },
};

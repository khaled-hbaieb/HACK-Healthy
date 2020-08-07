const AppointmentBill = require("../../../database/models/appointmentsBill");
const Appointments = require("../../../database/models/appointment");

module.exports = {
  async findBills() {
    return AppointmentBill.find();
  },
  async makeAppointmentBill(appointmentBill) {
    console.log(appointmentBill);
    AppointmentBill.create(appointmentBill);
    Appointments.updateOne({ patientCIN: appointmentBill.patientCIN,time:'9',date:'2020-08-14'  },{ state: true } ).catch((e) => {
      console.log("e", e);
    });
  },
  async findAppointmentBill(appointmentBill) {
    return AppointmentBill.find(appointmentBill);
  },
  async updateAppointmentBill(history) {
    return AppointmentBill.updateOne({ patientCIN: appointmentBill.CIN }, appointmentBill.appointmentBill);
  },
};
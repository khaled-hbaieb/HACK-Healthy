const Bill = require("../../../database/models/bill");
const Rooms = require("../../../database/models/room");
const History = require("../../../database/models/history");
const CurrentPatients = require("../../../database/models/currentPatients");

module.exports = {
  async findBills() {
    return Bill.find({});
  },
  async makeBill(bill) {
    Bill.create(bill);
    CurrentPatients.deleteOne(
      { patientCIN: bill.patientCIN },
      { useFindAndModify: false }
    )
    Rooms.updateOne({ patientCIN: bill.patientCIN },{ availibility: true, patientCIN : "", doctorCIN:"" } )
    History.updateOne({ patientCIN: bill.patientCIN, entryDate : bill.entryDate },{ exitDate: bill.exitDate, drugs : bill.drugs, operations: bill.operations, tests: bill.tests} )
  },
  async findBill(filter) {
    return Bill.find(filter);
  },
  async updateBill(filter,payload) {
    return Bill.updateOne(filter,payload);
  },
};

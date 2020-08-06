const Bill = require("../../../database/models/bill");
const Rooms = require("../../../database/models/room");
const History = require("../../../database/models/history");
const CurrentPatients = require("../../../database/models/currentPatients");

module.exports = {
  async findBills() {
    return Bill.find();
  },
  async makeBill(bill) {
    console.log(bill);
    Bill.create(bill);
    CurrentPatients.deleteOne(
      { patientCIN: bill.patientCIN },
      { useFindAndModify: false }
    ).catch((e) => {
        console.log("e", e);
      });
    Rooms.updateOne({ patientCIN: bill.patientCIN },{ availibility: true, patientCIN : "", doctorCIN:"" } ).catch((e) => {
      console.log("e", e);
    });
    History.updateOne({ patientCIN: bill.patientCIN, entryDate : bill.entryDate },{ exitDate: bill.exitDate, drugs : bill.drugs, operations: bill.operations, tests: bill.tests} ).catch((e) => {
      console.log("e", e);
    });
  },
  async findBill(bill) {
    return Bill.find(bill);
  },
  async updateBill(history) {
    return Bill.updateOne({ patientCIN: Bill.CIN }, bill.bill);
  },
};

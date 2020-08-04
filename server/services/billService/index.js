const Bill = require("../../../database/models/bill");

module.exports = {
  async findBills() {
    return Bill.find();
  },
  async makeBill(bill) {
    return Bill.create(bill);
  },
  async findBill(bill) {
    return Bill.find(bill);
  },
  async updateBill(history) {
    return Bill.updateOne({ CIN: Bill.CIN }, bill.bill);
  },
};

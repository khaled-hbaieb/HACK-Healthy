const express = require("express");

const router = express.Router();
const services = require("../../services");

router.get("/", async (req, res) => {
  try {
    var bill = await services.billService.findBills();
    res.send(bill);
  } catch (error) {
    res.send(error);
  }
});
router.post("/makeBill", async (req, res) => {
  try {
    var bill = await services.billService.makeBill(req.body);
    res.send(bill);
  } catch (error) {
    res.send(error);
  }
});
router.post("/findBill", async (req, res) => {
  try {
    var bill = await services.billService.findBill(req.body);
    res.send(bill);
  } catch (error) {
    res.send(error);
  }
});
router.post("/updateBill", async (req, res) => {
  try {
    let filter = req.body.filter;
    let payload = req.body.payload;
    var bill = await services.billService.updateBill(filter, payload);
    res.send(bill);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;

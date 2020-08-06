const express = require("express");

const router = express.Router();
const services = require("../../services");

router.get("/", async (req, res) => {
  try {
    var appointmentBill = await services.appointmentsBillService.findBills();
    res.send(appointmentBill);
  } catch (error) {
    res.send(error);
  }
});
router.post("/makeAppointmentBill", async (req, res) => {
  try {
    var appointmentBill = await services.appointmentsBillService.makeAppointmentBill(req.body);
    res.send(appointmentBill);
  } catch (error) {
    res.send(error);
  }
});
router.post("/findAppointmentBill", async (req, res) => {
  try {
    var appointmentBill = await services.appointmentsBillService.findAppointmentBill(req.body);
    res.send(appointmentBill);
  } catch (error) {
    res.send(error);
  }
});
router.post("/updateAppointmentBill", async (req, res) => {
  try {
    let filter = req.body.filter;
    let payload = req.body.payload;
    var appointmentBill = await services.appointmentsBillService.updateAppointmentBill(filter, payload);
    res.send(appointmentBill);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;

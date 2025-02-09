const express = require("express");

const router = express.Router();
const services = require("../../services");

router.get("/", async (req, res) => {
  try {
    var appointment = await services.appointmentsService.findAllAppointments();
    res.send(appointment);
  } catch (error) {
    res.send(error);
  }
});
router.post("/findAppointments", async (req, res) => {
  try {
    var appointment = await services.appointmentsService.findAppointments(
      req.body
    );
    res.send(appointment);
  } catch (error) {
    res.send(error);
  }
});
router.post("/createAppointment", async (req, res) => {
  try {
    var appointment = await services.appointmentsService.createAppointment(
      req.body
    );
    res.send(appointment);
  } catch (error) {
    res.send(error);
  }
});
router.put("/updateAppointment", async (req, res) => {
  try {
    var appointment = await services.appointmentsService.updateAppointment(
      req.body.filter,
      req.body.payload
    );
    res.send(appointment);
  } catch (error) {
    res.send(error);
  }
});
router.post("/cancelAppointment", async (req, res) => {
  try {
    var appointment = await services.appointmentsService.cancelAppointment(
      req.body
    );
    res.send(appointment);
  } catch (error) {
    res.send(error);
  }
});
router.post("/checkoutAppointment", async (req, res) => {
  try {
    var appointment = await services.appointmentsService.checkoutAppointment(
      req.body
    );
    res.send(appointment);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;

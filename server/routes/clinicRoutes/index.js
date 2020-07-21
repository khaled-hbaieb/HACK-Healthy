const express = require("express");

const router = express.Router();
const services = require("../../services");

router.post("/", async (req, res) => {
  try {
    var Clinic = await services.clinicService.findClinic(req.body);
    res.send(Clinic);
  } catch (error) {
    res.send(error);
  }
});
router.post("/createClinic", async (req, res) => {
  try {
    var newClinic = await services.clinicService.createClinic(req.body);
    res.send(newClinic);
  } catch (error) {
    res.send(error);
  }
});
router.post("/updateClinic", async (req, res) => {
  try {
    var newClinic = await services.clinicService.updatePatient(req.body);
    res.send(newClinic);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;

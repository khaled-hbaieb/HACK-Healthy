const express = require("express");

const router = express.Router();
const services = require("../../services");

router.post("/", async (req, res) => {
  try {
    var Patients = await services.patientService.findPatients(req.body);
    res.send(Patients);
  } catch (error) {
    res.send(error);
  }
});
router.post("/createPatient", async (req, res) => {
  try {
    
    var newPatient = await services.patientService.createPatient(req.body);
    res.send(newPatient);
  } catch (error) {
    res.send(error);
  }
});
router.post("/updatePatient", async (req, res) => {
  try {
    var newPatient = await services.patientService.updatePatient(req.body);
    res.send(newPatient);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;

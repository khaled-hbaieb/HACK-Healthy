const express = require("express");

const router = express.Router();
const services = require("../../services");

router.post("/", async (req, res) => {
  try {
    var Doctors = await services.doctorService.findDoctors(req.body);
    res.send(Doctors);
  } catch (error) {
    res.send(error);
  }
});
router.post("/createDoctor", async (req, res) => {
  try {
    var newDoctor = await services.doctorService.createDoctor(req.body);
    res.send(newDoctor);
  } catch (error) {
    res.send(error);
  }
});
router.post("/updateDoctor", async (req, res) => {
  try {
    var newDoctor = await services.doctorService.updateDoctor(req.body);
    res.send(newDoctor);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;

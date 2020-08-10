const express = require("express");

const router = express.Router();
const services = require("../../services");
const currentPatients = require("../../../database/models/currentPatients");

router.get("/", async (req, res) => {
  try {
    var CurrentPatients = await services.currentPatientsService.findAllCurrentPatients();
    res.send(CurrentPatients);
  } catch (error) {
    res.send(error);
  }
});
router.post("/createCurrentPatient", async (req, res) => {
  try {
    var CurrentPatients = await services.currentPatientsService.createCurrentPatient(
      req.body
    );
    res.send(CurrentPatients);
  } catch (error) {
    res.send(error);
  }
});
router.post("/findCurrentPatients", async (req, res) => {
  try {
    var CurrentPatients = await services.currentPatientsService.findCurrentPatients(
      req.body
    );
    res.send(CurrentPatients);
  } catch (error) {
    res.send(error);
  }
});
router.post("/deleteCurrentPatient", async (req, res) => {
  try {
    var CurrentPatients = await services.currentPatientsService.deleteCurrentPatient(
      req.body
    );
    res.send(CurrentPatients);
  } catch (error) {
    res.send(error);
  }
});
router.post("/searchCurrentPatients", async (req, res) => {
  try {
    var CurrentPatients = await services.currentPatientsService.searchCurrentPatients(
      req.body
    );
    res.send(CurrentPatients);
  } catch (error) {
    res.send(error);
  }
});
module.exports = router;

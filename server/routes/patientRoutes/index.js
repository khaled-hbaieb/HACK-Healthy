const express = require("express");
const Patient = require("../../../database/models/patient");
const router = express.Router();
const services = require("../../services");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  try {
    var Patients = await services.patientService.findPatients(req.body);
    res.send(Patients);
  } catch (error) {
    res.send(error);
  }
});

router.post("/createpatient", async (req, res) => {
  try {
    var newPatient = await services.patientService.createPatient(req.body);
    res.send({ newPatient, yes: "yo" });
  } catch (error) {
    res.send(error);
  }
});

router.put("/updatePatient", async (req, res) => {
  try {
    let filter = req.body.filter;
    let payload = req.body.payload;
    var newPatient = await services.patientService.updatePatient(
      filter,
      payload
    );
    res.send(newPatient);
  } catch (error) {
    res.send(error);
  }
});

router.post("/checkPatient", async (req, res) => {
  try {
    var Patients = await services.patientService.findPatients(req.body);
    res.send(Patients);
  } catch (err) {
    res.send(err);
  }
});

router.post("/checkLogin", (req, res) => {
  Patient.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      return res.status(500).json({
        title: "server error",
        error: err,
      });
    }
    if (!user) {
      return res.status(401).json({
        title: "user not found",
        error: "invalid credentials",
      });
    }
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(401).json({
        title: "login failed",
        error: "invalid credentials",
      });
    }
    let token = jwt.sign({ userId: user._id }, "secretKey");
    return res.status(200).json({
      title: "login success",
      token: token,
      user: user,
    });
  });
});

module.exports = router;

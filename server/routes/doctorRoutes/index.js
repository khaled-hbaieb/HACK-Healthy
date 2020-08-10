const express = require("express");
const Doctors = require("../../../database/models/doctor");
const router = express.Router();
const services = require("../../services");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
  try {
    var Doctors = await services.doctorService.findAllDoctors();
    res.send(Doctors);
  } catch (error) {
    res.send(error);
  }
});
router.post("/findDoctors", async (req, res) => {
  try {
    var Doctor = await services.doctorService.findDoctors(req.body);
    res.send(Doctor);
  } catch (error) {
    res.send(error);
  }
});
router.post("/searchDoctors", async (req, res) => {
  try {
    var Doctors = await services.doctorService.searchDoctors(req.body);
    res.send(Doctors);
  } catch (error) {
    res.send(error);
  }
});
router.post("/createdoctor", async (req, res) => {
  try {
    let newDoc = await services.doctorService.createDoctor(req.body);
    res.send(newDoc);
  } catch (error) {
    res.send(error);
  }
});

router.put("/updateDoctor", async (req, res) => {
  try {
    let filter = req.body.filter;
    let payload = req.body.payload;
    var newDoctor = await services.doctorService.updateDoctor(filter, payload);
    res.send(newDoctor);
  } catch (error) {
    res.send(error);
  }
});

router.post("/checkLogin", (req, res) => {
  Doctors.findOne({ email: req.body.email }, (err, user) => {
    if (err)
      return res.status(500).json({
        title: "server error",
        error: err,
      });

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
    });
  });
});
router.post("/checkDoctor", async (req, res) => {
  try {
    var Doctors = await services.doctorService.findDoctors(req.body);
    res.send(Doctors);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;

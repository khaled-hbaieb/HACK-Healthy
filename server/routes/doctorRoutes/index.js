const express = require("express");
const Doctors = require("../../../database/models/doctor");
const router = express.Router();
const services = require("../../services");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
  try {
    var Doctors = await services.doctorService.findDoctors();
    res.send(Doctors);
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

router.post("/updateDoctor", async (req, res) => {
  try {
    var newDoctor = await services.doctorService.updateDoctor(req.body);
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

module.exports = router;

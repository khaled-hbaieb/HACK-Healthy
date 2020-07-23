const express = require("express");
const Patient = require('../../../database/models/patient')
const router = express.Router();
const services = require("../../services");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// router.post("/", async (req, res) => {
//   try {
//     var Patients = await services.patientService.findPatients(req.body);
//     res.send(Patients);
//   } catch (error) {
//     res.send(error);
//   }
// });
// router.post("/createPatient", async (req, res) => {
//   try {
//     var newPatient = await services.patientService.createPatient(req.body);
//     res.send(newPatient);
//   } catch (error) {
//     res.send(error);
//   }
// });

router.post('/createpatient', async (req, res) => {
  console.log('req of body', req.body)
  try {
    var newPatient = await services.patientService.createPatient(req.body);
    res.send(newPatient);
  } catch (error) {
    res.send(error);
  }
  

})

router.post("/updatePatient", async (req, res) => {
  try {
    var newPatient = await services.patientService.updatePatient(req.body);
    res.send(newPatient);
  } catch (error) {
    res.send(error);
  }
});
router.post("/checkPatient", async (req, res) => {
  try {
    // console.log('test',req.body)
    var Patients = await services.patientService.checkPatient(req.body);
    console.log("patients", !!Patients.length);
    res.send(Patients);
  } catch (err) {
    res.send(err);
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

router.post('/checkLogin', (req, res) => {
  Patient.findOne({ email: req.body.email}, (err, user) => {
    if (err) return res.status(500).json({
      title:'server error', 
      error: err
    })
    console.log('user',user)
    if(!user) {
      return res.status(401).json({
        title:'user not found',
        error: 'invalid credentials'
      })
    }
    console.log('userpw',user.password)
    console.log('body',req.body.password)
    // incorrect password
    if(!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(401).json ({
        title: 'login failed',
        error: 'invalid credentials'
      })
    }
    //case if all is good create a token and send to front
    let token = jwt.sign({ userId: user._id}, 'secretKey') // => assigned only the user id to the token // add more here
    return res.status(200).json({
      title: 'login success',
      token: token
    })
  })
})

module.exports = router;

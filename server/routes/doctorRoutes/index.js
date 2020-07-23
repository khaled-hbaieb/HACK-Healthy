const express = require("express");
const Doctors = require('../../../database/models/doctor')
const router = express.Router();
const services = require("../../services");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

// router.post("/", async (req, res) => {
//   try {
//     var Doctors = await services.doctorService.findDoctors(req.body);
//     res.send(Doctors);
//   } catch (error) {
//     res.send(error);
//   }
  
// });
// router.post("/createDoctor", async (req, res) => {
//   try {
//     var newDoctor = await services.doctorService.createDoctor(req.body);
//     res.send(newDoctor);
//   } catch (error) {
//     res.send(error);
//   }
// });

router.post('createDoctor', (req, res) => {
  const newUser = new Doctors({
    email: req.body.email,
    
    password: bcrypt.hashSync(req.body.password, 10),
  });
  newUser.save((err) => {
    if (err) {
      return res.status(400).json({
        title: "error",
        error: "email in use",
      });
    }
    return res.status(200).json({
      title: "sign Up success",
    });
  });
})

router.post("/updateDoctor", async (req, res) => {
  try {
    var newDoctor = await services.doctorService.updateDoctor(req.body);
    res.send(newDoctor);
  } catch (error) {
    res.send(error);
  }
});

router.post('/checkLogin', (req, res) => {
  Doctors.findOne({ email: req.body.email}, (err, user) => {
    if (err) return res.status(500).json({
      title:'server error', 
      error: err
    })
    if(!user) {
      return res.status(401).json({
        title:'user not found',
        error: 'invalid credentials'
      })
    } // incorrect password
    // if(!bcrypt.compareSync(req.body.password, user.password)) {
    //   return res.status(401).json ({
    //     title: 'login failed',
    //     error: 'invalid credentials'
    //   })
    // }
    //case if all is good create a token and send to front
    let token = jwt.sign({ userId: user._id}, 'secretKey') // => assigned only the user id to the token // add more here
    return res.status(200).json({
      title: 'login success',
      token: token
    })
  })
})

module.exports = router;

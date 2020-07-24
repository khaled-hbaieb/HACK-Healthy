const express = require("express");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const router = express.Router();
const services = require("../../services");
const Administrator = require('../../../database/models/administrator')

router.post("/", async (req, res) => {
  try {
    var Administrators = await services.administratorService.findAdministrators(
      req.body
    );
    res.send(Administrators);
  } catch (error) {
    res.send(error);
  }
});
// router.post("/createAdministrator", async (req, res) => {
//   try {
//     var newAdministrator = await services.administratorService.createAdministrator(
//       req.body
//     );
//     res.send(newAdministrator);
//   } catch (error) {
//     res.send(error);
//   }
// });

router.post('createAdministrator', (req, res) => {
  const newUser = new Administrator({
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

router.post("/updateAdministrator", async (req, res) => {
  try {
    var newAdministrator = await services.administratorService.updateAdministrator(
      req.body
    );
    res.send(newAdministrator);
  } catch (error) {
    res.send(error);
  }
});

router.post('/checkLogin', (req, res) => {
  Administrator.findOne({ email: req.body.email}, (err, user) => {
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

const Patients = require("../../../database/models/patient");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  async findPatients(patient) {
    return Patients.find(patient);
  },
  async createPatient(patient) {
    patient.password = bcrypt.hashSync(patient.password, 10);
    return Patients.create(patient);
  },
  async updatePatient(patient) {
    return Patients.updateOne({ CIN: patient.CIN }, patient.patient);
  },

  async checkPatient(patient) {
    //   return Patients.find({email: patient.email}, (err, user) => {
    //     console.log('userrrr', user)

    //     if(!user) {
    //       return res.status(401).json({
    //         title:'user not found',
    //         error: 'invalid credentials'
    //       })
    //     } //incorrect password
    //     if(!bcrypt.compareSync(patient.password, user[0].password)) {
    //       return res.status(401).json ({
    //         title: 'login failed',
    //         error: 'invalid credentials'
    //       })
    //     } // if all good
    //     let token = jwt.sign({ userId: user[0]._id}, 'secretKey')
    //     return res.status(200).json({
    //       title: 'login success',
    //       token: token
    //     })
    //   })
    return Patients.find({ email: patient.email });
  },
};

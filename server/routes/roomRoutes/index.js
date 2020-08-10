const express = require("express");

const router = express.Router();
const services = require("../../services");

router.post("/", async (req, res) => {
  try {
    var Rooms = await services.roomService.findRooms(req.body);
    res.send(Rooms);
  } catch (error) {
    res.send(error);
  }
});
router.post("/createRooms", async (req, res) => {
  try {
    let rooms = await services.roomService.createRooms(req.body);
    res.send(rooms);
  } catch (error) {
    res.send(error);
  }
});
router.post("/assignRoom", async (req, res) => {
  try {
    let roomNumber = req.body.roomNumber;
    let patientCIN = req.body.CIN;
    let doctorCIN = req.body.doctorCIN;
    let illness = req.body.illness;
    let entryDate = req.body.entryDate;
    let fullName = req.body.fullName;
    let job = req.body.job;
    let address = req.body.address;
    let gender = req.body.gender;
    let dateOfBirth = req.body.dateOfBirth;
    let email = req.body.email;
    let phoneNumber = req.body.phoneNumber;
    let imageName = req.body.imageName;

    let arrayOfPromises = [];
    arrayOfPromises.push(
      services.roomService.updateRoom(
        {
          roomNumber,
        },
        {
          patientCIN,
          doctorCIN,
          availibility: false,
        }
      )
    );
    arrayOfPromises.push(
      services.currentPatientsService.createCurrentPatient({
        fullName,
        email,
        job,
        address,
        gender,
        dateOfBirth,
        imageName,
        phoneNumber,
        roomNumber,
        doctorCIN,
        patientCIN,
        illness,
        entryDate,
      })
    );
    arrayOfPromises.push(
      services.historyService.createHistory({
        roomNumber,
        doctorCIN,
        patientCIN,
        illness,
        entryDate,
      })
    );
    Promise.all(arrayOfPromises);
    res.send("Room Assigned");
  } catch (error) {
    res.send(error);
  }
});
router.post("/checkoutRoom", async (req, res) => {
  try {
    var newRoom = await services.roomService.updateRoom(req.body);
    res.send(newRoom);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;

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
    let patientCIN = req.body.CINP;
    let doctorCIN = req.body.CIND;
    let illness = req.body.illness;
    let entryDate = req.body.ED;
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
    console.log(error);
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

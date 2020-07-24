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
router.post("/assignRoom", async (req, res) => {
  try {
    let roomNumber = req.body.roomNumber;
    let patientCIN = req.body.patientCIN;
    let doctorCIN = req.body.doctorCIN;
    let illness = req.body.illness;
    let entryDate = new Date().now();
    await services.roomService.updateRoom({
      roomNumber,
      patientCIN,
      doctorCIN,
    });
    await services.currentPatientsService.createCurrentPatient({
      roomNumber,
      doctorCIN,
      patientCIN,
      illness,
    });
    await services.historyService.createHistory({
      roomNumber,
      doctorCIN,
      patientCIN,
      illness,
      entryDate,
    });
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

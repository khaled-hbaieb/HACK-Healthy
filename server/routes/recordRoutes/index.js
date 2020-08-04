const express = require("express");

const router = express.Router();
const services = require("../../services");
router.post("/findRecord", async (req, res) => {
  try {
    var Record = await services.recordService.findRecord(req.body);
    res.send(Record);
  } catch (error) {
    res.send(error);
  }
});
router.post("/createRecord", async (req, res) => {
  try {
    var Record = await services.recordService.createRecord(req.body);
    res.send(Record);
  } catch (error) {
    res.send(error);
  }
});
module.exports = router;

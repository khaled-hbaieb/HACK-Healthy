const express = require("express");

const router = express.Router();
const services = require("../../services");

router.post("/", async (req, res) => {
  try {
    var history = await services.historyService.findHistory(req.body);
    res.send(history);
  } catch (error) {
    res.send(error);
  }
});
router.post("/createHistory", async (req, res) => {
  try {
    var history = await services.historyService.createHistory(req.body);
    res.send(history);
  } catch (error) {
    res.send(error);
  }
});
router.post("/findOneHistory", async (req, res) => {
  try {
    var history = await services.historyService.findOneHistory(req.body);
    res.send(history);
  } catch (error) {
    res.send(error);
  }
});
router.post("/updateHistory", async (req, res) => {
  try {
    var history = await services.historyService.updateHistory(req.body);
    res.send(history);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;

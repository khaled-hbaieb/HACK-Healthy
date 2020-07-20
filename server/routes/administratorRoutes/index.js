const express = require("express");

const router = express.Router();
const services = require("../../services");

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
router.post("/createAdministrator", async (req, res) => {
  try {
    var newAdministrator = await services.administratorService.createAdministrator(
      req.body
    );
    res.send(newAdministrator);
  } catch (error) {
    res.send(error);
  }
});
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

module.exports = router;

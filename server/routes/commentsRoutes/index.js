const express = require("express");

const router = express.Router();
const services = require("../../services");

router.post("/createComment", async (req, res) => {
  try {
    var Comment = await services.commentsService.createComment(req.body);
    res.send(Comment);
  } catch (error) {
    res.send(error);
  }
});
router.post("/findComments", async (req, res) => {
  try {
    var Comments = await services.commentsService.findComments(req.body);
    res.send(Comments);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;

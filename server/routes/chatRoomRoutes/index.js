const express = require("express");
const router = express.Router();

const services = require("../../services");

router.get("/", async (req, res) => {
    try {
      var chat = await services.chatRoomService.findMessages(
        req.body
      );
      res.send(chat);
    } catch (error) {
      res.send(error);
    }
  });

  router.post("/messages", async (req, res) => {
    try {
      var message = await services.chatRoomService.createMessage(req.body);
      res.send(message);
    } catch (error) {
      res.send(error);
    }
  });

  router.post("/findMessages", async (req, res) => {
    try {
      var message = await services.chatRoomService.findMessages(req.body);
      res.send(message);
    } catch (error) {
      res.send(error);
    }
  });
  module.exports = router


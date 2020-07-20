const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatRoomSchema = new Schema({
  nameOfSender: {
    type: String,
  },
  message: {
    type: String,
  },
  room: {
    type: String,
  },
  createdAt: {
    type: String,
  },
});

module.exports = mongoose.model("ChatRoom", chatRoomSchema);

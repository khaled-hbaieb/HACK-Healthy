const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatRoomSchema = new Schema({
  nameOfSender: {
    type: String,
  },
  nameOfReceiver: {
    type: String,
  },
  message: {
    type: String,
  },

  createdAt: {
    type: String,
  },
  imageName: {
    type: String,
  }
});

module.exports = mongoose.model("ChatRoom", chatRoomSchema);

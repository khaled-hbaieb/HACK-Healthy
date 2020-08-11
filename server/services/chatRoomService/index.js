const ChatRoom = require("../../../database/models/chatRoom");

module.exports = {
 
  async findAllMessages() {
    return ChatRoom.find({});
  },
  async createMessage(message) {
      console.log(message)
    return ChatRoom.create(message);
  },
  async findMessages(filter) {
    return ChatRoom.find(filter);
  },
};
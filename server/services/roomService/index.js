const Rooms = require("../../../database/models/room");

module.exports = {
  async findRooms(room) {
    return Rooms.find(room);
  },
  async updateRoom(filter, payload) {
    return Rooms.updateOne(filter, payload);
  },
  async createRooms(rooms) {
    return Rooms.create(rooms);
  },
};

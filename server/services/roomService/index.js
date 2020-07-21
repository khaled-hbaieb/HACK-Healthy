const Rooms = require("../../../database/models/room");

module.exports = {
  async findRooms(room) {
    return Rooms.find(room);
  },
  async updateRoom(room) {
    return Rooms.update({ room: room.roomNumber }, room.room);
  },
};

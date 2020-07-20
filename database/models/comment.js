const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  idOfPost: {
    type: String,
  },
  nameOfCommenter: {
    type: String,
  },
  text: {
    type: String,
  },
  createdAt: {
    type: String,
  },
});

module.exports = mongoose.model("Comments", commentSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const forumPostSchema = new Schema({
  nameOfPoster: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  views: {
    type: Number,
  },
  createdAt: {
    type: String,
  },
});

module.exports = mongoose.model("Forum", forumPostSchema);

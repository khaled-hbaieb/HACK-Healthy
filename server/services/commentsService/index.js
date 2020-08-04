const Comments = require("../../../database/models/comment");

module.exports = {
async createComment(comment) {
    console.log(comment)
    return Comments.create(comment);
  },
}
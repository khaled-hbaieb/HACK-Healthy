const Comments = require("../../../database/models/comment");

module.exports = {
  async createComment(comment) {
    return Comments.create(comment);
  },
  async findComments(filter) {
    return Comments.find(filter);
  },
  async editComment(filter, payload) {
    return Comments.updateOne(filter, payload);
  },
  async deleteComment(filter) {
    return Comments.deleteOne(filter);
  },
};

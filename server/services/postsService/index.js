const Posts = require("../../../database/models/forum");

module.exports = {
  async findAllPosts() {
    return Posts.find({});
  },
  async findPosts(filter) {
    return Posts.find(filter);
  },
  async createPost(post) {
    return Posts.create(post);
  },
  async updatePost(filter, payload) {
    console.log("filter", filter, "payload", payload);
    return Posts.updateOne(filter, payload);
  },
};

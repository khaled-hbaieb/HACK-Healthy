const express = require("express");

const router = express.Router();
const services = require("../../services");
router.get("/", async (req, res) => {
  try {
    var posts = await services.postsService.findAllPosts();
    res.send(posts);
  } catch (error) {
    res.send(error);
  }
});
router.post("/findPost", async (req, res) => {
  try {
    var posts = await services.postsService.findPosts(req.body);
    res.send(posts);
  } catch (error) {
    res.send(error);
  }
});
router.post("/createPost", async (req, res) => {
  try {
    var post = await services.postsService.createPost(req.body);
    res.send(post);
  } catch (error) {
    res.send(error);
  }
});
router.put("/updatePost", async (req, res) => {
  try {
    let filter = req.body.filter;
    let payload = req.body.payload;
    let newPost = await services.postsService.updatePost(filter, payload);
    res.send(newPost);
  } catch (error) {
    res.send(error);
  }
});
module.exports = router;

const express = require("express");
const router = express.Router();
const services = require("../../services");
const fs = require("fs");

router.post("/upload-images", async (req, res) => {
  try {
    const uploader = async (path) => {
      await services.multerService.upload("image");
      await services.cloudinaryService.uploads("path", "Images");

      const urls = [];
      const files = req.files;

      for (const file of files) {
        const { path } = file;

        const newPath = await uploader(path);

        urls.push(newPath);

        fs.unlinkSync(path);
      }
      res.status(200).json({
        message: "Images Uploaded successfully",
        data: urls,
      });
    };
  } catch (error) {
    res.status(405).json({
      err: "Images not uploaded successfully",
    });
  }
});
module.exports = router;

const express = require("express");

const router = express.Router();
const services = require("../../services");

router.post("/uploadfile", (req, res, next) => {
  try {
    services.multerService.upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
      } else if (err) {
      }
      // Everything went fine.
    });
    req.body.photo = req.file.filename;
    res.send(req.body.photo);
  } catch (error) {
    res.send(error);
  }
});
module.exports = router;

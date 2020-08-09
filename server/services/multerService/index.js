const multer = require("multer");
const path = require("path");

module.exports = {
  async storage() {
    multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "uploads/");
      },
      filename: function (req, file, cb) {
        cb(null, path.extname(file.originalname));
      },
    });
  },
  async fileFilter(req, file, cb) {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb({ message: "Invalid File Format" }, false);
    }
  },
  async upload(name) {
    multer({
      storage: storage,
      limits: { fileSize: 1024 * 1024 },
      fileFilter: fileFilter,
    }).single(name);
  },
};

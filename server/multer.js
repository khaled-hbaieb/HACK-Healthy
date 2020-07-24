const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb({ message: "Invalid File Format" }, false);
  }
};
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 },
  fileFilter: fileFilter,
});

module.exports = upload;

// app.post("/uploadfile", upload, (req, res, next) => {
//   upload(req, res, function (err) {
//     if (err instanceof multer.MulterError) {
//     } else if (err) {
//     }
//     // Everything went fine.
//   });
//   req.body.photo = req.file.filename;
//   console.log(req.body);
//   res.end();
// });

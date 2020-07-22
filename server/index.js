const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const path = require("path");
const multer = require("multer");
require("dotenv").config();

const app = express();

const PORT = 3000;

app.use(express.static("client/dist"));

app.use(bodyParser.json());

app.get("*", (req, res) => {
  let dirPath = path.join(__dirname, "../client/dist/index.html");
  res.sendFile(dirPath);
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
var upload = multer({ storage: storage }).single('file');

//DB Connection//
let URI = process.env.URI;
const mongoose = require("mongoose");
mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected");
});

// app.post("/uploadfile", upload.single("myfile"), (req, res, next) => {
//   const file = req.file;
//   if (!file) {
//     const error = new Error("Please upload a file");
//     error.httpsStatusCode = 400;
//     return next(error);
//   }
//   res.send(file);
// });
// app.post("/uploadphoto", upload.single("picture"), (req, res) => {
//   var img = fs.readFileSync(req.file.path);
//   var encode_image = img.toString("base64");

//   var finalImg = {
//     contentType: req.file.mimetype,
//     image: new Buffer(encode_image, "base64"),
//   };
//   db.collection("quotes").insertOne(finalImg, (err, result) => {
//     console.log(result);

//     if (err) return console.log(err);

//     console.log("saved to database");
//     res.redirect("/");
//   });
// });
//Administrator Routes
app.use("/api/users/clinicX/administrators", routes.administratorRoutes);

//Doctor Routes
app.use("/api/users/clinicX/doctors", routes.doctorRoutes);

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`App Is Listetning On Port: ${PORT}`);
  }
});

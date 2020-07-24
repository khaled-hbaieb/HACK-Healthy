const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const path = require("path");
const upload = require("./multer");
const cloudinary = require("./cloudinary");
const fs = require("fs");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.static("uploads"));
app.use(express.static("client/dist"));

app.use(bodyParser.json());

//DB Connection//
let URI = process.env.URI;
const mongoose = require("mongoose");
const { join } = require("path");
const { json } = require("body-parser");
mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected");
});

//Administrator Routes
app.use("/api/users/clinicX/administrators", routes.administratorRoutes);

//Doctor Routes
app.use("/api/users/clinicX/doctors", routes.doctorRoutes);

//Patient Routes
app.use("/api/users/clinicX/patients", routes.patientRoutes);

//Clinic Routes
app.use("/api/clinics", routes.clinicRoutes);

//Room Routes
app.use("/api/rooms", routes.roomRoutes);

//Multer Routes
app.use("/api/pics", routes.multerRoutes);

app.use("/api/cloud", routes.cloudinaryRoutes);

////////////////////////////////

app.use("/upload-images", upload.array("image"), async (req, res) => {
  // try {
  const uploader = async (path) => await cloudinary.uploads(path, "Images");
  if (req.method === "POST") {
    const urls = [];
    const files = req.files;

    for (const file of files) {
      const { path } = file;

      const newPath = await uploader(path);

      urls.push(newPath);

      fs.unlinkSync(path);
    }
    res.send(urls[0].url);
  } else {
    res.status(405).json({
      err: "Images not uploaded successfully",
    });
  }
  // } catch (error) {
  // }
});

app.get("*", (req, res) => {
  let dirPath = path.join(__dirname, "../client/dist/index.html");
  res.sendFile(dirPath);
});

///////////////////////////////
app.listen(PORT, (err) => {
  if (!err) {
    console.log(`App Is Listetning On Port: ${PORT}`);
  }
});

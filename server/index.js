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
app.use("/api/clinicX/rooms", routes.roomRoutes);

//History Routes
app.use("api/users/clinicX/history", routes.historyRoutes);

//Current Patients Routes
app.use("api/users/clinicX/currentPatients", routes.currentPatientsRoutes);

//Appointments Routes
app.use("/api/appointments", routes.appointmentsRoutes);

/**
 * Load Twilio configuration from .env config file - the following environment
 * variables should be set:
 * process.env.TWILIO_ACCOUNT_SID
 * process.env.TWILIO_API_KEY
 * process.env.TWILIO_API_SECRET
 */

require("dotenv").config();

var http = require("http");
var AccessToken = require("twilio").jwt.AccessToken;
var VideoGrant = AccessToken.VideoGrant;

// Create Express webapp.

/**
 * Generate an Access Token for a chat application user provided via the url
 */
app.get("/token", function(request, response) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  var identity = request.query["identity"];

  if (!identity) {
    response.send({
      body: "An identity is needed",
    });
  }

  // Create an access token which we will sign and return to the client,
  // containing the grant we just created.
  var token = new AccessToken(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_API_KEY,
    process.env.TWILIO_API_SECRET
  );

  // Assign the generated identity to the token.
  token.identity = identity;

  // Grant the access token Twilio Video capabilities.
  var grant = new VideoGrant();
  token.addGrant(grant);
  // Serialize the token to a JWT string and include it in a JSON response.
  response.send({
    identity: identity,
    token: token.toJwt(),
  });
});

// Create http server and run it.
var server = http.createServer(app);
// var port = process.env.PORT || 3000;
// server.listen(port, function() {
//   console.log("Express server running on *:" + port);
// });
app.get("*", (req, res) => {
  let dirPath = path.join(__dirname, "../client/dist/index.html");
  res.sendFile(dirPath);
});

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

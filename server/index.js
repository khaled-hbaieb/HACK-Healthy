const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("client/dist"));

app.use(bodyParser.json());

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

app.get("*", (req, res) => {
  let dirPath = path.join(__dirname, "../client/dist/index.html");
  res.sendFile(dirPath);
});

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`App Is Listetning On Port: ${PORT}`);
  }
});

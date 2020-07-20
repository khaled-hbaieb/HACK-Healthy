const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const path = require("path");

require("dotenv").config();

const app = express();

const PORT = 3000;

app.use(express.static("client/dist"));

app.use(bodyParser.json());

app.get("*", (req, res) => {
  let dirPath = path.join(__dirname, "../client/dist/index.html");
  res.sendFile(dirPath);
});

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

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`App Is Listetning On Port: ${PORT}`);
  }
});

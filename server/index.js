const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const path = require("path");
const upload = require("./multer");
const cloudinary = require("./cloudinary");
const fs = require("fs");
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer')
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("uploads"));
app.use(express.static("client/dist"));

app.use(bodyParser.json());

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

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

app.use("/api/users/clinicX/administrators", routes.administratorRoutes);

app.use("/api/users/clinicX/doctors", routes.doctorRoutes);

app.use("/api/users/clinicX/patients", routes.patientRoutes);

app.use("/api/clinics", routes.clinicRoutes);

app.use("/api/clinicX/rooms", routes.roomRoutes);

app.use("/api/users/clinicX/history", routes.historyRoutes);

app.use("/api/users/clinicX/currentPatients", routes.currentPatientsRoutes);

app.use("/api/appointments", routes.appointmentsRoutes);

app.use("/api/pics", routes.multerRoutes);

app.use("/api/cloud", routes.cloudinaryRoutes);

var http = require("http");
var AccessToken = require("twilio").jwt.AccessToken;
var VideoGrant = AccessToken.VideoGrant;

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

  var token = new AccessToken(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_API_KEY,
    process.env.TWILIO_API_SECRET
  );

  token.identity = identity;

  var grant = new VideoGrant();
  token.addGrant(grant);
  response.send({
    identity: identity,
    token: token.toJwt(),
  });
});

var server = http.createServer(app);

app.use("/upload-images", upload.array("image"), async (req, res) => {
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
});


/**
 * 
 */

app.post('/send', (req, res) => {
  console.log(req.body)
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      
      <li>Email: ${req.body.email}</li>
      <li>CIN: ${req.body.CIN}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    // port: 587,
    // secure: false, // true for 465, false for other ports
    auth: {
        user: 'hackhealthyclinic@gmail.com', // generated ethereal user
        pass: 'hack-healthy1'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Hack Healthy" hackhealthyclinic@gmail.com', // sender address
      to: `${req.body.email}`, // list of receivers
      subject: 'Password reset', // Subject line
      text: 'your demand for resetting your password is under consideration /n we will respond to you as soon as possible', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      
  });
  });

 /**
  * 
  */

app.get("*", (req, res) => {
  let dirPath = path.join(__dirname, "../client/dist/index.html");
  res.sendFile(dirPath);
});



app.listen(PORT, (err) => {
  if (!err) {
    console.log(`App Is Listetning On Port: ${PORT}`);
  }
});

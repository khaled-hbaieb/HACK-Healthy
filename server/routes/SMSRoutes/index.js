const express = require("express");
require("dotenv").config();

const router = express.Router();
router.post("/", async (req, res) => {
  try {
    const client = require("twilio")(
      process.env.ACCOUNT_SID,
      process.env.AUTH_TOKEN
    );

    // let data = await client.messages.create({
    //   body: `This is Hack-Healthy Clinic.
    //   We Have Successfully created an Account For you.
    //   These Are your credentials:
    //   Email: ${req.body.email}
    //   Password: ${req.body.password}x
    //   You Should change your password as soon as you connect!
    //   Thank You! `,
    //   from: "HackHealthy",
    //   to: `+216${req.body.phoneNumber}`,
    // });
    console.log(req.body);
    // res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = router;

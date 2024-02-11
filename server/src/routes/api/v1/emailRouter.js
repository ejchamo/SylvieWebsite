import express from "express";
import nodemailer from "nodemailer";
import config from "../../../config.js";

const emailRouter = new express.Router();

emailRouter.post("/", async (req, res) => {
  try {
    const { body } = req;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: config.email.key,
        pass: config.emailPassword.key,
      },
    });

    const mailOptions = {
      from: config.email.key,
      to: config.email.key,
      subject: `Website Alert, New message from ${body.name} - ${body.email}`,
      text: body.message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ errors: error });
      } else {
        return res.status(200).json({ message: "Email sent" });
      }
    });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
});

export default emailRouter;

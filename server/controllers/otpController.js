import otpGenerator from "otp-generator";
import nodemailer from "nodemailer";
import asyncHandler from "express-async-handler";

const generateOpt = asyncHandler(async (req, res) => {
  const data = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-RemotePlayback.brevo.com",
      port: 587,
      auth: {
        user: "cadentyler95@gmail.com",
        pass: "cadenT95",
      },
    });

    const info = await transporter.sendMail({
      from: `cadentyler95@gmail.com`,
      to: `onyemechrist95@gmail.com`,
      subject: "Hello chris",
      html: `<h1> Hello welocome to BUllharvest. your otp is ${data}   </h1>`,
    });

    if (info) {
      return res.status(200).json({ msg: "Email sent " });
    }
  } catch (error) {
    console.log(error);
  }
});

export default {
  generateOpt,
};

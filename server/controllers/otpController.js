import otpGenerator from "otp-generator";
import nodemailer from "nodemailer";
import asyncHandler from "express-async-handler";

const generateOpt = asyncHandler(async (req, res) => {
  const data = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });

  //   service: "smtp-RemotePlayback.brevo.com",
  const userEmail = "uzebebron@gmail.com";
  const userPassword = "88DEB4DD348B0C5D07A78F8B9AF2ACA7B4FD";

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.forwardemail.net",
      port: 2525,
      secure: false,
      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: userEmail,
        pass: userPassword,
      },
    });

    // async..await is not allowed in global scope, must use a wrapper
    // async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log(`email sent: ${info.response}`);
      }
    });
  } catch (error) {
    console.log(error);
  }
});

export default {
  generateOpt,
};

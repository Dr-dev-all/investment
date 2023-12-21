import otpGenerator from "otp-generator";
import nodemailer from "nodemailer";
import asyncHandler from "express-async-handler";
import { User } from "../models/userModels.js";
import validator from "validator";
import bcrypt from "bcrypt";
// import nodemailer from "nodemailer";
// import { promises } from "nodemailer/lib/xoauth2";

const generateCode = asyncHandler(async (req, res) => {
  // generating otp
  let data = otpGenerator.generate(15, {
    upperCaseAlphabets: true,
    specialChars: false,
    lowerCaseAlphabets: false,
  });

  return res.status(200).json({ code: data });
});
// user verification

const checkOtp = asyncHandler((req, res) => {
  const { otp } = req.body;

  // console.log(otp);
  if (!otp) {
    return res.status(400).json({ message: "required" });
  }

  if (otp !== data) {
    return res.status(400).json({ message: "Invalid" });
  }

  if (otp === data) {
    data = null;
    return res.status(200).json({ message: "success" });
  }
});

const changePassword = asyncHandler(async (req, res) => {
  const userId = req.user;

  const { newPassword, repeatPassword } = req.body;
  if (!userId) {
    return res.status(400).json({ message: "invalid" });
  }

  const foundUser = await User.findById(userId).exec();

  if (!foundUser) {
    return res.status(400).json({ message: "not-found" });
  }

  if (!newPassword || !repeatPassword) {
    return res.status(400).json({ message: "required" });
  }

  if (newPassword !== repeatPassword) {
    return res.status(400).json({ message: "not-match" });
  }

  if (newPassword === repeatPassword) {
    hashedPwd = await bcrypt.hash(newPassword, 10);

    foundUser.password = hashedPwd;

    const updatedUser = await foundUser.save();
    if (updatedUser) {
      res.status(200).json({ message: "success" });
    } else {
      return res.status(400).json({ messsage: "Invalid-user-data" });
    }
  }
});

const updateUserPassword = asyncHandler(async (req, res) => {
  const { email, code, newPassword } = req.body;

  if (!email || !code || !newPassword) {
    return res.status(400).json({ message: "required" });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid-email" });
  }

  const foundUser = await User.findOne({ email }).exec();

  if (!foundUser) {
    return res.status(200).json({ message: "invalid-user" });
  }

  const userKey = await User.findOne({ code: foundUser.code }).exec();

  console.log({ key: userKey, code });

  if (userKey.code !== code) {
    return res.status(400).json({ message: "invalid-code" });
  }

  foundUser.password = newPassword;

  savedUser = await foundUser.save();

  if (savedUser) {
    return res.status(200).json({ message: "success" });
  } else {
    return res.status(400).json({ message: "invalid-user-data" });
  }
});

export default {
  generateCode,
  updateUserPassword,
  checkOtp,
  changePassword,
};

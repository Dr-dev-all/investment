import { User } from "../models/userModels.js";
import asyncHandler from "express-async-handler";
import validator from "validator";

const checkUser = asyncHandler(async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "required" });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "invalid" });
  }

  const foundUser = await User.findOne({ email }).exec();

  if (!foundUser) {
    return res.status(400).json({ message: "not-found" });
  }

  return res.send("good");
  req.user = foundUser._id;

  next();
});

export default checkUser;

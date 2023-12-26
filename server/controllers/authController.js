import { User } from "../models/userModels.js";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import isEmail from "validator/lib/isEmail.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

let varToken = "";

// LOGIN
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (!isEmail(email)) {
    return res.status(400).json({
      field: "email",
      allFields: false,
      errorStatus: true,
      successStatus: false,
      message: "Invalid email address",
    });
  }

  const founduser = await User.findOne({ email }).exec();

  if (!founduser) {
    return res.status(401).json({
      allFields: true,
      field: "email",
      successStatus: false,
      errorStatus: true,
      message: "Wrong username or password",
    });
  }

  const match = await bcrypt.compare(password, founduser.password);
  if (!match) {
    return res.status(401).json({
      allFields: true,
      field: "password",
      successStatus: false,
      errorStatus: true,
      message: "Wrong username or password",
    });
  }
  //Generate token
  const accessToken = jwt.sign(
    {
      _id: founduser._id,
      Balance: founduser.balance,
      Firstname: founduser.firstName,
      Admin: founduser.isAdmin,
      Investment: founduser.investment,
      Loss: founduser.loss,
      Profit: founduser.profit,

      Active: founduser.isActive,
    },
    process.env.ACCESS_TOKEN_SEC,
    {
      expiresIn: "1d",
    }
  );

  varToken = accessToken;
  // create refreshtoken

  const refreshToken = jwt.sign(
    {
      _id: founduser._id,
      Balance: founduser.balance,
      Firstname: founduser.firstName,
      Admin: founduser.isAdmin,
      Active: founduser.isActive,
      isLoggedIn: true,
    },
    process.env.REFRESH_TOKEN_SEC,
    { expiresIn: "7d" }
  );

  varToken = refreshToken;
  res.cookie("jwt", refreshToken, {
    sameSite: "None",
    secure: true,
    httpOnly: true,
    maxAge: 1 * 24 * 60 * 60 * 1000,
  });

  res.status(200).json({
    successStatus: true,
    allFields: true,
    errorStatus: false,
    accessToken,
  });
});

const refresh = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.jwt) {
    return res.status(401).json({ message: "Unauthorize" });
  }

  refreshToken = cookie.jwt;

  jwt.verify("jwt", refreshToken, async (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden" });
    }
    const foundUser = await User.findById(decoded._id).exec();
    if (!foundUser) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const accessToken = jwt.sign(
      { _id: foundUser._id },
      process.env.ACCESS_TOKEN_SEC,
      { expiresIn: "1d" }
    );

    varToken = accessToken;
    res.json({ accessToken });
  });
});

const logout = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  varToken = "";
  if (!cookie) {
    return sendStatus(204); //empty content
  }

  res.clearCookie("jwt", { sameSite: "None", secure: true, httpOnly: true });
  res.json({ message: "cookie cleard" });
});

const getUserToken = asyncHandler((req, res) => {
  if (!varToken) {
    return res.status(400).json("no-token-found");
  }

  if (varToken) {
    return res.status(200).json({ token: varToken });
  }
});

export default {
  login,
  refresh,
  logout,
  getUserToken,
};

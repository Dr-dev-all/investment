import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./config/dbConnection.js";
import cors from "cors";
import { corsOptions } from "./config/corsOptions.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import otpRoutes from "./routes/otpRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";
import { User } from "./models/userModels.js";
import { redirect } from "react-router-dom";

const app = express();

dotenv.config();
dbConnection();
const port = process.env.PORT || 4000;

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// just for otp testing

app.use("/auths", authRoutes);
app.use("/users", userRoutes);
app.use("/otp", otpRoutes);

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("json")) {
    return res.json({ error: "Resource Not found" });
  } else {
    res.type("txt").send("Resource Not found");
  }
});

app.use(errorHandler);

mongoose.connection.on("open", () => {
  console.log("Connected to database");
  app.listen(port, console.log(`Server listening on port ${port}...`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

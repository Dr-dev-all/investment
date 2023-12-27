import mongoose from "mongoose";
import dotenv from "dotenv";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    throw new Error(error);
  }
};

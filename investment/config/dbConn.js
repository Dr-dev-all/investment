import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const dbConn = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to the database');
  } catch (error) {
    console.log(error);
  }
};

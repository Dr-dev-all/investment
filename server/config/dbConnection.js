import mongoose from 'mongoose';
import dotenv from 'dotenv';

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to the database');
  } catch (error) {
    console.log(error);
  }
};

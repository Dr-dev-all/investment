import express from 'express';
import dotenv from 'dotenv';
import { dbConnection } from './config/dbConnection.js';
import mongoose from 'mongoose';

const app = express();
dotenv.config();

const port = process.env.PORT || 4000;

const start = async () => {
  try {
    await dbConnection();
    app.listen(port, console.log(`Server listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();

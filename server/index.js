import express from 'express';
import dotenv from 'dotenv';
import { dbConnection } from './config/dbConnection.js';
import cors from 'cors';
import { corsOptions } from './config/corsOptions.js';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

dotenv.config();
dbConnection();
const port = process.env.PORT || 4000;

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRoutes);
app.use('/users', userRoutes);

app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('json')) {
    return res.json({ error: 'Resource Not found' });
  } else {
    res.type('txt').send('Resource Not found');
  }
});

app.use(errorHandler);

mongoose.connection.on('open', () => {
  console.log('Connected to database');
  app.listen(port, console.log(`Server listening on port ${port}...`));
});

mongoose.connection.on('error', (err) => {
  console.log(err);
});

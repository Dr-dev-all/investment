import { NextResponse, NextRequest } from 'next/server';
import isEmail from 'validator/lib/isEmail';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { User } from '@/dbconfig/userModels.js';
import { dbConnection } from '@/dbconfig/dbConnection.js';

// LOGOUT

dbConnection();

export function POST (req)  {
//   const cookie = req.cookies;
//   varToken = '';

const token = cookies().has('jwt')

  if (!token) {
    return sendStatus(204); //empty content
  }


  cookies().delete("jwt")


  return NextResponse.json({ message: 'cookie cleard' });

//   res.clearCookie('jwt', { sameSite: 'None', secure: true, httpOnly: true });
}

// const getUserToken = asyncHandler((req, res) => {
//   if (!varToken) {
//     return res.status(400).json('no-token-found');
//   }

//   if (varToken) {
//     return res.status(200).json({ token: varToken });
//   }
// });

import { NextResponse, NextRequest } from 'next/server';
import isEmail from 'validator/lib/isEmail';
// import { User } from '@/dbconfig/userModels';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// import '@types/jsonwebtoken';
// import { StringExpressionOperatorReturningArray } from 'mongoose';
import { cookies } from 'next/headers';
import { User } from '@/dbconfig/userModels.js';
import { dbConnection } from '@/dbconfig/dbConnection.js';
// import { cookies } from 'next/headers';
// import dotenv from 'dotenv';

dbConnection();

export async function GET(req) {
  try {
    const token = cookies.get('jwt');
    // console.log(RequestCookies);
    if (!token?.value) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    refreshToken = token.value;

    jwt.verify('jwt', refreshToken, async (err, decoded) => {
      if (err) {
        return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
      }
      const foundUser = await User.findById(decoded._id).exec();
      if (!foundUser) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
      }

      const accessToken = jwt.sign(
        { _id: foundUser._id },
        process.env.ACCESS_TOKEN_SEC,
        { expiresIn: '1d' }
      );

      return NextResponse.json({ accessToken });
    });
  } catch (error) {
    throw new Error(error);
  }
}

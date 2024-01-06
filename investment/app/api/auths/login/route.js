import { NextResponse, NextRequest } from 'next/server';
import isEmail from 'validator/lib/isEmail';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { User } from '@/dbconfig/userModels.js';
import { dbConnection } from '@/dbconfig/dbConnection.js';

// LOGIN

dbConnection();

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    if (!isEmail(email)) {
      return NextResponse.json(
        {
          field: 'email',
          allFields: false,
          errorStatus: true,
          successStatus: false,
          message: 'Invalid email address',
        },
        { status: 400 }
      );
    }

    const founduser = await User.findOne({ email }).exec();

    if (!founduser) {
      return NextResponse.json(
        {
          allFields: true,
          field: 'email',
          successStatus: false,
          errorStatus: true,
          message: 'Wrong username or password',
        },
        { status: 401 }
      );
    }

    const match = await bcrypt.compare(password, founduser.password);
    if (!match) {
      return NextResponse.json(
        {
          allFields: true,
          field: 'password',
          successStatus: false,
          errorStatus: true,
          message: 'Wrong username or password',
        },
        { status: 401 }
      );
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
        expiresIn: '1d',
      }
    );

    // varToken = accessToken;
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
      { expiresIn: '7d' }
    );

    // varToken = refreshToken;
    cookies().set('jwt', refreshToken, {
      sameSite: 'None',
      secure: true,
      httpOnly: true,
      maxAge: 1 * 24 * 60 * 60 * 1000,
    });

    return NextResponse.json(
      {
        successStatus: true,
        allFields: true,
        errorStatus: false,
        accessToken,
      },
      { status: 200 }
    );
  } catch (error) {
    throw new Error(error);
  }
}

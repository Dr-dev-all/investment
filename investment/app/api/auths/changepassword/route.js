import { User } from '@/dbconfig/userModels.js';
import validator from 'validator';
import bcrypt from 'bcrypt';
import { dbConnection } from '@/dbconfig/dbConnection.js';
import { NextRequest, NextResponse } from 'next/server';

dbConnection();

export async function PATCH(req) {
  try {
    const { email, code, newPassword } = await req.json();

    if (!email || !code || !newPassword) {
      return NextResponse.json({ message: 'required' }, { status: 400 });
    }

    if (!validator.isEmail(email)) {
      return NextResponse.json({ message: 'Invalid-email' }, { status: 400 });
    }

    const foundUser = await User.findOne({ email }).exec();

    if (!foundUser) {
      return NextResponse.json({ message: 'invalid-user' }, { status: 400 });
    }

    const userKey = await User.findOne({ code: foundUser.code }).exec();

    // console.log(userKey.code);

    if (userKey.code !== code) {
      return NextResponse.json({ message: 'invalid-code' }, { status: 400 });
    }

    foundUser.password = await bcrypt.hash(newPassword, 10);

    const savedUser = await foundUser.save();

    if (savedUser) {
      return NextResponse.json({ message: 'success' }, { status: 200 });
    } else {
      return NextResponse.json(
        { message: 'invalid-user-data' },
        { status: 400 }
      );
    }
  } catch (error) {
    throw new Error(error);
  }
}

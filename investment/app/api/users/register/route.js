import { User } from '@/dbconfig/userModels.js';
import { dbConnection } from '@/dbconfig/dbConnection.js';
import { NextResponse, NextRequest } from 'next/server';
import isEmail from 'validator/lib/isEmail';
import bcrypt from 'bcrypt';

dbConnection();

export async function POST(req) {
  const { firstName, lastName, email, password, confirmPassword, code } =
    await req.json();
  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    return NextResponse.json(
      {
        allFields: true,
        errorStatus: true,
        successStatus: false,
        message: 'All fields are required',
      },
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
        message: 'Invalid mail address',
      },
      { status: 400 }
    );
  }

  const duplicateEmail = await User.findOne({ email })
    .collation({ locale: 'en', strength: 2 })
    .lean()
    .exec();
  if (duplicateEmail) {
    return NextResponse.json(
      {
        field: 'email',
        errorStatus: true,
        successStatus: false,
        message: 'Email already exist',
      },
      { status: 409 }
    );
  }

  if (password?.length < 6) {
    return NextResponse.json(
      {
        errorStatus: true,
        allFields: false,
        successStatus: false,
        field: 'password',
        message: 'Password must be greater than 6 characters',
      },
      { status: 400 }
    );
  }

  if (password.toString().trim() !== confirmPassword.toString().trim()) {
    return NextResponse.json(
      {
        errorStatus: true,
        field: 'confirmPassword',
        allFields: false,
        successStatus: false,
        message: 'Password does not match',
      },
      { status: 400 }
    );
  }

  const hashedPwd = await bcrypt.hash(password, 10);

  // EMAIL VERIFICATION

  // END OF MAIL VERIFICATION

  const newUser = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPwd,
    code,
  });

  if (!newUser) {
    return NextResponse.json(
      {
        errorStatus: true,
        successStatus: false,
        allFields: true,
        message: 'wrong user data recieved',
      },
      { status: 400 }
    );
  } else {
    return NextResponse.json(
      {
        errorStatus: false,
        successStatus: true,
        allFields: true,
        message: `Hi ${newUser.firstName}, welcome to BullHarvest`,
      },
      { status: 201 }
    );
  }
}

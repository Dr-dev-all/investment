import { User } from '@/dbconfig/userModels.js';
import { dbConnection } from '@/dbconfig/dbConnection.js';
import { NextResponse, NextRequest } from 'next/server';
import isEmail from 'validator/lib/isEmail';
import bcrypt from 'bcrypt';

dbConnection();

export async function PATCH(req) {
  const {
    id,
    firstName,
    lastName,
    email,
    plan,
    balance,
    profit,
    investment,
    loss,
  } = req.body;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !plan ||
    !balance ||
    !investment ||
    !loss ||
    !profit
  ) {
    return NextResponse.json(
      { message: 'All fields are required' },
      { status: 400 }
    );
  }

  const user = await User.findById(id).exec();
  if (!user)
    return NextResponse.json({ message: 'User not found' }, { status: 400 });

  if (!isEmail(email)) {
    return NextResponse.json(
      { message: 'Invalid mail address' },
      { status: 400 }
    );
  }
  if (!user.isAdmin) {
    const duplicateEmail = await User.findOne({ email })
      .collation({ locale: 'en', strength: 2 })
      .lean()
      .exec();

    if (duplicateEmail && duplicateEmail._id.toString() !== id) {
      return NextResponse.json(
        { message: 'Email already exist' },
        { status: 409 }
      );
    }

    if (user && user.isAdmin === false) {
      if (firstName) {
        user.firstName = firstName;
      }
      if (lastName) {
        user.lastName = lastName;
      }

      if (email) {
        user.email = email;
      }
      if (plan) {
        user.plan = plan;
      }
      if (balance) {
        user.balance = balance;
      }
      if (investment) {
        user.investment = investment;
      }
      if (profit) {
        user.profit = profit;
      }
      if (loss) {
        user.loss = loss;
      }
    }

    const updateduser = await user.save();
    if (!updateduser) {
      return NextResponse.json(
        { message: 'Error in updating the user' },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { message: 'Successfully Updated' },
      { status: 200 }
    );
  }
}

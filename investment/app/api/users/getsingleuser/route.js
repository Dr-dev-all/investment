import { NextRequest, NextResponse } from 'next/server';
import { User } from '@/dbconfig/userModels.js';
import { dbConnection } from '@/dbconfig/dbConnection';
import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode';

dbConnection();

export async function GET(req) {
  // const userId = req.user;
  const token = cookies().get('jwt');

  const { _id: userId } = jwtDecode(token.value);

  // return NextResponse.json({ data: userId });

  try {
    if (!userId) {
      return NextResponse.json(
        { message: 'User id is required' },
        { status: 400 }
      );
    }

    const foundUser = await User.findById(userId).exec();
    if (!foundUser) {
      return NextResponse.json({ message: 'Invalid user' }, { status: 400 });
    }

    const userData = {
      email: foundUser.email,
      firstName: foundUser.firstName,
      lastName: foundUser.lastName,
      balance: foundUser.balance,
      active: foundUser.isActive,
      investment: foundUser.investment,
      profit: foundUser.profit,
      loss: foundUser.loss,
      plan: foundUser.plan,
    };

    // res.setHeader("Access-Control-Allow-Credentials", true);
    return NextResponse.json(userData, { status: 200 });
  } catch (error) {
    throw new Error(error);
  }
}

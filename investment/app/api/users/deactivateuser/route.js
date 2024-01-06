import { NextRequest, NextResponse } from 'next/server';
import { User } from '@/dbconfig/userModels.js';
import { dbConnection } from '@/dbconfig/dbConnection';
import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode';
import { JsonWebTokenError } from 'jsonwebtoken';

dbConnection();

export async function PATCH(req) {
  const token = cookies().get('jwt');

  const { _id: id } = jwtDecode(token?.value);

  // return NextResponse.json({ user: id });
  if (!id) {
    return NextResponse.json(
      { message: 'userid must be provided' },
      { status: 400 }
    );
  }

  const foundUser = await User.findById(id).exec();
  if (!foundUser) {
    return NextResponse.json({ message: 'User not found!' }, { status: 404 });
  }

  if (foundUser.isActive === true && foundUser.isAdmin === false) {
    foundUser.isActive = false;
    const updatedUser = await foundUser.save();
    if (!updatedUser) {
      return NextResponse.json(
        { message: 'Error in deactivating the user!' },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { message: `${foundUser.firstName} deactivated successfully` },
        { status: 200 }
      );
    }
  }

  return NextResponse.json({ message: 'User is inactive' }, { status: 400 });
}

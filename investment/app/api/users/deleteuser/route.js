import { NextRequest, NextResponse } from 'next/server';
import { User } from '@/dbconfig/userModels.js';
import { dbConnection } from '@/dbconfig/dbConnection';
import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode';
import { JsonWebTokenError } from 'jsonwebtoken';

dbConnection();

export async function DELETE(req) {
  // const { id } = req.params;

  const token = cookies().get('jwt');
  console.log(token);
  const { _id: id } = jwtDecode(token.value);
  if (!id) {
    return NextResponse.json(
      { message: 'User id is required' },
      { status: 400 }
    );
  }

  const foundUser = await User.findById(id).exec();

  if (!foundUser) {
    return NextResponse.json(
      { message: 'User does not exist' },
      { status: 404 }
    );
  }

  const deletedUser = await User.deleteOne({ email: foundUser.email }).exec();
  if (!deletedUser) {
    return NextResponse.json(
      { message: "User doesn't exists" },
      { status: 404 }
    );
  }
  return NextResponse.json({ message: 'Deletion Successful' }, { status: 200 });
}

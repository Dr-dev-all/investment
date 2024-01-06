import { NextRequest, NextResponse } from 'next/server';
import { dbConnection } from '@/dbconfig/dbConnection.js';
import { User } from '@/dbconfig/userModels.js';
// import dotenv from 'dotenv';

// dotenv.config();
dbConnection();

export async function GET(req: NextRequest) {
  const users = await User.find({ email: { $ne: 'Otb9007@gmail.com' } })
    .select('-password')
    .lean();
  if (!users?.length) {
    return NextResponse.json({ message: 'No user found' }, { status: 400 });
  }
  return NextResponse.json({ users }, { status: 200 });
}

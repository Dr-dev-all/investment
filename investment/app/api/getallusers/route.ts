import mongoose from 'mongoose';
import { dbConn } from '@/config/dbConn';
import { User } from '@/models/userModel';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const allUsers = await User.find({}).exec();
    if (!allUsers) {
      return NextResponse.json({ message: 'No user found' }, { status: 404 });
    }
    return NextResponse.json({ message: allUsers }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}

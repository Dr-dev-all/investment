import { NextResponse, NextRequest } from 'next/server';
import { dbConn } from '@/config/dbConn';
import bcrypt from 'bcrypt';
import { User } from '@/models/userModel';
import isEmail from 'validator/lib/isEmail';

export async function POST(req: NextRequest) {
  await dbConn();
  try {
    const { firstName, lastName, email, password } = await req.json();
    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    if (!isEmail(email)) {
      return NextResponse.json(
        { message: 'Invalid mail address' },
        { status: 400 }
      );
    }
    const duplicateEmail = await User.findOne({ email }).collation({
      locale: 'en',
      strength: 2,
    });

    if (duplicateEmail) {
      return NextResponse.json(
        { message: 'Duplicate mail address' },
        { status: 400 }
      );
    }

    const hashedPwd = await bcrypt.hash(password, 10);

    const user = new User({ firstName, lastName, email, password: hashedPwd });
    const newUser = await user.save();
    if (!newUser) {
      return NextResponse.json(
        { message: 'User registeration faild' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      message: `${newUser.firstName} registered successfully`,
    });
  } catch (error) {
    console.log(error);
  }
}

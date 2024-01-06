import otpGenerator from 'otp-generator';
import { NextResponse, NextRequest } from 'next/server';

export function GET(req) {
  // generating otp
  let data = otpGenerator.generate(15, {
    upperCaseAlphabets: true,
    specialChars: false,
    lowerCaseAlphabets: false,
  });

  return NextResponse.json({ code: data }, { status: 200 });
}

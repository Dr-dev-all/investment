import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import dotenv from 'dotenv';
import { STATUS_CODES } from 'http';

dotenv.config();

export async function GET(NextRequest) {
  try {
    const response = await fetch(
      'https://min-api.cryptocompare.com/data/v2/news/?lang=EN',

      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'API-Key': process.env.SECRET_API_KEY,
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json({ message: 'empty' }, { status: 400 });
    }
    const { Data } = await response.json();

    // const mainData = Object.values(Data);

    return NextResponse.json(Data, {
      status: 200,
    });
  } catch (error) {
    console.log(error);
  }
}

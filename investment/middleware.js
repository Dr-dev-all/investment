import { NextResponse, NextRequest } from 'next/server';
import { jwtDecode } from 'jwt-decode';
import jwt from 'jsonwebtoken';
// import { cookies } from 'next/headers';
// import { isJwtExpired } from "jwt-check-expiration";

// CONDITIONAL VERSION BASED ON INCOMING REQUEST

// export function middleware(req) {
// if (
//   req.nextUrl.pathname.includes('/login/userdash') ||
//   req.nextUrl.pathname.includes('/login/admindash')
// ) {
//   const authHeader = req.headers?.authorization || req.headers?.Authorization;
//   if (!authHeader?.startsWith('Bearer ')) {
//     return NextResponse.rewrite(new Url('/login'), req.url);
//   }

//   const token = authHeader.split(' ')[1];
//   if (!token) {
//     return NextResponse.rewrite(new Url('/login/'), req.url);
//   }

//   jwt.verify(token, process.env.ACCESS_TOKEN_SEC, (err, decoded) => {
//     if (err) {
//       return NextResponse.rewrite(new Url('/login'), req.url);
//     }
//   });

//     return NextResponse.next();
//   }
// }

// const token = cookies().get('jwt');
// if (!token?.value) {
//   console.log('no token');
// } else {th
//   const userData = jwtDecode(token?.value);
//   console.log(userData);
// }

// if (req.nextUrl.pathname.includes("/login/userdash"))

// N

export async function middleware(req) {
  const protectedRotes = ['/login/userdash', '/login/adminDash/'];
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auths/getusertoken`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    );

    // console.log(authorization);
    const { token } = await response.json();

    if (
      req.nextUrl.pathname.includes('/login/userdash') &&
      token === 'no-token-found'
    ) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    if (
      req.nextUrl.pathname.includes('/login/adminDash') &&
      token === 'no-token-found'
    ) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = { matcher: ['/login/userdash', '/login/adminDash'] };

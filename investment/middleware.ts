import { NextResponse, NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";
// import { isJwtExpired } from "jwt-check-expiration";

export async function middleware(req: NextRequest) {
  const protectedRotes = ["/login/userdash", "/login/adminDash/"];
  try {
    const response = await fetch("http://127.0.0.1:5000/auths/getusertoken", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    // console.log(authorization);
    const { token } = await response.json();

    if (
      typeof token === "undefined" &&
      req.nextUrl.pathname.includes("/login/userdash")
    ) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    if (
      typeof token === "undefined" &&
      req.nextUrl.pathname.includes("/login/adminDash")
    ) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
  } catch (error: any) {
    throw new Error(error);
  }
}

export const config = { matcher: ["/login/userdash", "/login/adminDash"] };

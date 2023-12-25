import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const accessToken = req.headers.get("authorization")?.split(" ")[1];

  console.log(accessToken);
}

export const config = {
  matcher: ["/login/userdash", "/login/adminDash"],
};

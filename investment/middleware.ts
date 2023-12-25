import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(req: NextRequest) {
  // const accessToken = req.headers.get("authorization")?.split(" ")[1];

  // const cookieStore = cookies();
  // const data = cookieStore.get("accessToken");

  // console.log(data);

  const token = req.cookies.get("jwt")?.value || "";

  console.log(token);

  // return NextResponse.redirect(new URL("/login", req.url));
}

// export const config = {
//   matcher: ["/login/userdash", "/login/adminDash", "/register"],
// };

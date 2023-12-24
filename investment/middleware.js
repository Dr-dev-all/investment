import { NextResponse } from "next/server";

async function middleware(req) {
  //   console.log("first");

  try {
    const response = await fetch("http://127.0.0.1:5000/auths/getusertoken", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    // const { token } = await response.json();
    if (!token && req.url.includes("/login/userdash")) {
      NextResponse.redirect("http://127.0.0..1:3000/login");
    }
  } catch (error) {
    // NextResponse.redirect("http://127.0.0..1:3000/login");
  }
}

export default middleware;

import { NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

async function middleware(req) {
  let verify = "auth";
  let url = req.url;

  try {
    // const response = fetch("http://127.0.0.1:5000/users/getallusers", {
    //   method: "GET",
    //   headers: { "Content-Type": "application/json" },
    // });
    // if (!response.ok) {
    //   NextResponse.json({ message: "error" }, { status: 400 });
    // }
    // // const { users } = await response;
    // console.log(response);
    // users.map((user) => {
    //   if (
    //     user.isActive === false &&
    //     user.isAdmn === false &&
    //     url.includes("/login/userdash")
    //   ) {
    //     NextResponse.redirect("/login");
    //   }
    // });
    // console.log(serverData);
  } catch (error) {
    console.log(error);
  }

  // const token = JSON.parse(JSON.stringify(localStorage.getItem("accessToken")));

  // const userData = jwtDecode(token);

  // console.log(userData);

  //   if (!verify && url.includes("/adminDash")) {
  //     return NextResponse.redirect();
  //   }

  //   if (verify && url === "http://127.0.0.1/") {
  //     return NextResponse.redirect("127.0.0.1:3000/dashboardbn  ");
  //   }
}

export default middleware;

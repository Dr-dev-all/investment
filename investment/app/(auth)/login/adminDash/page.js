"use client";
import AdminDashBoard from "@/components/AdminDashBoard";
import AdminFooter from "@/components/AdminFooter";
import AdminHeader from "@/components/AdminHeader";
import { useLayoutEffect, useRef, useEffect } from "react";
import { AuthProvider } from "@/app/Authprovider";
import { redirect, useRouter, usePathname } from "next/navigation";
import { useContext } from "react";
import dynamic from "next/dynamic";

export default function page() {
  let compoMount = useRef(false);
  const router = useRouter();
  const { auth } = useContext(AuthProvider);
  const pathname = usePathname();
  let logicMount = useRef(false);

  // effectlayout logic
  useLayoutEffect(() => {
    // if (logicMount.current === true) {
    const protectadmin = () => {
      if (pathname) {
        if (!auth.userInfo?.Admin) {
          if (auth?.userInfo?.Active === true) {
            redirect + "/login";
          } else {
            redirect("/register");
          }
        }
      }
    };

    protectadmin();
    // }

    // return () => {
    //   // logicMount.current = true;
    // };
  }, []);

  // if (compoMount.current === true) {
  const content = (
    <>
      <AdminHeader />
      <AdminDashBoard />
      <AdminFooter />
    </>
  );

  return content;
  // }
  // compoMount.current = true;
}

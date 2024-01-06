"use client";
import AdminHeader from "@/components/AdminHeader";
import AdminFooter from "@/components/AdminFooter";
import Userspage from "@/components/Userspage";

export default function page() {
  const content = (
    <>
      <AdminHeader />
      <Userspage />
      <AdminFooter />
    </>
  );

  return content;
}

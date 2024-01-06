"use client";
import AdminDashBoard from "@/components/AdminDashBoard";
import AdminFooter from "@/components/AdminFooter";
import AdminHeader from "@/components/AdminHeader";

export default function page() {
  const content = (
    <>
      <AdminHeader />
      <AdminDashBoard />
      <AdminFooter />
    </>
  );

  return content;
}

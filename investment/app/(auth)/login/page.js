"use client";
import Login from "@/components/Login";
import { Header, Footer } from "@/components";

export default function page() {
  const content = (
    <>
      <Header />
      <Login />
      <Footer />
    </>
  );

  return content;
}

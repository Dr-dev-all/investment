"use client";
import Login from "@/components/Login";
import { Header, Footer } from "@/components";

export default function page() {
  const content = (
    <main className="main-style">
      <Header />
      <Login />
      <Footer />
    </main>
  );

  return content;
}

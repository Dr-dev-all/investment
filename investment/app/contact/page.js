import Image from "next/image";
import { Contact, Footer, Header } from "@/components";

export default function contact() {
  return (
    <>
      <Header />
      <main className="main-style">
        <Contact />
      </main>
      <Footer />
    </>
  );
}

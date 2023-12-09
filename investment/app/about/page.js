import Image from "next/image";
import { About, Footer, Header } from "@/components";

export default function about() {
  return (
    <>
      <Header />
      <main className="main-style">
        <About />
      </main>
      <Footer />
    </>
  );
}

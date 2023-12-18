import Otp from "@/components/Otp";
import { Header, Footer } from "@/components";

export default function otp() {
  const content = (
    <>
      <Header />
      <main>
        <Otp />
      </main>
      <Footer />
    </>
  );

  return content;
}

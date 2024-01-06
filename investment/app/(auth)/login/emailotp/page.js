import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmailOtp from "@/components/EmailOtp";

export default function page() {
  const content = (
    <>
      {" "}
      <Header />
      <main>
        <EmailOtp />
      </main>
      <Footer />
    </>
  );

  return content;
}

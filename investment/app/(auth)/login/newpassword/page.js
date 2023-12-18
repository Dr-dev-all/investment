import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewPassword from "@/components/NewPassword";

export default function page() {
  const content = (
    <>
      <Header />
      <main>
        <NewPassword />
      </main>
      <Footer />
    </>
  );

  return content;
}

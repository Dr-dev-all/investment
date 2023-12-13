import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Security from "@/components/Security";

export default function page() {
  const content = (
    <main className="w-screen">
      <Header />
      <Security />
      <Footer />
    </main>
  );

  return content;
}

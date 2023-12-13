import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Prices from "@/components/Prices";

export default function page() {
  const content = (
    <main>
      <Header />
      <Prices />
      <Footer />
    </main>
  );

  return content;
}

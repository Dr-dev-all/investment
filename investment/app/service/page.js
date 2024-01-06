import Service from "@/components/Service";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function service() {
  const content = (
    <main>
      <Header />
      <Service />
      <Footer />
    </main>
  );

  return content;
}

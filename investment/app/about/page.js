import Image from 'next/image';
import { Footer, Header } from '@/components';
import About from '@/components/About';

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

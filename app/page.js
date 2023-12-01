import Image from 'next/image';
import { Landing, Footer, Header } from '@/components';

export default function Home() {
  return (
    <>
      <Header />
      <main className='main-style'>
        <Landing />
      </main>
      <Footer />
    </>
  );
}

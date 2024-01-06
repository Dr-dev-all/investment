import Register from '@/components/Register';
import { Header, Footer } from '@/components';

export default function page() {
  const content = (
    <main className='main-style'>
      <Header />
      <Register />
      <Footer />
    </main>
  );

  return content;
}

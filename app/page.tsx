import Image from 'next/image';
import { Landing, Footer, Header } from '@/components';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Landing />
    </main>
  );
}

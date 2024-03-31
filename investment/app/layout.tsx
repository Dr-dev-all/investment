import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BullHarvester',
  description: 'BullHarvester crypto trading company',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* <script
          src='//code.tidio.co/xxvrrbkixsntu19bwaziiindkev3dgqw.js'
          async></script> */}

        {children}
      </body>
    </html>
  );
}

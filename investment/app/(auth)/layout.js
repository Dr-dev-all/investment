import { Metadata } from "next";
import Authproviders from "@/app/Authprovider";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Login",
  description: "Bullharvest login page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Authproviders>
          <main>{children}</main>
        </Authproviders>
      </body>
    </html>
  );
}

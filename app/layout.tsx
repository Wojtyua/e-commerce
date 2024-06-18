import type { Metadata } from "next";

import { Urbanist } from "next/font/google";

import "./globals.css";
import ReactQueryProvider from "@/providers/reactQueryProvider";
import Navbar from "./(store)/_components/navbar/Navbar";
import Footer from "./(store)/_components/Footer";

// POEKSPERYMENTUJ PÓŹNIEJ ZE ZMIANĄ NA INNY FONT
const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SneakPeak | Sneakers Store",
  description: "Store with the best sneakers in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased relative overflow-y-scroll`}
      >
        <Navbar />
        <main className="text-primary">
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}

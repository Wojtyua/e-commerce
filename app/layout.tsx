import type { Metadata } from "next";

import { Urbanist } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import "./globals.css";
import ReactQueryProvider from "@/providers/reactQueryProvider";

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
      <body className={`${font.className} flex flex-col min-h-screen`}>
        <Navbar />
        <ReactQueryProvider>
          <main className="flex-grow">{children}</main>
        </ReactQueryProvider>
        <Footer />
      </body>
    </html>
  );
}

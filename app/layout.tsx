import type { Metadata } from "next";

import { Urbanist } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import "./globals.css";
import ReactQueryProvider from "@/providers/reactQueryProvider";

// POEKSPERYMENTUJ PÓŹNIEJ ZE ZMIANĄ NA INNY FONT
const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Best Sneakers Shop",
  description: "Store with the best sneakers in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <ReactQueryProvider>
          <main>{children}</main>
        </ReactQueryProvider>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";

import { Urbanist } from "next/font/google";

import "./globals.css";
import Navbar from "./(store)/_components/navbar/Navbar";
import Footer from "./(store)/_components/Footer";
import QueryProvider from "@/lib/QueryProvider";

// POEKSPERYMENTUJ PÓŹNIEJ ZE ZMIANĄ NA INNY FONT
const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SneakPeak | Sneakers Store",
  description: "Store with the best sneakers in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased overflow-y-scroll flex flex-col min-h-screen`}
      >
        <QueryProvider>
          <Navbar />
          <main className="text-primary flex-1">{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}

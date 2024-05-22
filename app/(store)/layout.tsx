import type { Metadata } from "next";

import { Urbanist } from "next/font/google";

import Footer from "@/app/(store)/_components/Footer";
import Navbar from "@/app/(store)/_components/navbar/Navbar";

import "../globals.css";
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
      <body
        className={`${font.className} antialiased relative flex flex-col min-h-screen overflow-y-scroll`}
      >
        <Navbar />
        <ReactQueryProvider>
          <main className="flex-grow">{children}</main>
        </ReactQueryProvider>
        <Footer />
      </body>
    </html>
  );
}

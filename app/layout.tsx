import type { Metadata } from "next";

import { Urbanist } from "next/font/google";

import "./globals.css";
import Navbar from "./(store)/_components/navbar/Navbar";
import Footer from "./(store)/_components/Footer";
import QueryProvider from "@/components/QueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "@/components/ui/sonner";

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
    <QueryProvider>
      <html lang="en">
        <body
          className={`${font.className} antialiased overflow-y-scroll flex flex-col min-h-screen`}
        >
          <Navbar />
          <main className="text-primary flex-1">{children}</main>
          <Footer />
          {/* developer tools */}
          <ReactQueryDevtools initialIsOpen={false} />
          <Toaster />
        </body>
      </html>
    </QueryProvider>
  );
}

import { Urbanist } from "next/font/google";
import type { Metadata } from "next";

import Footer from "@/components/footer";

import "./globals.css";
import Navbar from "@/components/navbar";
import Container from "@/components/ui/container";
import Provider from "@/util/providers";

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
        {/* This provider provides the React Query client to the entire application. */}
        <Provider>
          <Navbar />
          {children}

          <Footer />
        </Provider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";

import { Urbanist } from "next/font/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Provider from "@/util/providers";

import "./globals.css";
import Container from "@/components/ui/container";

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
          <Container>
            <Navbar />
            <main>{children}</main>
          </Container>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

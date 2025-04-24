import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import Header from "@/components/ui/header";
import Footer from "@/components/footer";

const manropeSans = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Audiophile",
  description: "Audiophile - Ecommerce Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manropeSans.className} antialiased`}>
        <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
          <div className="bg-[#141414] px-6 text-white">
            <div className="mx-auto max-w-6xl py-8">
              <Header />
            </div>
          </div>

          <main>{children}</main>

          <div className="mt-40 bg-[#141414] px-6 text-white">
            <div className="mx-auto max-w-6xl pt-16 pb-12">
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

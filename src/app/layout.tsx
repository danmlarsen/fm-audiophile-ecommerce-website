import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { CartProvider } from "@/components/cart/cart-context";
import { Toaster } from "@/components/ui/sonner";

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
        <CartProvider>
          <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
            <div className="sticky top-0 left-0 z-50 flex h-[90px] flex-col justify-center bg-[#181818] px-6 text-white md:px-10">
              <div className="mx-auto flex w-full max-w-6xl flex-col justify-center">
                <Header />
              </div>
            </div>

            <main>{children}</main>

            <div className="mt-32 bg-[#141414] px-6 text-white md:px-10 lg:mt-40">
              <div className="relative mx-auto max-w-6xl pt-16 pb-12">
                <div className="bg-primary absolute top-0 left-1/2 h-1 w-[101px] -translate-x-1/2 md:left-0 md:translate-x-0" />
                <Footer />
              </div>
            </div>
          </div>
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}

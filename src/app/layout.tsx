import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manropeSans = Manrope({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Audiophile',
  description: 'Audiophile - Ecommerce Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manropeSans.className} antialiased`}>{children}</body>
    </html>
  );
}

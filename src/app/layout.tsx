import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Price Tracker",
  keywords: "price tracker, price tracking, price alert, price alerting, price tracking app, price tracker app, price alert app, price alerting app, price tracker for iphone, price tracker for android, price tracker for windows, price tracker for mac, price tracker for linux, price tracker for ipad, price tracker for android tablet, price tracker for windows tablet, price tracker for mac tablet, price tracker for linux tablet, price tracker for iphone 12, price tracker for iphone 13, price tracker for iphone 14, price tracker for iphone 15, price tracker for iphone 16, price tracker for iphone 17, price tracker for iphone 18, price tracker for iphone 19, price tracker for iphone 20, price tracker for iphone 21, price tracker for iphone 22, price tracker for iphone 23, price tracker for iphone 24,",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

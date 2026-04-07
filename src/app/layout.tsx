import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IguanaMan | Professional Wildlife Removal Florida",
  description: "Professional wildlife removal in Palm Beach County, Florida. Raccoons, iguanas, pythons, tegus & more.",
  keywords: ["wildlife removal Palm Beach", "raccoon removal", "iguana removal", "snake removal", "Palm Beach County wildlife", "professional wildlife control"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IguanaMan | Professional Wildlife Removal Florida",
  description: "Professional wildlife removal in Florida. Raccoons, iguanas, opossums, pythons, tegus & more. The Keys, Palm Beach, South Florida & North Florida.",
  keywords: ["wildlife removal Florida", "raccoon removal", "iguana removal", "snake removal", "opossum trapping", "Florida Keys", "Palm Beach wildlife", "professional wildlife control"],
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

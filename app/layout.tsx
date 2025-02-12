import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../src/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social Analytics & Insurance Platform",
  description: "Analytics and Insurance platform for content creators and influencers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>{children}</body>
    </html>
  );
}

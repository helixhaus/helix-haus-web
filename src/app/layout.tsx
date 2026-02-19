import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Helix Haus | High-End Web Design & Brand Strategy Toronto",
  description: "A boutique creative studio helping brands scale through high-end digital design and strategic growth.",
  keywords: ["web design Toronto", "luxury branding", "startup agency", "minimalist website"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${geist.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

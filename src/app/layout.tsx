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
  metadataBase: new URL("https://helixhaus.com"),
  title: "Helix Haus | High-End Web Design & Brand Identity",
  description:
    "Elite digital experiences and minimalist brand identity for forward-thinking brands.",
  keywords: ["web design Toronto", "luxury branding", "startup agency", "minimalist website"],
  verification: {
    google: "PASTE_YOUR_CODE_HERE",
  },
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

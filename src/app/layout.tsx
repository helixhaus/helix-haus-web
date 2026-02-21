import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
      <body className="font-sans antialiased overflow-x-hidden relative">
        <header className="absolute top-0 left-0 right-0 z-50 flex flex-col items-center py-8 px-6 bg-[#141614] border-b border-[#2D362E]/40">
          <Link href="/" className="block">
            <Image
              src="/1.svg"
              alt="Helix Haus"
              width={720}
              height={180}
              className="h-[180px] w-auto object-contain"
            />
          </Link>
          <nav className="flex items-center justify-center gap-12 mt-8 uppercase tracking-[0.2em]">
            <Link
              href="/"
              className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#E5E1D8]/60 hover:text-[#E5E1D8] transition-colors duration-300 whitespace-nowrap"
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#E5E1D8]/60 hover:text-[#E5E1D8] transition-colors duration-300 whitespace-nowrap"
            >
              ABOUT
            </Link>
            <Link
              href="/services"
              className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#E5E1D8]/60 hover:text-[#E5E1D8] transition-colors duration-300 whitespace-nowrap"
            >
              SERVICES
            </Link>
            <Link
              href="/portfolio"
              className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#E5E1D8]/60 hover:text-[#E5E1D8] transition-colors duration-300 whitespace-nowrap"
            >
              PORTFOLIO
            </Link>
            <Link
              href="/contact"
              className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#E5E1D8]/60 hover:text-[#E5E1D8] transition-colors duration-300 whitespace-nowrap"
            >
              CONTACT
            </Link>
          </nav>
        </header>
        <div className="pt-[320px]">
          {children}
        </div>
      </body>
    </html>
  );
}

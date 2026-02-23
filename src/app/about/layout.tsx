import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://helixhaus.com/",
  },
  description:
    "Helix Haus is a creative-led strategic marketing agency that scales brands through private intelligence and strategic visibility.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

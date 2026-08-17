import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Welkom in Lijnbaansgracht 204-1 | Amsterdam Guest Portal",
  description:
    "Your premium guest portal for Lijnbaansgracht 204-1 in Amsterdam. Check-in instructions, apartment tour, house rules, and local guide.",
  keywords: [
    "Amsterdam",
    "Airbnb",
    "Lijnbaansgracht",
    "Guest Portal",
    "Canal Apartment",
  ],
  openGraph: {
    title: "Welkom in Lijnbaansgracht 204-1",
    description: "Your home away from home in historic Amsterdam",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white">{children}</body>
    </html>
  );
}

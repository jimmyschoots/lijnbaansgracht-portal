import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lijnbaansgracht 204-1 · Amsterdam",
  description:
    "Alles voor uw verblijf aan de Lijnbaansgracht: check-in, huisgids, wifi en de buurt.",
  keywords: [
    "Amsterdam",
    "Lijnbaansgracht",
    "Guest Portal",
    "Canal Apartment",
  ],
  openGraph: {
    title: "Lijnbaansgracht 204-1 · Amsterdam",
    description: "Uw huis aan de gracht in het hart van Amsterdam",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1620",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${cormorant.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-bone-100 font-sans antialiased">{children}</body>
    </html>
  );
}

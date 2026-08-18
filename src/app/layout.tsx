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
    "Everything for your stay on the Lijnbaansgracht: arrival, house guide, wifi and the neighbourhood.",
  keywords: [
    "Amsterdam",
    "Lijnbaansgracht",
    "Guest Portal",
    "Canal Apartment",
  ],
  openGraph: {
    title: "Lijnbaansgracht 204-1 · Amsterdam",
    description: "Your house on the canal in the heart of Amsterdam",
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
      lang="en"
      className={`${cormorant.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-bone-100 font-sans antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lazisku",
  description: "Lazisku - Layanan Zakat Infaq dan Sedekah",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {  
    title: "Lazisku",
    description: "Lazisku - Layanan Zakat Infaq dan Sedekah",
    url: "https://lazisku.com",
    siteName: "Lazisku",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lazisku",
    description: "Lazisku - Layanan Zakat Infaq dan Sedekah",
    images: ["/og-image.png"],
    creator: "@lazisku",
    site: "@lazisku",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

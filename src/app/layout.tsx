import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head"; // ✅ Import Head dari Next.js
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
  themeColor: "#22c55e", // ✅ Warna hijau cerah (green-500)
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className="scroll-smooth">
      <Head>
        {" "}
        {/* ✅ Gunakan next/head */}
        <meta name="theme-color" content="#22c55e" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

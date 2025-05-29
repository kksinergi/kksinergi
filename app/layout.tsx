import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/app/shared/header";
import Footer from "@/app/shared/footer";
import "./globals.css";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kapita-konsul-sinergi.vercel.app"),
  title: "PT. Kapita Konsul Sinergi | Konsultan Teknik, K3, & Lingkungan Profesional",
  description: "PT. Kapita Konsul Sinergi adalah konsultan terpercaya di bidang teknik, K3, dan lingkungan. Kami menyediakan solusi berkelanjutan untuk peningkatan kinerja dan kepatuhan industri Anda.",
  keywords: ["konsultan TKDN", "konsultan teknik", "konsultan K3", "SMK3", "ISO 45001", "konsultan lingkungan", "PROPER", "dokumen lingkungan", "training K3", "training ISO", "konsultan industri", "kapita konsul sinergi"],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "PT. Kapita Konsul Sinergi",
    description: "Konsultan profesional untuk teknik, K3, dan lingkungan. Dapatkan layanan terbaik dari PT. Kapita Konsul Sinergi.",
    url: "https://kapita-konsul-sinergi.vercel.app",
    siteName: "Kapita Konsul Sinergi",
    images: [
      {
        url: "https://kapita-konsul-sinergi.vercel.app/og-img.jpg",
        width: 1200,
        height: 630,
        alt: "PT. Kapita Konsul Sinergi",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT. Kapita Konsul Sinergi",
    description: "Konsultan teknik, K3, dan lingkungan terbaik untuk industri Anda.",
    images: ["https://kapita-konsul-sinergi.vercel.app/og-img.jpg"],
    creator: "@kapitakonsul", // Ganti jika punya akun Twitter resmi
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

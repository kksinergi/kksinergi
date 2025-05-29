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
  title: "PT. Kapita Konsul Sinergi | Konsultan Teknik, K3, & Lingkungan Profesional",
  description: "PT. Kapita Konsul Sinergi adalah perusahaan konsultasi terpercaya yang menyediakan layanan profesional di bidang teknik, K3, dan lingkungan untuk meningkatkan kinerja bisnis Anda.",
  keywords: ["konsultan TKDN", "konsultan teknik", "konsultan K3", "SMK3", "ISO 45001", "konsultan lingkungan", "PROPER", "dokumen lingkungan", "training awareness", "jasa konsultasi berkelanjutan"],
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

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Googlebot", // Izinkan Google indeks
        allow: "/",
      },
      {
        userAgent: "Bingbot", // Izinkan Bing indeks
        allow: "/",
      },
      {
        userAgent: "Applebot", // Izinkan Apple indexing (Siri & Safari)
        allow: "/",
      },
      {
        userAgent: "*", // Semua bot lain (scraper, AI crawlers, dsb.)
        disallow: "/", // Dilarang total
      },
    ],
    sitemap: "https://kapita-konsul-sinergi.vercel.app/sitemap.xml",
  };
}

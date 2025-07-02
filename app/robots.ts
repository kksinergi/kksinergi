// app/robots.ts

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",  // Berlaku untuk semua bot
        allow: "/",      // Izinkan semua halaman
      },
    ],
    sitemap: "https://www.kksinergi.com/sitemap.xml",
  };
}

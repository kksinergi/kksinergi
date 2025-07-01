import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/", // Izinkan semua bot mengakses semua halaman
      },
    ],
    sitemap: "https://www.kksinergi.com/sitemap.xml",
  };
}

// app/sitemap.xml/route.ts
import { type NextRequest } from "next/server";

export async function GET(_request: NextRequest): Promise<Response> {
    const baseUrl = "https://www.kksinergi.com";

    const urls = [
        { url: `${baseUrl}/`, lastModified: new Date() },
        { url: `${baseUrl}/layanan`, lastModified: new Date() },
        { url: `${baseUrl}/team`, lastModified: new Date() },
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
            .map(
                (url) => `<url>
  <loc>${url.url}</loc>
  <lastmod>${url.lastModified.toISOString()}</lastmod>
</url>`
            )
            .join("\n")}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}

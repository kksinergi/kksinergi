// app/robots.txt/route.ts
export function GET(): Response {
    return new Response(
        `User-agent: *
  Allow: /
  
  Sitemap: https://www.kksinergi.com/sitemap.xml
  `,
        {
            headers: {
                "Content-Type": "text/plain",
            },
        }
    );
}
  
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const BLOCKED_USER_AGENTS = ["python", "httpclient", "scrapy", "curl", "wget", "axios", "go-http-client", "PostmanRuntime", "Java", "libwww", "HttpClient", "node-fetch"];

const rateLimitMap = new Map<string, { count: number; lastRequest: number }>();

// Batas maksimal request per menit
const RATE_LIMIT = 60;

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent")?.toLowerCase() || "";
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  // ✅ Cegah scraping berdasarkan user-agent
  const isScraper = BLOCKED_USER_AGENTS.some((bot) => userAgent.includes(bot));
  if (isScraper) {
    console.warn(`Blocked scraper: ${userAgent}`);
    return new NextResponse("Access denied (scraper).", { status: 403 });
  }

  // ✅ Rate limiting per IP (in-memory)
  const currentTime = Date.now();
  const windowSize = 60 * 1000; // 1 menit

  const entry = rateLimitMap.get(ip);
  if (!entry) {
    rateLimitMap.set(ip, { count: 1, lastRequest: currentTime });
  } else {
    if (currentTime - entry.lastRequest < windowSize) {
      entry.count += 1;
    } else {
      entry.count = 1;
      entry.lastRequest = currentTime;
    }

    if (entry.count > RATE_LIMIT) {
      console.warn(`Rate limit exceeded for IP: ${ip}`);
      return new NextResponse("Too many requests", { status: 429 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|api).*)"],
};

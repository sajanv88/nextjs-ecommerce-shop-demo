import { type NextRequest, NextResponse } from "next/server";
import { isKnownPath } from "@/lib/known-paths";

// A fresh nonce per request, sent as the Content-Security-Policy. Next reads the nonce from
// the request's CSP header and puts it on its own scripts; the root layout reads x-nonce for
// anything else that needs it (nuvui's ScrollArea, next/script).
export function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const isDev = process.env.NODE_ENV === "development";

  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${isDev ? " 'unsafe-eval'" : ""}`,
    // nuvui: ScrollArea's one <style> element takes the nonce; components set style attributes.
    `style-src 'self' ${isDev ? "'unsafe-inline'" : `'nonce-${nonce}'`}`,
    "style-src-attr 'unsafe-inline'",
    "img-src 'self' blob: data:",
    "font-src 'self'",
    "connect-src 'self'",
    "worker-src 'self' blob:",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
  ].join("; ");

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);

  // A product, collection or policy that doesn't exist is rewritten to a path no route
  // matches, so it renders the not-found page with a real 404 status. A streamed page can
  // only say "not found" in its body, after the 200 has gone out.
  const response = isKnownPath(request.nextUrl.pathname)
    ? NextResponse.next({ request: { headers: requestHeaders } })
    : NextResponse.rewrite(new URL("/__not-found", request.url), {
        request: { headers: requestHeaders },
      });
  response.headers.set("Content-Security-Policy", csp);
  return response;
}

export const config = {
  matcher: [
    {
      // Documents only: not route handlers (/api/health included), static files and anything
      // with an extension (product photographs, the manifest), image optimisation, metadata
      // images, or prefetches.
      source:
        "/((?!api/|_next/static|_next/image|opengraph-image|icon|apple-icon|robots.txt|sitemap.xml|.*\\.[a-z0-9]+$).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};

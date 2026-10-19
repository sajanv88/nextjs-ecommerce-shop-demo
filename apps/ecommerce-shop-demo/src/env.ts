import "server-only";
import * as v from "valibot";

// Runtime configuration, read on the server only. Values come from the chart's ConfigMap and
// the app's Secret. NEXT_PUBLIC_* values are build-time constants and don't belong here.
const ServerEnv = v.object({
  NODE_ENV: v.optional(v.picklist(["development", "production", "test"]), "production"),
  // The public origin, for canonical URLs, the sitemap and structured data. Set it in every
  // environment that search engines can reach, e.g. https://shop.example.com.
  SITE_URL: v.optional(v.pipe(v.string(), v.url())),
  // Set by Vercel (a hostname without a scheme); the fallback when SITE_URL is unset.
  VERCEL_PROJECT_PRODUCTION_URL: v.optional(v.pipe(v.string(), v.minLength(1))),
});

export type ServerEnv = v.InferOutput<typeof ServerEnv>;

let parsed: ServerEnv | undefined;

// Parsed on first use, not at import, so `next build` never needs runtime secrets.
export function env(): ServerEnv {
  parsed ??= v.parse(ServerEnv, process.env);
  return parsed;
}

/** The site's origin, without a trailing slash. */
export function siteUrl(): string {
  const { SITE_URL, VERCEL_PROJECT_PRODUCTION_URL } = env();
  if (SITE_URL) return SITE_URL.replace(/\/+$/, "");
  if (VERCEL_PROJECT_PRODUCTION_URL) return `https://${VERCEL_PROJECT_PRODUCTION_URL}`;
  return "http://localhost:3000";
}

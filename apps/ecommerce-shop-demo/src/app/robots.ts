import type { MetadataRoute } from "next";
import { connection } from "next/server";
import { absoluteUrl } from "@/lib/seo";

export default async function robots(): Promise<MetadataRoute.Robots> {
  await connection();
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // The bag is per visitor, and search results are endless variations of the catalog.
        disallow: ["/cart", "/api/"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}

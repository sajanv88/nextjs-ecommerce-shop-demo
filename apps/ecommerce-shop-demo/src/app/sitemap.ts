import type { MetadataRoute } from "next";
import { connection } from "next/server";
import { getCollections, getProducts } from "@/lib/catalog";
import { policies } from "@/lib/policies";
import { absoluteUrl } from "@/lib/seo";

// Rendered per request, so the URLs carry the origin the server is configured with at runtime
// (SITE_URL), not whatever it was at build time.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await connection();
  const [products, collections] = await Promise.all([getProducts(), getCollections()]);

  return [
    { url: absoluteUrl("/"), changeFrequency: "daily", priority: 1 },
    { url: absoluteUrl("/collections"), changeFrequency: "weekly", priority: 0.8 },
    ...collections.map((collection) => ({
      url: absoluteUrl(`/collections/${collection.handle}`),
      changeFrequency: "daily" as const,
      priority: 0.8,
      images: [absoluteUrl(collection.image.src)],
    })),
    ...products.map((product) => ({
      url: absoluteUrl(`/products/${product.handle}`),
      changeFrequency: "weekly" as const,
      priority: 0.7,
      images: product.images.map((image) => absoluteUrl(image.src)),
    })),
    { url: absoluteUrl("/about"), changeFrequency: "monthly", priority: 0.5 },
    ...policies.map((policy) => ({
      url: absoluteUrl(`/policies/${policy.slug}`),
      lastModified: policy.updated,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}

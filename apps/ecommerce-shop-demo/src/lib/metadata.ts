import type { Metadata } from "next";
import { site } from "./site";

interface PageMetadataInput {
  /** The page's own title. The root layout's template adds the store's name. */
  title: string;
  description: string;
  /** The page's path, which becomes its canonical URL against metadataBase. */
  path: string;
  image?: { url: string; width: number; height: number; alt: string };
  /** For search results, filtered lists and the bag: kept out of the index, links followed. */
  noindex?: boolean;
}

const defaultImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${site.name}: ${site.tagline}`,
};

// Every page's metadata comes through here, so each has a canonical URL, its own Open Graph
// and Twitter card, and the same image fallback.
export function pageMetadata({
  title,
  description,
  path,
  image = defaultImage,
  noindex = false,
}: PageMetadataInput): Metadata {
  const fullTitle = `${title} | ${site.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
      url: path,
      title: fullTitle,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

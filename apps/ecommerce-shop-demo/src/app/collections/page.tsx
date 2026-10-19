import { ArrowUpRightIcon } from "@nuvui/icons";
import { AspectRatio } from "@nuvui/react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CatalogHeader } from "@/components/catalog-header/catalog-header";
import { JsonLd } from "@/components/json-ld/json-ld";
import { getCollections } from "@/lib/catalog";
import { pageMetadata } from "@/lib/metadata";
import { href } from "@/lib/routes";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";
import "./collections.scss";

export const metadata: Metadata = pageMetadata({
  title: "Collections",
  description:
    "Explore every collection: womenswear, menswear, unisex and youth, outerwear, fleece and fine jersey, new arrivals and the archive sale.",
  path: "/collections",
});

export default async function CollectionsPage() {
  const collections = await getCollections();
  const trail = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/collections" },
  ] as const;

  return (
    <>
      <CatalogHeader
        trail={trail}
        eyebrow="The wardrobe"
        title="Collections"
        description="Every collection in the house, from the season's newest silhouettes to the last pieces of the archive."
      />
      <div className="page">
        <ul className="collections" aria-label="All collections">
          {collections.map((collection, index) => (
            <li key={collection.handle} className="collections__item">
              <Link className="collections__link" href={href(`/collections/${collection.handle}`)}>
                <AspectRatio ratio={4 / 5} className="collections__media">
                  <Image
                    className="collections__image"
                    src={collection.image.src}
                    alt=""
                    fill
                    preload={index < 3}
                    loading={index < 3 ? "eager" : "lazy"}
                    sizes="(min-width: 64rem) 30vw, (min-width: 40rem) 45vw, 100vw"
                  />
                </AspectRatio>
                <div className="collections__text">
                  <span className="collections__tagline">{collection.tagline}</span>
                  <h2 className="collections__title">{collection.title}</h2>
                  <span className="collections__description">{collection.description}</span>
                </div>
                <ArrowUpRightIcon size={20} className="collections__arrow" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <JsonLd data={breadcrumbJsonLd(trail)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Collections",
          url: absoluteUrl("/collections"),
          hasPart: collections.map((collection) => ({
            "@type": "CollectionPage",
            name: collection.title,
            url: absoluteUrl(`/collections/${collection.handle}`),
          })),
        }}
      />
    </>
  );
}

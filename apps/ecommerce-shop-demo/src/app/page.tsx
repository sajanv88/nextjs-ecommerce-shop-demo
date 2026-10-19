import type { Metadata } from "next";
import { CategoryTiles } from "@/components/home/category-tiles/category-tiles";
import { Editorial } from "@/components/home/editorial/editorial";
import { Hero } from "@/components/home/hero/hero";
import { Manifesto } from "@/components/home/manifesto/manifesto";
import { SplitBanners } from "@/components/home/split-banners/split-banners";
import { Testimonials } from "@/components/home/testimonials/testimonials";
import { JsonLd } from "@/components/json-ld/json-ld";
import { ProductGrid } from "@/components/product-grid/product-grid";
import { ProductRail } from "@/components/product-rail/product-rail";
import { SectionHeading } from "@/components/section-heading/section-heading";
import { getCollection, getCollections, getProductsByHandles } from "@/lib/catalog";
import { BESTSELLERS, CATEGORY_COLLECTIONS, NEW_ARRIVALS } from "@/lib/catalog/collections";
import { pageMetadata } from "@/lib/metadata";
import { itemListJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMetadata({ title: site.name, description: site.description, path: "/" }),
  title: { absolute: `${site.name} | ${site.tagline}` },
};

export default async function HomePage() {
  const [newArrivals, bestsellers, outerwear, collections, women, men] = await Promise.all([
    getProductsByHandles(NEW_ARRIVALS),
    getProductsByHandles(BESTSELLERS),
    getProductsByHandles(["summitstretch-jacket-womens", "briskgauge-jacket-mens"]),
    getCollections(),
    getCollection("women"),
    getCollection("men"),
  ]);
  const categories = collections.filter((collection) =>
    (CATEGORY_COLLECTIONS as readonly string[]).includes(collection.handle),
  );

  return (
    <>
      <Hero />

      <CategoryTiles collections={categories} />

      <ProductRail
        id="new-arrivals-title"
        eyebrow="Just landed"
        title="New arrivals"
        products={newArrivals}
        action={{ label: "Shop all new", href: "/collections/new-arrivals" }}
      />

      <Editorial
        id="outerwear-edit-title"
        eyebrow="The outerwear edit"
        title="Weather, considered."
        body="Bonded seams, articulated sleeves and soft-shell fabrics that shrug off rain without the bulk. Our outerwear is cut close and clean, to wear from the trailhead to the table."
        image={{
          src: "/products/summitstretch-jacket-womens/full-body.webp",
          alt: "A model in an orange SummitStretch Jacket",
        }}
        cta={{ label: "Explore outerwear", href: "/collections/jackets" }}
        products={outerwear}
      />

      {women && men && (
        <SplitBanners
          label="Shop by wearer"
          banners={[
            {
              title: women.title,
              text: "Shop the collection",
              href: "/collections/women",
              image: women.image,
            },
            {
              title: men.title,
              text: "Shop the collection",
              href: "/collections/men",
              image: men.image,
            },
          ]}
        />
      )}

      <section className="section" aria-labelledby="bestsellers-title">
        <SectionHeading
          id="bestsellers-title"
          eyebrow="Most wanted"
          title="Bestsellers"
          description="The pieces our clients return to, season after season."
          action={{ label: "View all", href: "/collections/bestsellers" }}
        />
        <ProductGrid products={bestsellers} label="Bestsellers" />
      </section>

      <Manifesto />

      <Testimonials />

      <JsonLd data={itemListJsonLd("New arrivals", newArrivals)} />
    </>
  );
}

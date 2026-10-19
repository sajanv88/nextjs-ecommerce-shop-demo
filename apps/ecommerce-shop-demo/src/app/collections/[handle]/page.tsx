import { Button, Empty, EmptyActions, EmptyDescription, EmptyTitle } from "@nuvui/react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CatalogHeader } from "@/components/catalog-header/catalog-header";
import { CatalogToolbar } from "@/components/catalog-toolbar/catalog-toolbar";
import { JsonLd } from "@/components/json-ld/json-ld";
import { CatalogSkeleton } from "@/components/page-skeleton/page-skeleton";
import { ProductGrid } from "@/components/product-grid/product-grid";
import {
  getCollection,
  getCollectionProducts,
  getCollectionRefinements,
  getCollections,
} from "@/lib/catalog";
import { refinementLabel } from "@/lib/catalog/labels";
import { parseCollectionParams } from "@/lib/catalog/query";
import { PRODUCT_IMAGE_SIZE } from "@/lib/catalog/types";
import { pageMetadata } from "@/lib/metadata";
import { href } from "@/lib/routes";
import { breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo";

// Prerendered at build; an unknown handle gets a 404 status from src/proxy.ts.
export async function generateStaticParams() {
  return (await getCollections()).map((collection) => ({ handle: collection.handle }));
}

export async function generateMetadata({
  params,
  searchParams,
}: PageProps<"/collections/[handle]">): Promise<Metadata> {
  const { handle } = await params;
  const collection = await getCollection(handle);
  if (!collection) return {};
  const { refine } = parseCollectionParams(await searchParams);
  const title = refine ? `${collection.title}: ${refinementLabel(refine)}` : collection.title;

  return pageMetadata({
    title,
    description: collection.description,
    // Every sorted or narrowed view points search engines at the collection itself.
    path: `/collections/${collection.handle}`,
    image: {
      url: collection.image.src,
      width: PRODUCT_IMAGE_SIZE,
      height: PRODUCT_IMAGE_SIZE,
      alt: collection.image.alt,
    },
  });
}

// The URL is read inside a Suspense boundary, so a navigation shows the skeleton at once and
// the page streams in behind it. The HTML still carries the whole page for search engines.
export default function CollectionPage(props: PageProps<"/collections/[handle]">) {
  return (
    <Suspense fallback={<CatalogSkeleton />}>
      <Collection {...props} />
    </Suspense>
  );
}

async function Collection({ params, searchParams }: PageProps<"/collections/[handle]">) {
  const { handle } = await params;
  const collection = await getCollection(handle);
  if (!collection) notFound();

  const { sort, refine } = parseCollectionParams(await searchParams);
  const [products, refinements] = await Promise.all([
    getCollectionProducts(collection.handle, { sort, refine }),
    getCollectionRefinements(collection.handle),
  ]);
  const pathname = `/collections/${collection.handle}`;
  const trail = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/collections" },
    { name: collection.title, path: `/collections/${collection.handle}` },
  ] as const;

  return (
    <>
      <CatalogHeader
        trail={trail}
        eyebrow={collection.tagline}
        title={collection.title}
        description={collection.description}
      />
      <CatalogToolbar
        pathname={pathname}
        title={collection.title}
        count={products.length}
        sort={sort}
        refine={refine}
        refinements={refinements}
      />
      <div className="page page--flush">
        {products.length > 0 ? (
          <ProductGrid
            products={products}
            label={`${collection.title}${refine ? `, ${refinementLabel(refine)}` : ""}`}
            headingLevel={2}
            preloadCount={4}
          />
        ) : (
          <Empty>
            <EmptyTitle asChild>
              <h2>Nothing here in this selection</h2>
            </EmptyTitle>
            <EmptyDescription>
              Every piece in this cut has found a home. Try another filter, or see the whole
              collection.
            </EmptyDescription>
            <EmptyActions>
              <Button asChild intent="secondary">
                <Link href={href(`/collections/${collection.handle}`)}>
                  Show all {collection.title}
                </Link>
              </Button>
            </EmptyActions>
          </Empty>
        )}
      </div>
      <JsonLd data={breadcrumbJsonLd(trail)} />
      <JsonLd data={itemListJsonLd(collection.title, products)} />
    </>
  );
}

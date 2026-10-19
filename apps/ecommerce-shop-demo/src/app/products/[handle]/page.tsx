import { GemIcon, RotateCcwIcon, TruckIcon } from "@nuvui/icons";
import { Badge, Rating } from "@nuvui/react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Money } from "@/components/currency/money";
import { JsonLd } from "@/components/json-ld/json-ld";
import { ProductSkeleton } from "@/components/page-skeleton/page-skeleton";
import { Price } from "@/components/price/price";
import { ProductDetails } from "@/components/product-details/product-details";
import { ProductGallery } from "@/components/product-gallery/product-gallery";
import { ProductGrid } from "@/components/product-grid/product-grid";
import { ProductPurchase } from "@/components/product-purchase/product-purchase";
import { SectionHeading } from "@/components/section-heading/section-heading";
import { SiteBreadcrumb } from "@/components/site-breadcrumb/site-breadcrumb";
import { getProduct, getProducts, getRelatedProducts } from "@/lib/catalog";
import { CATEGORY_LABELS, GENDER_LABELS } from "@/lib/catalog/labels";
import { parseProductParams } from "@/lib/catalog/query";
import { PRODUCT_IMAGE_SIZE } from "@/lib/catalog/types";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, productJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import "./product.scss";

// Prerendered at build; an unknown handle gets a 404 status from src/proxy.ts.
export async function generateStaticParams() {
  return (await getProducts()).map((product) => ({ handle: product.handle }));
}

export async function generateMetadata({
  params,
}: PageProps<"/products/[handle]">): Promise<Metadata> {
  const { handle } = await params;
  const product = await getProduct(handle);
  if (!product) return {};
  const image = product.images[1] ?? product.images[0];

  return {
    ...pageMetadata({
      title: `${product.title} in ${product.color}`,
      description: product.summary,
      path: `/products/${product.handle}`,
      ...(image
        ? {
            image: {
              url: image.src,
              width: PRODUCT_IMAGE_SIZE,
              height: PRODUCT_IMAGE_SIZE,
              alt: image.alt,
            },
          }
        : {}),
    }),
    other: {
      "product:price:amount": product.price.toFixed(2),
      "product:price:currency": site.currency,
      "product:availability": "in stock",
      "product:brand": site.name,
    },
  };
}

// The URL is read inside a Suspense boundary, so a navigation shows the skeleton at once and
// the page streams in behind it. The HTML still carries the whole page for search engines.
export default function ProductPage(props: PageProps<"/products/[handle]">) {
  return (
    <Suspense fallback={<ProductSkeleton />}>
      <Product {...props} />
    </Suspense>
  );
}

async function Product({ params, searchParams }: PageProps<"/products/[handle]">) {
  const { handle } = await params;
  const product = await getProduct(handle);
  if (!product) notFound();

  const { size } = parseProductParams(await searchParams);
  const related = await getRelatedProducts(product.handle, 4);
  const [studio] = product.images;
  const trail = [
    { name: "Home", path: "/" },
    { name: GENDER_LABELS[product.gender], path: `/collections/${product.gender}` },
    { name: product.title, path: `/products/${product.handle}` },
  ] as const;

  return (
    <>
      <div className="product page">
        <SiteBreadcrumb trail={trail} />

        <div className="product__layout">
          <ProductGallery title={product.title} images={product.images} />

          <section className="product__info" aria-labelledby="product-title">
            <p className="product__eyebrow">
              {GENDER_LABELS[product.gender]} · {CATEGORY_LABELS[product.category]}
            </p>
            <h1 id="product-title" className="product__title">
              {product.title}
            </h1>
            <div className="product__rating">
              <Rating readOnly size="sm" value={product.rating} />
              <span className="product__rating-text">
                {product.rating.toFixed(1)} · {product.reviewCount} reviews
              </span>
            </div>
            <div className="product__price">
              <Price price={product.price} compareAtPrice={product.compareAtPrice} size="lg" />
              {product.compareAtPrice && <Badge intent="danger">Archive sale</Badge>}
            </div>
            <p className="product__summary">{product.summary}</p>
            <p className="product__color">
              <span className="product__label">Colour</span> {product.color}
            </p>

            {studio && (
              <ProductPurchase
                product={{
                  handle: product.handle,
                  title: product.title,
                  color: product.color,
                  price: product.price,
                  image: studio,
                  sizes: product.sizes,
                }}
                defaultSize={size}
              />
            )}

            <ul className="product__promises">
              <li className="product__promise">
                <TruckIcon size={18} />
                Complimentary shipping over <Money usd={site.freeShippingThreshold} whole />
              </li>
              <li className="product__promise">
                <RotateCcwIcon size={18} />
                Free returns within {site.returnDays} days
              </li>
              <li className="product__promise">
                <GemIcon size={18} />
                Made in a limited run
              </li>
            </ul>

            <ProductDetails product={product} />
          </section>
        </div>
      </div>

      <section className="section" aria-labelledby="related-title">
        <SectionHeading
          id="related-title"
          eyebrow="Complete the look"
          title="You may also like"
          action={{ label: "Shop all", href: `/collections/${product.category}` }}
        />
        <ProductGrid products={related} label="You may also like" />
      </section>

      <JsonLd data={productJsonLd(product)} />
      <JsonLd data={breadcrumbJsonLd(trail)} />
    </>
  );
}

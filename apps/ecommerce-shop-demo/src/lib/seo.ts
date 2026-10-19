import "server-only";
import { siteUrl } from "@/env";
import type { Product } from "./catalog/types";
import { site } from "./site";

// schema.org objects for the JSON-LD on each page. Only facts the page itself shows go in:
// the demo's star ratings are left out on purpose, since they aren't real reviews.

export function absoluteUrl(path: string): string {
  return new URL(path, `${siteUrl()}/`).toString();
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: site.name,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/icon.svg"),
    email: site.email,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: site.name,
    url: absoluteUrl("/"),
    inLanguage: site.locale,
    publisher: { "@id": absoluteUrl("/#organization") },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${absoluteUrl("/search")}?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbJsonLd(trail: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function itemListJsonLd(name: string, products: readonly Product[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/products/${product.handle}`),
      name: product.title,
    })),
  };
}

export function productJsonLd(product: Product) {
  const url = absoluteUrl(`/products/${product.handle}`);
  return {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "@id": `${url}#product`,
    name: product.title,
    description: product.description.join(" "),
    url,
    image: product.images.map((image) => absoluteUrl(image.src)),
    brand: { "@type": "Brand", name: site.name },
    color: product.color,
    productGroupID: product.handle,
    variesBy: ["https://schema.org/size"],
    hasVariant: product.sizes.map((size) => ({
      "@type": "Product",
      sku: `${product.handle}-${size.toLowerCase()}`,
      name: `${product.title}, ${product.color}, ${size}`,
      size,
      color: product.color,
      image: absoluteUrl(product.images[0]?.src ?? "/icon.svg"),
      offers: {
        "@type": "Offer",
        url: `${url}?size=${size}`,
        price: product.price.toFixed(2),
        priceCurrency: site.currency,
        // On sale: the original price, which search results can show struck through.
        ...(product.compareAtPrice
          ? {
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                priceType: "https://schema.org/ListPrice",
                price: product.compareAtPrice.toFixed(2),
                priceCurrency: site.currency,
              },
            }
          : {}),
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        hasMerchantReturnPolicy: {
          "@type": "MerchantReturnPolicy",
          applicableCountry: "US",
          returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
          merchantReturnDays: site.returnDays,
          returnMethod: "https://schema.org/ReturnByMail",
          returnFees: "https://schema.org/FreeReturn",
        },
      },
    })),
  };
}

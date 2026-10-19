import { AspectRatio, Badge } from "@nuvui/react";
import Image from "next/image";
import Link from "next/link";
import { Price } from "@/components/price/price";
import { NEW_ARRIVALS } from "@/lib/catalog/collections";
import type { Product } from "@/lib/catalog/types";
import { href } from "@/lib/routes";
import "./product-card.scss";

interface ProductCardProps {
  product: Product;
  /** The heading level that fits the page's outline. */
  headingLevel?: 2 | 3;
  /** For the cards in the first screenful: their photograph is fetched first. */
  preload?: boolean;
  sizes?: string;
}

const newArrivals = new Set<string>(NEW_ARRIVALS);

export function ProductCard({
  product,
  headingLevel = 3,
  preload = false,
  sizes = "(min-width: 80rem) 22vw, (min-width: 48rem) 30vw, 46vw",
}: ProductCardProps) {
  const Heading = `h${headingLevel}` as const;
  const [studio, worn] = product.images;
  const discount = product.compareAtPrice
    ? Math.round((1 - product.price / product.compareAtPrice) * 100)
    : 0;

  return (
    <article className="product-card">
      <Link className="product-card__link" href={href(`/products/${product.handle}`)}>
        <div className="product-card__frame">
          <AspectRatio ratio={4 / 5} className="product-card__media">
            {studio && (
              <Image
                className="product-card__image product-card__image--studio"
                src={studio.src}
                alt={studio.alt}
                fill
                sizes={sizes}
                preload={preload}
                loading={preload ? "eager" : "lazy"}
              />
            )}
            {worn && (
              <Image
                className="product-card__image product-card__image--worn"
                src={worn.src}
                alt=""
                fill
                sizes={sizes}
              />
            )}
          </AspectRatio>
          <span className="product-card__badges">
            {discount > 0 && <Badge intent="danger">−{discount}%</Badge>}
            {discount === 0 && newArrivals.has(product.handle) && (
              <Badge variant="outline" className="product-card__badge">
                New
              </Badge>
            )}
          </span>
        </div>
        <div className="product-card__body">
          <Heading className="product-card__title">{product.title}</Heading>
          <span className="product-card__meta">{product.color}</span>
          <Price price={product.price} compareAtPrice={product.compareAtPrice} size="sm" />
        </div>
      </Link>
    </article>
  );
}

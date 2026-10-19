import { ArrowRightIcon } from "@nuvui/icons";
import { Button } from "@nuvui/react";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/product-card/product-card";
import type { Product, ProductImage } from "@/lib/catalog/types";
import { cx } from "@/lib/cx";
import { href, type Path } from "@/lib/routes";
import "./editorial.scss";

interface EditorialProps {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  image: ProductImage;
  cta: { label: string; href: Path };
  products: readonly Product[];
  reverse?: boolean;
}

// A large photograph beside a short story and the pieces it shows.
export function Editorial({
  id,
  eyebrow,
  title,
  body,
  image,
  cta,
  products,
  reverse = false,
}: EditorialProps) {
  return (
    <section className={cx("editorial", reverse && "editorial--reverse")} aria-labelledby={id}>
      <div className="editorial__figure">
        <Image
          className="editorial__image"
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 64rem) 50vw, 100vw"
        />
      </div>
      <div className="editorial__content">
        <p className="editorial__eyebrow">{eyebrow}</p>
        <h2 id={id} className="editorial__title">
          {title}
        </h2>
        <p className="editorial__body">{body}</p>
        <Button asChild intent="secondary" className="editorial__cta">
          <Link href={href(cta.href)}>
            {cta.label}
            <ArrowRightIcon size={16} />
          </Link>
        </Button>
        <ul className="editorial__products" aria-label={`Pieces from ${title}`}>
          {products.map((product) => (
            <li key={product.handle}>
              <ProductCard product={product} sizes="(min-width: 64rem) 20vw, 45vw" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

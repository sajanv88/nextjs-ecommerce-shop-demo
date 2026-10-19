import { ProductCard } from "@/components/product-card/product-card";
import type { Product } from "@/lib/catalog/types";
import { cx } from "@/lib/cx";
import "./product-grid.scss";

interface ProductGridProps {
  products: readonly Product[];
  label: string;
  headingLevel?: 2 | 3;
  /** How many of the first cards fetch their photograph straight away. */
  preloadCount?: number;
  columns?: 3 | 4;
  className?: string;
}

export function ProductGrid({
  products,
  label,
  headingLevel = 3,
  preloadCount = 0,
  columns = 4,
  className,
}: ProductGridProps) {
  return (
    <ul
      className={cx("product-grid", columns === 4 && "product-grid--wide", className)}
      aria-label={label}
    >
      {products.map((product, index) => (
        <li key={product.handle} className="product-grid__item">
          <ProductCard
            product={product}
            headingLevel={headingLevel}
            preload={index < preloadCount}
          />
        </li>
      ))}
    </ul>
  );
}

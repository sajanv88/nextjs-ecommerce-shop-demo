import { VisuallyHidden } from "@nuvui/react";
import { Money } from "@/components/currency/money";
import { cx } from "@/lib/cx";
import "./price.scss";

interface PriceProps {
  /** In US dollars; shown in the visitor's display currency. */
  price: number;
  compareAtPrice?: number | undefined;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Price({ price, compareAtPrice, size = "md", className }: PriceProps) {
  const onSale = compareAtPrice !== undefined && compareAtPrice > price;

  return (
    <span className={cx("price", `price--${size}`, className)}>
      {onSale && <VisuallyHidden>Sale price</VisuallyHidden>}
      <Money className={cx("price__current", onSale && "price__current--sale")} usd={price} />
      {onSale && (
        <>
          <VisuallyHidden>, was</VisuallyHidden>
          <s className="price__was">
            <Money usd={compareAtPrice} />
          </s>
        </>
      )}
    </span>
  );
}

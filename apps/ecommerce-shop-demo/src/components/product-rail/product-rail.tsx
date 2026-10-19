import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@nuvui/react";
import { ProductCard } from "@/components/product-card/product-card";
import { SectionHeading } from "@/components/section-heading/section-heading";
import type { Product } from "@/lib/catalog/types";
import type { Path } from "@/lib/routes";
import "./product-rail.scss";

interface ProductRailProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  products: readonly Product[];
  action?: { label: string; href: Path };
}

// A row of product cards to swipe or step through, with part of the next card in view.
export function ProductRail({
  id,
  eyebrow,
  title,
  description,
  products,
  action,
}: ProductRailProps) {
  return (
    <section className="product-rail" aria-labelledby={id}>
      <SectionHeading
        id={id}
        title={title}
        {...(eyebrow ? { eyebrow } : {})}
        {...(description ? { description } : {})}
        {...(action ? { action } : {})}
      />
      <Carousel aria-label={title} options={{ align: "start" }} className="product-rail__carousel">
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.handle}>
              <ProductCard
                product={product}
                sizes="(min-width: 80rem) 22vw, (min-width: 48rem) 30vw, 70vw"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="product-rail__controls">
          <CarouselPrevious aria-label={`Previous pieces in ${title}`} />
          <CarouselNext aria-label={`More pieces in ${title}`} />
        </div>
      </Carousel>
    </section>
  );
}

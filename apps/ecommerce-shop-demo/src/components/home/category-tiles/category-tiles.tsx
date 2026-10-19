import { ArrowUpRightIcon } from "@nuvui/icons";
import { AspectRatio } from "@nuvui/react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading/section-heading";
import type { Collection } from "@/lib/catalog/types";
import { href } from "@/lib/routes";
import "./category-tiles.scss";

export function CategoryTiles({ collections }: { collections: readonly Collection[] }) {
  return (
    <section className="category-tiles" aria-labelledby="category-tiles-title">
      <SectionHeading
        id="category-tiles-title"
        eyebrow="The wardrobe"
        title="Shop by category"
        action={{ label: "All collections", href: "/collections" }}
      />
      <ul className="category-tiles__list">
        {collections.map((collection) => (
          <li key={collection.handle}>
            <Link className="category-tiles__tile" href={href(`/collections/${collection.handle}`)}>
              <AspectRatio ratio={3 / 4} className="category-tiles__media">
                <Image
                  className="category-tiles__image"
                  src={collection.image.src}
                  alt=""
                  fill
                  sizes="(min-width: 64rem) 18vw, (min-width: 40rem) 30vw, 45vw"
                />
              </AspectRatio>
              <span className="category-tiles__label">
                <span className="category-tiles__name">{collection.title}</span>
                <span className="category-tiles__tagline">{collection.tagline}</span>
              </span>
              <ArrowUpRightIcon size={18} className="category-tiles__arrow" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

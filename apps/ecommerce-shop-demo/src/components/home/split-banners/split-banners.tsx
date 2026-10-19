import { ArrowRightIcon } from "@nuvui/icons";
import Image from "next/image";
import Link from "next/link";
import type { ProductImage } from "@/lib/catalog/types";
import { href, type Path } from "@/lib/routes";
import "./split-banners.scss";

interface Banner {
  title: string;
  text: string;
  href: Path;
  image: ProductImage;
}

// Two full-height photographs side by side, each a way into one side of the collection.
export function SplitBanners({ banners, label }: { banners: readonly Banner[]; label: string }) {
  return (
    <section className="split-banners" aria-label={label}>
      {banners.map((banner) => (
        <Link key={banner.href} className="split-banners__banner" href={href(banner.href)}>
          <Image
            className="split-banners__image"
            src={banner.image.src}
            alt={banner.image.alt}
            fill
            sizes="(min-width: 48rem) 50vw, 100vw"
          />
          <span className="split-banners__scrim" />
          <span className="split-banners__text">
            <span className="split-banners__title">{banner.title}</span>
            <span className="split-banners__line">
              {banner.text}
              <ArrowRightIcon size={16} />
            </span>
          </span>
        </Link>
      ))}
    </section>
  );
}

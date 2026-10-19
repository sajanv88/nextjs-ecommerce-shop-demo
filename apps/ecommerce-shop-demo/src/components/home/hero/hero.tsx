import { ArrowRightIcon } from "@nuvui/icons";
import { Button, TextReveal } from "@nuvui/react";
import Image from "next/image";
import Link from "next/link";
import "./hero.scss";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__media">
        <Link
          className="hero__figure"
          href="/products/venturefield-jacket-womens"
          aria-label="VentureField Jacket, women"
        >
          <Image
            className="hero__image"
            src="/products/venturefield-jacket-womens/full-body.webp"
            alt="A model in a black VentureField Jacket and leggings"
            fill
            preload
            loading="eager"
            sizes="(min-width: 64rem) 30vw, 50vw"
          />
        </Link>
        <Link
          className="hero__figure hero__figure--offset"
          href="/products/peakdrift-hoodie-mens"
          aria-label="PeakDrift Hoodie, men"
        >
          <Image
            className="hero__image"
            src="/products/peakdrift-hoodie-mens/full-body.webp"
            alt="A model in a black PeakDrift Hoodie and trousers"
            fill
            preload
            loading="eager"
            sizes="(min-width: 64rem) 30vw, 50vw"
          />
        </Link>
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">Autumn / Winter collection</p>
        <h1 id="hero-title" className="hero__title">
          <TextReveal lines={["Quiet luxury,", <em key="move">made to move.</em>]} />
        </h1>
        <p className="hero__lede">
          Technical outerwear, brushed fleece and fine jersey, cut for movement and finished for the
          city. Made in limited runs, and made to last.
        </p>
        <div className="hero__actions">
          <Button asChild size="lg">
            <Link href="/collections/women">
              Shop women
              <ArrowRightIcon size={16} />
            </Link>
          </Button>
          <Button asChild size="lg" intent="secondary">
            <Link href="/collections/men">Shop men</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

import { ArrowRightIcon } from "@nuvui/icons";
import { Button, Separator } from "@nuvui/react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld/json-ld";
import { SiteBreadcrumb } from "@/components/site-breadcrumb/site-breadcrumb";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import "./about.scss";

export const metadata: Metadata = pageMetadata({
  title: "Our story",
  description: `How ${site.name} makes fewer, better pieces: the fabrics, the cut, and why every collection is made in a limited run.`,
  path: "/about",
  image: {
    url: "/products/crestlayer-hoodie-womens/side-profile.webp",
    width: 1024,
    height: 1024,
    alt: "A model in a black CrestLayer Hoodie, side profile",
  },
});

const principles = [
  {
    title: "Fabric first",
    text: "We start with the cloth: dense loopback cotton, fine-gauge jersey and stretch soft-shell, chosen for how they feel on the skin and how they age.",
  },
  {
    title: "Cut for movement",
    text: "Raglan shoulders, articulated sleeves and gusseted seams. Every pattern is tested in motion, then refined until it disappears when worn.",
  },
  {
    title: "Made in small runs",
    text: "Each piece is made in a limited number. When a run is gone, it's gone, so we make close to what our clients will wear and very little goes to waste.",
  },
] as const;

const trail = [
  { name: "Home", path: "/" },
  { name: "Our story", path: "/about" },
] as const;

export default function AboutPage() {
  return (
    <>
      <div className="page">
        <SiteBreadcrumb trail={trail} />
        <header className="about__intro">
          <p className="page__eyebrow">The house</p>
          <h1 className="about__title">
            Considered essentials, <em>for a life in motion.</em>
          </h1>
          <p className="page__lede">
            {site.name} began with a simple frustration: activewear that performed beautifully but
            looked out of place everywhere else. We set out to make pieces that move from the studio
            to the street to the table, without changing.
          </p>
        </header>
      </div>

      <div className="about__gallery">
        <figure className="about__figure">
          <Image
            className="about__image"
            src="/products/crestlayer-hoodie-womens/side-profile.webp"
            alt="A model in a black CrestLayer Hoodie, side profile"
            fill
            preload
            loading="eager"
            sizes="(min-width: 48rem) 33vw, 100vw"
          />
        </figure>
        <figure className="about__figure about__figure--tall">
          <Image
            className="about__image"
            src="/products/apexvale-jacket-mens/full-body.webp"
            alt="A model in a blue ApexVale Jacket, full length"
            fill
            sizes="(min-width: 48rem) 33vw, 100vw"
          />
        </figure>
        <figure className="about__figure">
          <Image
            className="about__image"
            src="/products/waypointstack-sweatshirt-womens/waist-up.webp"
            alt="A model in a white WaypointStack Sweatshirt"
            fill
            sizes="(min-width: 48rem) 33vw, 100vw"
          />
        </figure>
      </div>

      <section className="section about__principles" aria-labelledby="principles-title">
        <h2 id="principles-title" className="about__heading">
          What we hold to
        </h2>
        <ol className="about__list">
          {principles.map((principle, index) => (
            <li key={principle.title} className="about__principle">
              <span className="about__number" aria-hidden="true">
                0{index + 1}
              </span>
              <h3 className="about__principle-title">{principle.title}</h3>
              <p className="about__principle-text">{principle.text}</p>
            </li>
          ))}
        </ol>
        <Separator className="about__rule" />
        <div className="about__cta">
          <p className="about__cta-text">See what the atelier is making this season.</p>
          <Button asChild size="lg">
            <Link href="/collections/new-arrivals">
              Shop new arrivals
              <ArrowRightIcon size={16} />
            </Link>
          </Button>
        </div>
      </section>
      <JsonLd data={breadcrumbJsonLd(trail)} />
    </>
  );
}

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@nuvui/react";
import Link from "next/link";
import { Money } from "@/components/currency/money";
import type { Category, Product } from "@/lib/catalog/types";
import { site } from "@/lib/site";
import "./product-details.scss";

const FABRIC: Record<Category, readonly string[]> = {
  jackets: [
    "Three-layer stretch soft-shell with a brushed interior",
    "Water-repellent finish, free of PFCs",
    "Bonded, low-profile seams and zipped hand pockets",
    "Regular fit through the body, articulated sleeves",
  ],
  hoodies: [
    "Heavyweight 420 gsm loopback cotton, brushed inside",
    "Double-layer hood that holds its shape",
    "Ribbed cuffs and hem with a little stretch",
    "Relaxed through the body; take your usual size",
  ],
  sweatshirts: [
    "Dense 380 gsm loopback cotton",
    "Raglan sleeves for an easy range of movement",
    "Ribbed collar, cuffs and hem",
    "Relaxed fit; size down for a closer cut",
  ],
  tees: [
    "Fine-gauge 180 gsm cotton jersey with a soft hand",
    "Taped neck and shoulder seams",
    "Pre-washed to keep its size and shape",
    "Regular fit, true to size",
  ],
  "long-tees": [
    "Fine-gauge 200 gsm cotton jersey with stretch",
    "Flatlock seams that lie smooth under a layer",
    "Thumb-length sleeves",
    "Close fit; size up for a relaxed cut",
  ],
};

const CARE = [
  "Machine wash cold, inside out, with similar colors",
  "Do not tumble dry; dry flat in the shade",
  "Cool iron on the reverse if needed",
  "Do not bleach or dry clean",
] as const;

// What there is to know about a piece. Every panel is in the HTML from the server, so search
// engines read it, and the closed ones are hidden with CSS.
export function ProductDetails({ product }: { product: Product }) {
  return (
    <Accordion type="multiple" defaultValue={["description"]} className="product-details">
      <AccordionItem value="description">
        <AccordionTrigger headingLevel={2}>Description</AccordionTrigger>
        <AccordionContent forceMount className="product-details__panel">
          {product.description.map((paragraph) => (
            <p key={paragraph} className="product-details__text">
              {paragraph}
            </p>
          ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="fabric">
        <AccordionTrigger headingLevel={2}>Fabric and fit</AccordionTrigger>
        <AccordionContent forceMount className="product-details__panel">
          <ul className="product-details__list">
            {FABRIC[product.category].map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="care">
        <AccordionTrigger headingLevel={2}>Care</AccordionTrigger>
        <AccordionContent forceMount className="product-details__panel">
          <ul className="product-details__list">
            {CARE.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="shipping">
        <AccordionTrigger headingLevel={2}>Shipping and returns</AccordionTrigger>
        <AccordionContent forceMount className="product-details__panel">
          <p className="product-details__text">
            Complimentary standard shipping on orders over{" "}
            <Money usd={site.freeShippingThreshold} whole />, and express delivery in one to two
            working days. Returns are free within {site.returnDays} days of delivery.{" "}
            <Link className="product-details__link" href="/policies/shipping-returns">
              Shipping and returns
            </Link>
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

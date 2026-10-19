import { Card, CardContent, CardFooter, Rating } from "@nuvui/react";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading/section-heading";
import { href } from "@/lib/routes";
import "./testimonials.scss";

// Sample words for the demo store. Replace them with reviews from your own clients.
const notes = [
  {
    quote:
      "The VentureField is the first technical jacket I'd happily wear to dinner. The cut is immaculate and it packs down to nothing.",
    name: "Amara O.",
    piece: { title: "VentureField Jacket", handle: "venturefield-jacket-womens" },
    rating: 5,
  },
  {
    quote:
      "Heavy, soft and it holds its shape. I've worn the PeakDrift most days since autumn and it still looks new.",
    name: "Julien M.",
    piece: { title: "PeakDrift Hoodie", handle: "peakdrift-hoodie-mens" },
    rating: 5,
  },
  {
    quote:
      "Considered down to the seams. Delivery arrived wrapped beautifully, and the sizing guidance was spot on.",
    name: "Hana K.",
    piece: { title: "WaypointStack Sweatshirt", handle: "waypointstack-sweatshirt-womens" },
    rating: 4.5,
  },
] as const;

export function Testimonials() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <SectionHeading
        id="testimonials-title"
        eyebrow="In their words"
        title="Worn, and loved"
        align="center"
      />
      <ul className="testimonials__list">
        {notes.map((note) => (
          <li key={note.name}>
            <Card className="testimonials__card">
              <CardContent className="testimonials__content">
                <Rating readOnly size="sm" value={note.rating} />
                <blockquote className="testimonials__quote">
                  <p>“{note.quote}”</p>
                </blockquote>
              </CardContent>
              <CardFooter className="testimonials__footer">
                <span className="testimonials__name">{note.name}</span>
                <Link className="testimonials__piece" href={href(`/products/${note.piece.handle}`)}>
                  {note.piece.title}
                </Link>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}

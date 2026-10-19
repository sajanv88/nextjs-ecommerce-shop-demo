import { Separator } from "@nuvui/react";
import Link from "next/link";
import "./manifesto.scss";

const facts = [
  { figure: "12", label: "pieces per season, never more" },
  { figure: "400", label: "pieces in each run" },
  { figure: "30", label: "days to change your mind" },
] as const;

export function Manifesto() {
  return (
    <section className="manifesto" aria-labelledby="manifesto-title">
      <p className="manifesto__eyebrow">The house</p>
      <h2 id="manifesto-title" className="manifesto__title">
        We make fewer pieces, <em>and we make them properly.</em>
      </h2>
      <p className="manifesto__body">
        Every garment begins as a single question: what would make this better to move in, and
        better to live in? The answer is rarely more. It is a cleaner seam, a denser fleece, a
        sleeve cut to follow the arm.{" "}
        <Link className="manifesto__link" href="/about">
          Read our story
        </Link>
      </p>
      <Separator className="manifesto__rule" />
      <dl className="manifesto__facts">
        {facts.map((fact) => (
          <div key={fact.label} className="manifesto__fact">
            <dt className="manifesto__label">{fact.label}</dt>
            <dd className="manifesto__figure">{fact.figure}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

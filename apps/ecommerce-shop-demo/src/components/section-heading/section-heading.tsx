import { ArrowRightIcon } from "@nuvui/icons";
import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import { href, type Path } from "@/lib/routes";
import "./section-heading.scss";

interface SectionHeadingProps {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  action?: { label: string; href: Path };
  level?: 1 | 2;
  align?: "start" | "center";
  className?: string;
}

// The eyebrow, heading and link that open a section. The heading's id names the section.
export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  action,
  level = 2,
  align = "start",
  className,
}: SectionHeadingProps) {
  const Heading = `h${level}` as const;

  return (
    <header className={cx("section-heading", `section-heading--${align}`, className)}>
      <div className="section-heading__text">
        {eyebrow && <p className="section-heading__eyebrow">{eyebrow}</p>}
        <Heading id={id} className="section-heading__title">
          {title}
        </Heading>
        {description && <p className="section-heading__description">{description}</p>}
      </div>
      {action && (
        <Link className="section-heading__action" href={href(action.href)}>
          {action.label}
          <ArrowRightIcon size={16} />
        </Link>
      )}
    </header>
  );
}

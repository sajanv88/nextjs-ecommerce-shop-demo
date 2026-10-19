import type { ReactNode } from "react";
import { type Crumb, SiteBreadcrumb } from "@/components/site-breadcrumb/site-breadcrumb";
import "./catalog-header.scss";

interface CatalogHeaderProps {
  trail: readonly Crumb[];
  eyebrow: string;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
}

// The top of a collection, the search page and the list of collections.
export function CatalogHeader({
  trail,
  eyebrow,
  title,
  description,
  children,
}: CatalogHeaderProps) {
  return (
    <header className="catalog-header">
      <SiteBreadcrumb trail={trail} />
      <div className="catalog-header__text">
        <p className="catalog-header__eyebrow">{eyebrow}</p>
        <h1 className="catalog-header__title">{title}</h1>
        {description && <p className="catalog-header__description">{description}</p>}
      </div>
      {children}
    </header>
  );
}

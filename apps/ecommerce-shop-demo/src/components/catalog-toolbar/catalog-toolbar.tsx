import { Button } from "@nuvui/react";
import type { Route } from "next";
import Link from "next/link";
import { SortSelect } from "@/components/sort-select/sort-select";
import { refinementLabel } from "@/lib/catalog/labels";
import type { Category, Gender, Sort } from "@/lib/catalog/types";
import "./catalog-toolbar.scss";

interface CatalogToolbarProps {
  pathname: string;
  title: string;
  count: number;
  sort: Sort;
  refine?: Category | Gender | undefined;
  refinements?: readonly { value: Category | Gender; count: number }[];
  /** Other search params the page needs to keep, such as the search query. */
  keep?: Record<string, string>;
}

function href(
  pathname: string,
  refine: string | undefined,
  sort: Sort,
  keep: Record<string, string>,
): Route {
  const search = new URLSearchParams(keep);
  if (refine) search.set("refine", refine);
  if (sort !== "featured") search.set("sort", sort);
  const query = search.toString();
  return `${pathname}${query ? `?${query}` : ""}` as Route;
}

// The links that narrow a collection, how many pieces are shown, and the order they're in.
// The refinements are plain links, so every filtered view can be reached without script.
export function CatalogToolbar({
  pathname,
  title,
  count,
  sort,
  refine,
  refinements = [],
  keep = {},
}: CatalogToolbarProps) {
  return (
    <div className="catalog-toolbar">
      {refinements.length > 1 && (
        <nav className="catalog-toolbar__refine" aria-label={`Narrow ${title}`}>
          <Button
            asChild
            size="sm"
            intent={refine ? "secondary" : "primary"}
            className="catalog-toolbar__chip"
          >
            <Link
              href={href(pathname, undefined, sort, keep)}
              aria-current={refine ? undefined : "page"}
              scroll={false}
            >
              All
            </Link>
          </Button>
          {refinements.map((entry) => (
            <Button
              asChild
              key={entry.value}
              size="sm"
              intent={refine === entry.value ? "primary" : "secondary"}
              className="catalog-toolbar__chip"
            >
              <Link
                href={href(pathname, entry.value, sort, keep)}
                aria-current={refine === entry.value ? "page" : undefined}
                scroll={false}
              >
                {refinementLabel(entry.value)}
                <span className="catalog-toolbar__count">{entry.count}</span>
              </Link>
            </Button>
          ))}
        </nav>
      )}
      <div className="catalog-toolbar__meta">
        <p className="catalog-toolbar__total" aria-live="polite">
          {count} {count === 1 ? "piece" : "pieces"}
        </p>
        <SortSelect value={sort} pathname={pathname} params={refine ? { ...keep, refine } : keep} />
      </div>
    </div>
  );
}

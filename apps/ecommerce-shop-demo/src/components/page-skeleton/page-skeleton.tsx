import { Skeleton, VisuallyHidden } from "@nuvui/react";
import "./page-skeleton.scss";

// What a page shows for the moment its URL is being read and its data fetched. The shapes
// follow the page they stand in for, so nothing jumps when it arrives.

function Status({ label }: { label: string }) {
  return (
    <VisuallyHidden>
      <p role="status">{label}</p>
    </VisuallyHidden>
  );
}

function CardsSkeleton({ count }: { count: number }) {
  return (
    <div className="page-skeleton__grid">
      {Array.from({ length: count }, (_, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: placeholders with no identity of their own
        <div key={index} className="page-skeleton__card">
          <Skeleton className="page-skeleton__photo" />
          <Skeleton shape="text" className="page-skeleton__line" />
          <Skeleton shape="text" className="page-skeleton__line page-skeleton__line--short" />
        </div>
      ))}
    </div>
  );
}

/** A collection or search page: heading, toolbar and a grid of cards. */
export function CatalogSkeleton({ label = "Loading the collection" }: { label?: string }) {
  return (
    <div className="page-skeleton" aria-busy="true">
      <Status label={label} />
      <Skeleton shape="text" className="page-skeleton__line page-skeleton__line--short" />
      <Skeleton className="page-skeleton__title" />
      <Skeleton shape="text" className="page-skeleton__line page-skeleton__line--lede" />
      <Skeleton className="page-skeleton__bar" />
      <CardsSkeleton count={8} />
    </div>
  );
}

/** A product page: the gallery beside the details. */
export function ProductSkeleton() {
  return (
    <div className="page-skeleton" aria-busy="true">
      <Status label="Loading the product" />
      <Skeleton shape="text" className="page-skeleton__line page-skeleton__line--short" />
      <div className="page-skeleton__product">
        <Skeleton className="page-skeleton__gallery" />
        <div className="page-skeleton__details">
          <Skeleton shape="text" className="page-skeleton__line page-skeleton__line--short" />
          <Skeleton className="page-skeleton__title" />
          <Skeleton shape="text" className="page-skeleton__line page-skeleton__line--short" />
          <Skeleton shape="text" className="page-skeleton__line" />
          <Skeleton shape="text" className="page-skeleton__line" />
          <Skeleton className="page-skeleton__bar" />
          <Skeleton className="page-skeleton__button" />
        </div>
      </div>
    </div>
  );
}

/** A page of text, such as a policy. */
export function TextSkeleton() {
  return (
    <div className="page-skeleton page-skeleton--narrow" aria-busy="true">
      <Status label="Loading the page" />
      <Skeleton shape="text" className="page-skeleton__line page-skeleton__line--short" />
      <Skeleton className="page-skeleton__title" />
      {Array.from({ length: 6 }, (_, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: placeholders with no identity of their own
        <Skeleton key={index} shape="text" className="page-skeleton__line" />
      ))}
    </div>
  );
}

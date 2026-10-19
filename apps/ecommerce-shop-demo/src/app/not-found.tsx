import { Button } from "@nuvui/react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="page page--message">
      <p className="page__eyebrow">Error 404</p>
      <h1 className="page__title">This page has moved on</h1>
      <p className="page__lede">
        The piece or page you were looking for isn't here any more. It may have sold through, or the
        link may be out of date.
      </p>
      <div className="page__actions">
        <Button asChild>
          <Link href="/collections/new-arrivals">Shop new arrivals</Link>
        </Button>
        <Button asChild intent="secondary">
          <Link href="/">Back to the house</Link>
        </Button>
      </div>
    </div>
  );
}

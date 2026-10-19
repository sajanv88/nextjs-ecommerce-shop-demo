"use client";

import { Button } from "@nuvui/react";
import Link from "next/link";

// The error itself is logged on the server by onRequestError in instrumentation.ts. The user
// sees the digest, which support can match to that log line, and never the message.
export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="page page--message">
      <p className="page__eyebrow">Something went wrong</p>
      <h1 className="page__title">We couldn't show this page</h1>
      <p className="page__lede">Please try again. If it keeps happening, write to us.</p>
      {error.digest && <p className="page__meta">Reference: {error.digest}</p>}
      <div className="page__actions">
        <Button onClick={reset}>Try again</Button>
        <Button asChild intent="secondary">
          <Link href="/">Back to the house</Link>
        </Button>
      </div>
    </div>
  );
}

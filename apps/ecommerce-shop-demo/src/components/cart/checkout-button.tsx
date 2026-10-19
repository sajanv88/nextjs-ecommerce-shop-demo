"use client";

import { ArrowRightIcon, LockIcon } from "@nuvui/icons";
import { Button, toast } from "@nuvui/react";

// The demo has no payment provider. Point this at Shopify's checkout URL, a Stripe Checkout
// session created in a Server Action, or your own flow.
export function CheckoutButton({ className }: { className?: string }) {
  return (
    <Button
      className={className}
      size="lg"
      onClick={() =>
        toast("Checkout isn't connected yet", {
          intent: "info",
          description:
            "This is a demo store. Connect Shopify, Stripe or your own checkout to take payments.",
        })
      }
    >
      <LockIcon size={16} />
      Secure checkout
      <ArrowRightIcon size={16} />
    </Button>
  );
}

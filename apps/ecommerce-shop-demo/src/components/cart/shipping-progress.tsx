"use client";

import { Progress } from "@nuvui/react";
import { useId } from "react";
import { Money } from "@/components/currency/money";
import { site } from "@/lib/site";
import "./shipping-progress.scss";

// How far the bag is from complimentary shipping.
export function ShippingProgress({ subtotal }: { subtotal: number }) {
  const labelId = useId();
  const remaining = Math.max(0, site.freeShippingThreshold - subtotal);
  const value = Math.min(100, (subtotal / site.freeShippingThreshold) * 100);

  return (
    <div className="shipping-progress">
      <p className="shipping-progress__text" id={labelId}>
        {remaining === 0 ? (
          "Your order ships complimentary."
        ) : (
          <>
            <Money usd={remaining} /> away from complimentary shipping.
          </>
        )}
      </p>
      <Progress
        className="shipping-progress__bar"
        size="sm"
        value={value}
        aria-labelledby={labelId}
      />
    </div>
  );
}

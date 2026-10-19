"use client";

import { AnimatedNumber } from "@nuvui/react";
import { convert, fractionDigits } from "@/lib/currency";
import { site } from "@/lib/site";
import { useCurrency } from "./currency-provider";

interface MoneyProps {
  /** The amount in US dollars, the catalog's currency. */
  usd: number;
  /** Leave out the cents, for round figures in running text such as a threshold. */
  whole?: boolean;
  className?: string;
}

// An amount in the visitor's display currency. When the currency or the amount changes, the
// digits that differ roll to the new value; the server's HTML already has the right figure.
export function Money({ usd, whole = false, className }: MoneyProps) {
  const { currency } = useCurrency();
  const digits = whole ? 0 : fractionDigits(currency);
  const amount = convert(usd, currency);

  return (
    <AnimatedNumber
      {...(className ? { className } : {})}
      value={whole ? Math.round(amount) : amount}
      currency={currency}
      locale={site.locale}
      minimumFractionDigits={digits}
      maximumFractionDigits={digits}
    />
  );
}

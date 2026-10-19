"use client";

import { createContext, type ReactNode, use, useMemo, useState } from "react";
import type { CurrencyCode } from "@/lib/currency";
import { saveCurrency } from "./actions";

interface CurrencyContextValue {
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
}

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

// The display currency every price on the page reads. It starts from the cookie the server
// read, so the first render already shows the visitor's currency, and a change moves every
// price at once (each is an AnimatedNumber) while the cookie is saved in the background.
export function CurrencyProvider({
  initialCurrency,
  children,
}: {
  initialCurrency: CurrencyCode;
  children: ReactNode;
}) {
  const [currency, setState] = useState(initialCurrency);
  const value = useMemo(
    () => ({
      currency,
      setCurrency: (code: CurrencyCode) => {
        setState(code);
        void saveCurrency(code);
      },
    }),
    [currency],
  );
  return <CurrencyContext value={value}>{children}</CurrencyContext>;
}

export function useCurrency(): CurrencyContextValue {
  const value = use(CurrencyContext);
  if (!value) throw new Error("useCurrency needs a CurrencyProvider above it");
  return value;
}

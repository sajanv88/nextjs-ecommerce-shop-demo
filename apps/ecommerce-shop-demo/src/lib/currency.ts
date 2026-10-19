import * as v from "valibot";

// Display currencies. The catalog is priced in US dollars, and orders are charged in them;
// the others are shown for reference, converted at fixed demo rates. Swap the rates for a
// feed, or for prices per market from your commerce platform.

export const CURRENCIES = [
  { code: "USD", label: "US dollar", rate: 1 },
  { code: "EUR", label: "Euro", rate: 0.92 },
  { code: "GBP", label: "British pound", rate: 0.79 },
  { code: "CAD", label: "Canadian dollar", rate: 1.37 },
  { code: "AUD", label: "Australian dollar", rate: 1.52 },
  { code: "JPY", label: "Japanese yen", rate: 150 },
] as const;

export type CurrencyCode = (typeof CURRENCIES)[number]["code"];

export const BASE_CURRENCY: CurrencyCode = "USD";

export const CURRENCY_COOKIE = "currency";

export const CurrencyCodeSchema = v.picklist(CURRENCIES.map((currency) => currency.code));

export function parseCurrency(value: unknown): CurrencyCode {
  const parsed = v.safeParse(CurrencyCodeSchema, value);
  return parsed.success ? parsed.output : BASE_CURRENCY;
}

/** Yen has no minor unit; everything else is shown to the cent. */
export function fractionDigits(code: CurrencyCode): number {
  return code === "JPY" ? 0 : 2;
}

/** A price in US dollars, in the given currency, rounded the way that currency is written. */
export function convert(usd: number, code: CurrencyCode): number {
  const rate = CURRENCIES.find((currency) => currency.code === code)?.rate ?? 1;
  const factor = 10 ** fractionDigits(code);
  return Math.round(usd * rate * factor) / factor;
}

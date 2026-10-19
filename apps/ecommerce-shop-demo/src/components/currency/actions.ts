"use server";

import { cookies } from "next/headers";
import * as v from "valibot";
import { CURRENCY_COOKIE, CurrencyCodeSchema } from "@/lib/currency";

// Remembers the visitor's display currency, so the server renders their prices on the next
// visit. A preference, not a credential: nothing to authorise, only the value to validate.
export async function saveCurrency(code: unknown): Promise<void> {
  const parsed = v.safeParse(CurrencyCodeSchema, code);
  if (!parsed.success) return;
  (await cookies()).set(CURRENCY_COOKIE, parsed.output, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
}

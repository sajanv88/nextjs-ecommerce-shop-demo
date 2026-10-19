"use client";

import { useSyncExternalStore } from "react";
import * as v from "valibot";
import { SIZES } from "@/lib/catalog/types";

// The bag lives in the browser. Each line keeps what it needs to be drawn (a snapshot of the
// product when it was added), so the drawer never has to fetch. A commerce backend would
// replace this module with a cart id in a cookie and Server Actions.

export const maxQuantity = 10;

const CartLine = v.object({
  handle: v.pipe(v.string(), v.minLength(1), v.maxLength(120)),
  title: v.pipe(v.string(), v.maxLength(200)),
  color: v.pipe(v.string(), v.maxLength(40)),
  size: v.picklist(SIZES),
  price: v.pipe(v.number(), v.minValue(0)),
  // Only our own product photographs: a stored value never points next/image elsewhere.
  image: v.object({
    src: v.pipe(v.string(), v.regex(/^\/products\/[a-z0-9-]+\/[a-z-]+\.webp$/)),
    alt: v.pipe(v.string(), v.maxLength(300)),
  }),
  quantity: v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(maxQuantity)),
});

const CartLines = v.array(CartLine);

export type CartLine = v.InferOutput<typeof CartLine>;

const STORAGE_KEY = "maison-nuvi:bag:v1";
const EMPTY: readonly CartLine[] = Object.freeze([]);

let lines: readonly CartLine[] = EMPTY;
let loaded = false;
const listeners = new Set<() => void>();

function lineId(line: Pick<CartLine, "handle" | "size">) {
  return `${line.handle}:${line.size}`;
}

function read(): readonly CartLine[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = v.safeParse(CartLines, JSON.parse(raw));
    return parsed.success ? parsed.output : EMPTY;
  } catch {
    // Storage can be blocked, full or hold something else; start with an empty bag.
    return EMPTY;
  }
}

function write(next: readonly CartLine[]) {
  loaded = true;
  lines = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Private windows can refuse writes; the bag still works for this visit.
  }
  for (const listener of listeners) listener();
}

function load() {
  if (!loaded) {
    loaded = true;
    lines = read();
  }
}

function subscribe(listener: () => void) {
  load();
  listeners.add(listener);
  // Another tab changed the bag.
  const onStorage = (event: StorageEvent) => {
    if (event.key !== STORAGE_KEY) return;
    lines = read();
    listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

const getSnapshot = () => lines;
// The server, and the first render in the browser, see an empty bag. React then switches to
// the stored one without a hydration mismatch.
const getServerSnapshot = () => EMPTY;

export function useCartLines(): readonly CartLine[] {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export const cart = {
  add(line: CartLine) {
    load();
    const id = lineId(line);
    const existing = lines.find((entry) => lineId(entry) === id);
    write(
      existing
        ? lines.map((entry) =>
            lineId(entry) === id
              ? { ...entry, quantity: Math.min(maxQuantity, entry.quantity + line.quantity) }
              : entry,
          )
        : [...lines, line],
    );
  },
  setQuantity(line: Pick<CartLine, "handle" | "size">, quantity: number) {
    const id = lineId(line);
    const clamped = Math.max(1, Math.min(maxQuantity, Math.round(quantity)));
    write(lines.map((entry) => (lineId(entry) === id ? { ...entry, quantity: clamped } : entry)));
  },
  remove(line: Pick<CartLine, "handle" | "size">) {
    const id = lineId(line);
    write(lines.filter((entry) => lineId(entry) !== id));
  },
  clear() {
    write(EMPTY);
  },
};

export function cartTotals(current: readonly CartLine[]) {
  return current.reduce(
    (totals, line) => ({
      count: totals.count + line.quantity,
      subtotal: totals.subtotal + line.price * line.quantity,
    }),
    { count: 0, subtotal: 0 },
  );
}

export { lineId };

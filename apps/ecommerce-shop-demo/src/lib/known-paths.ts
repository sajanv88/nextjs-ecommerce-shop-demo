import { collections } from "./catalog/collections";
import { products } from "./catalog/products";
import { policies } from "./policies";

// The handles each dynamic route can show. src/proxy.ts reads this to answer an unknown one
// with a 404 status: a streamed page can only say "not found" in its body, after a 200.
const known: Record<string, ReadonlySet<string>> = {
  products: new Set(products.map((product) => product.handle)),
  collections: new Set(collections.map((collection) => collection.handle)),
  policies: new Set(policies.map((policy) => policy.slug)),
};

/** False only for /products/x, /collections/x and /policies/x where x doesn't exist. */
export function isKnownPath(pathname: string): boolean {
  const match = /^\/(products|collections|policies)\/([^/]+)\/?$/.exec(pathname);
  if (!match) return true;
  const [, route = "", handle = ""] = match;
  return known[route]?.has(decodeURIComponent(handle)) ?? true;
}

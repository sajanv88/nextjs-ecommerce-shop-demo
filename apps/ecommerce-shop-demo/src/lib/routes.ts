import type { Route } from "next";

/**
 * A path in this store, for <Link> and the router. Typed routes check a literal written in
 * JSX, but can't follow a path held in data (a menu, a breadcrumb) or built at runtime
 * (`/products/${handle}`), so those pass through here, in one place.
 */
export function href(path: `/${string}`): Route {
  return path as Route;
}

/** A path in this store, as data. */
export type Path = `/${string}`;

import "server-only";
import { cacheLife, cacheTag } from "next/cache";
import { BESTSELLERS, collections, NEW_ARRIVALS } from "./collections";
import { products } from "./products";
import {
  CATEGORIES,
  type Category,
  type Collection,
  type CollectionRule,
  GENDERS,
  type Gender,
  type Product,
  type Sort,
} from "./types";

// The only readers of the catalog. Each is cached across requests and tagged, so swapping
// the static data for a commerce backend means changing these bodies and nothing else.

const rank = new Map<string, number>(
  [...BESTSELLERS, ...NEW_ARRIVALS].map((handle, index) => [handle, index]),
);

function matches(rule: CollectionRule, product: Product): boolean {
  switch (rule.kind) {
    case "all":
      return true;
    case "gender":
      return product.gender === rule.gender;
    case "category":
      return product.category === rule.category;
    case "sale":
      return product.compareAtPrice !== undefined;
    case "handles":
      return rule.handles.includes(product.handle);
  }
}

function sortProducts(list: readonly Product[], sort: Sort, rule?: CollectionRule): Product[] {
  const sorted = [...list];
  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);
    case "name":
      return sorted.sort((a, b) => a.title.localeCompare(b.title, "en"));
    case "featured": {
      // A hand-picked collection keeps its own order.
      if (rule?.kind === "handles") {
        return sorted.sort(
          (a, b) => rule.handles.indexOf(a.handle) - rule.handles.indexOf(b.handle),
        );
      }
      const at = (product: Product) => rank.get(product.handle) ?? Number.MAX_SAFE_INTEGER;
      return sorted.sort((a, b) => at(a) - at(b));
    }
  }
}

export async function getProducts(): Promise<readonly Product[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("products");
  return products;
}

export async function getProduct(handle: string): Promise<Product | undefined> {
  "use cache";
  cacheLife("hours");
  cacheTag("products", `product:${handle}`);
  return products.find((product) => product.handle === handle);
}

export async function getProductsByHandles(handles: readonly string[]): Promise<Product[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("products");
  return handles.flatMap((handle) => products.filter((product) => product.handle === handle));
}

export async function getCollections(): Promise<readonly Collection[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("collections");
  return collections;
}

export async function getCollection(handle: string): Promise<Collection | undefined> {
  "use cache";
  cacheLife("hours");
  cacheTag("collections", `collection:${handle}`);
  return collections.find((collection) => collection.handle === handle);
}

export interface CollectionQuery {
  readonly sort: Sort;
  /** Narrows a collection further, by category or by who it's for. */
  readonly refine?: Category | Gender | undefined;
}

export async function getCollectionProducts(
  handle: string,
  { sort, refine }: CollectionQuery,
): Promise<Product[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("products", `collection:${handle}`);
  const collection = collections.find((entry) => entry.handle === handle);
  if (!collection) return [];
  const inCollection = products.filter((product) => matches(collection.rule, product));
  const refined = refine
    ? inCollection.filter((product) => product.category === refine || product.gender === refine)
    : inCollection;
  return sortProducts(refined, sort, collection.rule);
}

/** The values a collection can be narrowed by, with how many products each leaves. */
export async function getCollectionRefinements(
  handle: string,
): Promise<{ value: Category | Gender; count: number }[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("products", `collection:${handle}`);
  const collection = collections.find((entry) => entry.handle === handle);
  if (!collection) return [];
  const inCollection = products.filter((product) => matches(collection.rule, product));
  // A collection of one kind of garment is narrowed by who it's for, and the reverse.
  const key = collection.rule.kind === "category" ? "gender" : "category";
  const counts = new Map<Category | Gender, number>();
  for (const product of inCollection) {
    counts.set(product[key], (counts.get(product[key]) ?? 0) + 1);
  }
  const order: readonly string[] = key === "gender" ? GENDERS : CATEGORIES;
  return [...counts]
    .map(([value, count]) => ({ value, count }))
    .sort((a, b) => order.indexOf(a.value) - order.indexOf(b.value));
}

export async function searchProducts(query: string, sort: Sort): Promise<Product[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("products");
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];
  const found = products.filter((product) => {
    const text = [
      product.title,
      product.color,
      product.category.replace("-", " "),
      product.gender,
      product.summary,
    ]
      .join(" ")
      .toLowerCase();
    return words.every((word) => text.includes(word));
  });
  return sortProducts(found, sort);
}

export async function getRelatedProducts(handle: string, limit = 4): Promise<Product[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("products", `product:${handle}`);
  const product = products.find((entry) => entry.handle === handle);
  if (!product) return [];
  const score = (other: Product) =>
    (other.category === product.category ? 2 : 0) + (other.gender === product.gender ? 1 : 0);
  return products
    .filter((other) => other.handle !== handle)
    .map((other) => ({ other, score: score(other) }))
    .sort((a, b) => b.score - a.score || a.other.title.localeCompare(b.other.title, "en"))
    .slice(0, limit)
    .map(({ other }) => other);
}

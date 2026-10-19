import { CATEGORIES, type Category, GENDERS, type Gender, type Sort } from "./types";

// Words for the catalog's values, shared by the server and the client.

export const CATEGORY_LABELS = {
  hoodies: "Hoodies",
  jackets: "Outerwear",
  sweatshirts: "Sweatshirts",
  tees: "Tees",
  "long-tees": "Long sleeves",
} as const satisfies Record<Category, string>;

export const GENDER_LABELS = {
  women: "Women",
  men: "Men",
  unisex: "Unisex",
  youth: "Youth",
} as const satisfies Record<Gender, string>;

export const SORT_LABELS = {
  featured: "Featured",
  "price-asc": "Price, low to high",
  "price-desc": "Price, high to low",
  rating: "Highest rated",
  name: "Name, A to Z",
} as const satisfies Record<Sort, string>;

export function isCategory(value: string): value is Category {
  return (CATEGORIES as readonly string[]).includes(value);
}

export function isGender(value: string): value is Gender {
  return (GENDERS as readonly string[]).includes(value);
}

export function refinementLabel(value: Category | Gender): string {
  return isCategory(value) ? CATEGORY_LABELS[value] : GENDER_LABELS[value];
}

export const GENDERS = ["women", "men", "unisex", "youth"] as const;
export type Gender = (typeof GENDERS)[number];

export const CATEGORIES = ["hoodies", "jackets", "sweatshirts", "tees", "long-tees"] as const;
export type Category = (typeof CATEGORIES)[number];

export const SIZES = ["XS", "S", "M", "L", "XL"] as const;
export type Size = (typeof SIZES)[number];

export const SORTS = ["featured", "price-asc", "price-desc", "rating", "name"] as const;
export type Sort = (typeof SORTS)[number];

export interface ProductImage {
  readonly src: string;
  readonly alt: string;
}

export interface Product {
  readonly handle: string;
  readonly title: string;
  /** One sentence, for cards, meta descriptions and structured data. */
  readonly summary: string;
  /** The longer copy on the product page, a paragraph per entry. */
  readonly description: readonly string[];
  readonly price: number;
  readonly compareAtPrice?: number;
  readonly color: string;
  readonly sizes: readonly Size[];
  readonly gender: Gender;
  readonly category: Category;
  readonly rating: number;
  readonly reviewCount: number;
  /** Studio shot first, then waist-up, full length and side profile. All 1024 × 1024. */
  readonly images: readonly ProductImage[];
}

export interface Collection {
  readonly handle: string;
  readonly title: string;
  /** Shown under the heading and used as the meta description. */
  readonly description: string;
  /** A short line for tiles and menus. */
  readonly tagline: string;
  readonly image: ProductImage;
  readonly rule: CollectionRule;
}

/** Which products a collection holds. Plain data, so a collection can cross into a cache. */
export type CollectionRule =
  | { readonly kind: "all" }
  | { readonly kind: "gender"; readonly gender: Gender }
  | { readonly kind: "category"; readonly category: Category }
  | { readonly kind: "sale" }
  | { readonly kind: "handles"; readonly handles: readonly string[] };

export const PRODUCT_IMAGE_SIZE = 1024;

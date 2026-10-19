// The store's identity and the words used across it. Everything here is safe to send to the
// browser; the site's origin is a runtime value and lives in src/env.ts.

export const site = {
  name: "DemoShop Nuvi",
  tagline: "Considered essentials for movement and the city",
  description:
    "Maison Nuvi makes refined activewear in limited runs: technical outerwear, brushed fleece and fine jersey, cut for movement and finished for the city.",
  locale: "en-US",
  currency: "USD",
  email: "care@maisonnuvi.example",
  /** Orders at or above this subtotal ship free. */
  freeShippingThreshold: 150,
  returnDays: 30,
  /** For the browser's UI around the page. Mirrors --color-background in light and dark. */
  themeColor: { light: "#faf8f4", dark: "#151311" },
} as const;

export const mainNav = [
  { label: "New", href: "/collections/new-arrivals" },
  { label: "Women", href: "/collections/women" },
  { label: "Men", href: "/collections/men" },
  { label: "Outerwear", href: "/collections/jackets" },
  { label: "Sale", href: "/collections/sale" },
] as const;

export const footerNav = [
  {
    title: "Shop",
    links: [
      { label: "New arrivals", href: "/collections/new-arrivals" },
      { label: "Women", href: "/collections/women" },
      { label: "Men", href: "/collections/men" },
      { label: "Youth", href: "/collections/youth" },
      { label: "All collections", href: "/collections" },
    ],
  },
  {
    title: "Client care",
    links: [
      { label: "Shipping & returns", href: "/policies/shipping-returns" },
      { label: "Your bag", href: "/cart" },
      { label: "Search", href: "/search" },
    ],
  },
  {
    title: "The house",
    links: [
      { label: "Our story", href: "/about" },
      { label: "Privacy", href: "/policies/privacy" },
      { label: "Terms", href: "/policies/terms" },
    ],
  },
] as const;

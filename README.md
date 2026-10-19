# DemoShop Nuvi: a luxury storefront for Next.js

An editorial, responsive e-commerce template built with **Next.js 16** and **[nuvui](https://nuvui.nuvraxis.com)**. Every interface element (navigation, mega menu, drawers, carousels, size picker, quantity steppers, accordions, toasts, empty states) is a nuvui component, themed with tokens into a warm ivory-and-ink palette with a serif display face and full dark mode.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnuvraxis%2Fecommerce-shop-demo&root-directory=apps%2Fecommerce-shop-demo&env=SITE_URL&envDescription=The%20public%20origin%20of%20the%20store%2C%20for%20canonical%20URLs%20and%20the%20sitemap&project-name=maison-nuvi&repository-name=maison-nuvi)

## What's inside

- **Pages**: home, collections index, collection with refinements and sorting, product with a photo gallery and size selection, search, bag, our story, and policies with a FAQ.
- **Bag**: a drawer and a full page with quantity steppers, a free-shipping progress bar and order summary. The bag lives in the browser (validated with valibot) and syncs across tabs.
- **SEO**:
  - Per-page titles, descriptions and canonical URLs, with Open Graph and Twitter cards.
  - A generated share image and an Apple touch icon.
  - `sitemap.xml` with image entries, and `robots.txt`.
  - JSON-LD structured data: `Organization`, `WebSite` with a search action, `ProductGroup` with an offer per size and a return policy, `BreadcrumbList`, `ItemList`, `CollectionPage` and `FAQPage`.
  - Real 404 status codes for unknown products, collections and policies.
  - Accordion content that stays in the HTML for crawlers.
- **Performance**: product photos are served through `next/image` as AVIF or WebP, with the hero and above-the-fold cards preloaded. Fonts come from `next/font`, and the catalog is read through `"use cache"`.
- **Security**: a nonce-based Content Security Policy, strict security headers, server-only modules, and validated search params and Server Action input.
- **Accessibility**: skip link, named landmarks, keyboard-operable menus and drawers, visible focus rings, reduced-motion support, and 44px touch targets.

## Stack

| | |
| --- | --- |
| Framework | Next.js 16 (App Router, Cache Components, typed routes, Turbopack) |
| UI | `@nuvui/react` and `@nuvui/icons` |
| Styles | SCSS with BEM, nuvui design tokens, stylelint |
| Language | TypeScript 7, strict |
| Lint and format | Biome |
| Monorepo | pnpm workspaces and Turborepo |

## Getting started

```sh
pnpm install
pnpm dev          # http://localhost:3000
```

Before you ship:

```sh
pnpm typecheck && pnpm lint && pnpm build
```

## Configuration

| Variable | Required | What it's for |
| --- | --- | --- |
| `SITE_URL` | In production | The store's public origin, such as `https://shop.example.com`. Canonical URLs, the sitemap, `robots.txt` and structured data are built from it. On Vercel it falls back to the production domain. |

Copy `apps/ecommerce-shop-demo/.env.example` to `.env.local` to set it locally.

## Deploying to Vercel

Import the repository and set the **Root Directory** to `apps/ecommerce-shop-demo`. The deploy button above does this for you. Vercel installs from the workspace root with pnpm.

The repository also ships a Dockerfile, a Helm chart and GitHub Actions for self-hosting. See `CLAUDE.md`.

## Making it yours

- **Brand, copy and navigation**: `src/lib/site.ts`.
- **Colors, type and radii**: `src/styles/base/_theme.scss`. These are nuvui tokens, with light and dark values side by side.
- **Products and collections**: `src/lib/catalog/products.ts` and `collections.ts`. Every read goes through `src/lib/catalog/index.ts`, so connecting Shopify, a headless CMS or your own API means changing those functions only.
- **Checkout**: `src/components/cart/checkout-button.tsx` is where a Shopify checkout URL or a Stripe Checkout session would go.
- **Policies**: `src/lib/policies.ts`. They are template copy, so have them reviewed before taking real orders.

The star ratings and testimonials are sample content. They are deliberately left out of the structured data.

## Product photography

The demo catalog's names, descriptions and photographs come from Vercel's public demo store at [template.vercel.shop](https://template.vercel.shop). Confirm you have the rights to use them before you publish, or replace them with your own in `public/products/<handle>/`.

## Project layout

```
apps/ecommerce-shop-demo/
  src/app/                 routes, metadata, sitemap, robots, share image
  src/components/          one folder per block: component + BEM stylesheet
  src/lib/catalog/         data, types, cached readers, search-param parsing
  src/lib/seo.ts           JSON-LD builders
  src/styles/              tokens (theme), element defaults, page layout
  public/products/         four photographs per product
```

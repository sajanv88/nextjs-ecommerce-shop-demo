# DemoShop Nuvi

A quiet, editorial storefront for Next.js. Think warm ivory pages, a serif headline face, big photography and a bag that slides in from the side. It's built with **Next.js 16** and **[nuvui](https://nuvui.nuvraxis.com)**, and every piece of interface you see, from the mega menu to the size picker, is a nuvui component themed with design tokens. Dark mode comes along for free.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsajanv88%2Fnextjs-ecommerce-shop-demo&root-directory=apps%2Fecommerce-shop-demo&project-name=demoshop-nuvi&repository-name=demoshop-nuvi)
[![License: MIT](https://img.shields.io/badge/license-MIT-b89a5e.svg)](LICENSE)

> ✨ **Built with [nuvui](https://nuvui.nuvraxis.com).** Every button, menu, drawer and carousel in this store comes from nuvui, an open-source React component library with polished, accessible components that you theme with design tokens. If you like how this template looks and feels, you'll love building with it. **[Explore nuvui →](https://nuvui.nuvraxis.com)**

## What you get

- **A full shop.** Home page, collections with filters and sorting, product pages with a photo gallery and sizes, search, a bag (as a drawer and as a page), an "our story" page and policy pages with an FAQ.
- **A bag that just works.** It lives in the browser, stays in sync across tabs, and shows how close the shopper is to free shipping.
- **Prices in six currencies.** Shoppers can switch between USD, EUR, GBP, CAD, AUD and JPY from the header, and every price on the page rolls over to the new one. The choice is remembered on the next visit.
- **SEO that's done properly.** Titles, descriptions and canonical URLs on every page, share images, a sitemap with images, `robots.txt`, real 404s, and structured data for products, collections, breadcrumbs and the FAQ.
- **Fast by default.** Photos are served as AVIF or WebP, the first screen is preloaded, and pages stream in behind skeletons, so clicking around feels instant.
- **Secure and accessible.** A strict Content Security Policy, validated input everywhere, keyboard-friendly menus and drawers, visible focus, and reduced-motion support.

## Built on nuvui

This template is a showcase for **[nuvui](https://nuvui.nuvraxis.com)**, and it's the reason the store came together so quickly. The whole storefront, from the mega menu, sheets, carousels and accordions to the size picker, toasts and animated prices, uses nuvui components out of the box. The luxury look is a single theme file of design tokens, so there's no fighting component styles.

- **Polished components** for real products: navigation, forms, overlays, data display and more
- **Accessible by default**, with keyboard support, focus management and ARIA wired up for you
- **Themeable with tokens**, so light and dark modes and your brand colors live in one place
- **Made for Next.js**, working nicely with Server Components and a strict Content Security Policy

👉 **Browse the components, docs and ready-made blocks at [nuvui.nuvraxis.com](https://nuvui.nuvraxis.com).**

## Run it on your machine

You'll need **Node.js 24 or newer** (the repo pins 26 in `.node-version`) and **pnpm**. If you don't have pnpm yet, `corepack enable` sets up the right version for you.

```sh
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

Before you push anything, run the same checks CI runs:

```sh
pnpm typecheck && pnpm lint && pnpm build
```

## Deploy it to Vercel

### The quick way

Click **Deploy with Vercel** above. Vercel copies the repo into your GitHub account, points the project at the right folder and deploys it. You don't need to fill anything in. A couple of minutes later you have a live store.

### Importing it yourself

If you've already forked or cloned the repo:

1. In Vercel, choose **Add New → Project** and import your repository.
2. Set **Root Directory** to `apps/ecommerce-shop-demo`. This is the one setting that matters, because the store lives in a monorepo.
3. Leave the framework, build command and install command on their defaults. Vercel spots Next.js, pnpm and Turborepo by itself.
4. Keep **Node.js Version** on **24.x** (the default) under **Settings → Build and Deployment**.
5. Click **Deploy**.

### When you add your own domain

Out of the box, the store uses your Vercel production address (`your-project.vercel.app`) for canonical URLs, the sitemap and structured data. Once you connect a custom domain:

1. Go to **Settings → Environment Variables** and add `SITE_URL` with your full address, such as `https://shop.example.com`, for the Production environment.
2. **Redeploy.** Many pages are prerendered at build time, so a new value only shows up after a fresh build.

Preview deployments keep pointing their canonical URLs at production, which is what you want: search engines won't index your previews as separate sites.

### Good to know

- **The Vercel Toolbar on previews.** The store sends a strict, nonce-based Content Security Policy, and the toolbar's script doesn't carry the nonce, so the browser blocks it on preview deployments and logs a CSP error. If you want a clean console on previews, turn the toolbar off under **Settings → General → Vercel Toolbar**. Production isn't affected.
- **Image optimization.** Product photos go through Vercel's image optimization, which counts toward your plan's usage. A demo store sits comfortably inside the free allowance, but keep an eye on it if you load in a large catalog.

## Settings

| Variable | Do you need it? | What it does |
| --- | --- | --- |
| `SITE_URL` | Once you have a custom domain | Your store's public address. Canonical URLs, the sitemap, `robots.txt` and structured data are built from it. On Vercel it falls back to your production `.vercel.app` address. |
| `OTEL_SERVICE_NAME` | No | The service name on OpenTelemetry traces. Defaults to `ecommerce-shop-demo`. |

For local development, copy `apps/ecommerce-shop-demo/.env.example` to `apps/ecommerce-shop-demo/.env.local` and edit it there.

## Make it yours

- **Name, tagline, email and navigation:** `src/lib/site.ts`.
- **Colors, fonts and corner radii:** `src/styles/base/_theme.scss`. These are nuvui tokens, with the light and dark values side by side, so a rebrand is mostly a matter of changing a handful of lines.
- **Products and collections:** `src/lib/catalog/products.ts` and `collections.ts`. Everything reads through `src/lib/catalog/index.ts`, so hooking up Shopify, a headless CMS or your own API means rewriting those few functions and nothing else.
- **Currencies:** `src/lib/currency.ts`. The demo converts at fixed rates for display only and always charges in USD. For real multi-currency pricing, take the rates from your commerce platform.
- **Checkout:** `src/components/cart/checkout-button.tsx` is where a Shopify checkout link or a Stripe Checkout session goes.
- **Policies:** `src/lib/policies.ts`. This is template copy, so have it reviewed before you take real orders.

The star ratings and testimonials are sample content. They're deliberately kept out of the structured data, so search engines never see made-up reviews.

## About the photos

The demo catalog's product names, descriptions and studio shots come from Vercel's public demo store at [template.vercel.shop](https://template.vercel.shop), and the on-model photos are cropped versions of its images. Make sure you have the rights to use them before you put the store in front of customers, or swap in your own: drop them into `public/products/<handle>/` and update the paths in `products.ts`.

## Hosting it yourself

The repo also ships a Dockerfile, a Helm chart and GitHub Actions workflows that build and publish a container image. [CLAUDE.md](CLAUDE.md) walks through the whole pipeline.

## Where things live

```
apps/ecommerce-shop-demo/
  src/app/              pages, metadata, sitemap, robots and share images
  src/components/       one folder per component, each with its own stylesheet
  src/lib/catalog/      the product data, its types and the cached readers
  src/lib/currency.ts   display currencies and their rates
  src/lib/seo.ts        structured data builders
  src/styles/           theme tokens, element defaults and page layout
  public/products/      three or four photos per product
packages/tsconfig/      the shared TypeScript config
charts/                 the Helm chart
```

## License

Free and open source under the [MIT License](LICENSE), © 2026 [sajanv88](https://github.com/sajanv88). Use it, fork it and build your own store with it, commercially or otherwise. A star on the repo or a link back to [nuvui](https://nuvui.nuvraxis.com) is always appreciated, but never required.

The license covers the code. The demo photos and product copy aren't part of it; see [About the photos](#about-the-photos).

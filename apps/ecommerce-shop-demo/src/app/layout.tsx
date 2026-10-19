import "@nuvui/react/styles.css";
import "@/styles/globals.scss";

import { Toaster } from "@nuvui/react";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { cookies, headers } from "next/headers";
import { AnnouncementBar } from "@/components/announcement-bar/announcement-bar";
import { CartProvider } from "@/components/cart/cart-provider";
import { CurrencyProvider } from "@/components/currency/currency-provider";
import { JsonLd } from "@/components/json-ld/json-ld";
import { NonceProvider } from "@/components/nonce-provider/nonce-provider";
import { SiteFooter } from "@/components/site-footer/site-footer";
import { SiteHeader } from "@/components/site-header/site-header";
import { siteUrl } from "@/env";
import { CURRENCY_COOKIE, parseCurrency } from "@/lib/currency";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

const sans = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--app-font-sans",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--app-font-serif",
});

export async function generateMetadata(): Promise<Metadata> {
  const title = `${site.name} | ${site.tagline}`;
  return {
    metadataBase: new URL(siteUrl()),
    title: { default: title, template: `%s | ${site.name}` },
    description: site.description,
    applicationName: site.name,
    keywords: [
      "luxury activewear",
      "technical outerwear",
      "premium hoodies",
      "fine jersey tees",
      "limited run clothing",
      site.name,
    ],
    authors: [{ name: site.name }],
    creator: site.name,
    publisher: site.name,
    category: "shopping",
    formatDetection: { telephone: false, address: false, email: false },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
      title,
      description: site.description,
    },
    twitter: { card: "summary_large_image", title, description: site.description },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: site.themeColor.light },
    { media: "(prefers-color-scheme: dark)", color: site.themeColor.dark },
  ],
  colorScheme: "light dark",
};

// Every response carries a fresh CSP nonce, so pages render per request instead of from a
// prerendered shell. Data caching with "use cache" still works.
export const instant = false;

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const nonce = (await headers()).get("x-nonce") ?? "";
  // The display currency the visitor chose last time, so the server renders their prices.
  const currency = parseCurrency((await cookies()).get(CURRENCY_COOKIE)?.value);

  return (
    <html
      lang="en"
      data-theme="light"
      data-density="comfortable"
      // Lets Next turn smooth scrolling off while it changes route.
      data-scroll-behavior="smooth"
      className={`${sans.variable} ${serif.variable}`}
    >
      <body>
        <NonceProvider nonce={nonce}>
          <CurrencyProvider initialCurrency={currency}>
            <CartProvider>
              <a className="skip-link" href="#main">
                Skip to content
              </a>
              <AnnouncementBar />
              <SiteHeader />
              <main id="main" className="site-main" tabIndex={-1}>
                {children}
              </main>
              <SiteFooter />
              <Toaster />
            </CartProvider>
          </CurrencyProvider>
        </NonceProvider>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
      </body>
    </html>
  );
}

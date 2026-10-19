import { SearchIcon } from "@nuvui/icons";
import {
  Button,
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarLink,
  NavbarMenu,
  NavbarNav,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  Separator,
} from "@nuvui/react";
import Image from "next/image";
import Link from "next/link";
import { CartSheet } from "@/components/cart/cart-sheet";
import { CurrencySwitcher } from "@/components/currency/currency-switcher";
import { href, type Path } from "@/lib/routes";
import { site } from "@/lib/site";
import "./site-header.scss";

interface NavLink {
  label: string;
  href: Path;
}

const womenLinks = [
  { label: "All women", href: "/collections/women" },
  { label: "Outerwear", href: "/collections/women?refine=jackets" },
  { label: "Hoodies", href: "/collections/women?refine=hoodies" },
  { label: "Sweatshirts", href: "/collections/women?refine=sweatshirts" },
  { label: "Tees", href: "/collections/women?refine=tees" },
  { label: "Long sleeves", href: "/collections/women?refine=long-tees" },
] as const satisfies readonly NavLink[];

const menLinks = [
  { label: "All men", href: "/collections/men" },
  { label: "Outerwear", href: "/collections/men?refine=jackets" },
  { label: "Hoodies", href: "/collections/men?refine=hoodies" },
  { label: "Tees", href: "/collections/men?refine=tees" },
  { label: "Long sleeves", href: "/collections/men?refine=long-tees" },
] as const satisfies readonly NavLink[];

const collectionLinks = [
  { label: "Bestsellers", href: "/collections/bestsellers" },
  { label: "Outerwear", href: "/collections/jackets" },
  { label: "Hoodies", href: "/collections/hoodies" },
  { label: "Sweatshirts", href: "/collections/sweatshirts" },
  { label: "Unisex", href: "/collections/unisex" },
  { label: "Youth", href: "/collections/youth" },
  { label: "All collections", href: "/collections" },
] as const satisfies readonly NavLink[];

const mobileLinks = [
  { label: "New arrivals", href: "/collections/new-arrivals" },
  { label: "Women", href: "/collections/women" },
  { label: "Men", href: "/collections/men" },
  { label: "Unisex", href: "/collections/unisex" },
  { label: "Youth", href: "/collections/youth" },
  { label: "Outerwear", href: "/collections/jackets" },
  { label: "Bestsellers", href: "/collections/bestsellers" },
  { label: "Archive sale", href: "/collections/sale" },
  { label: "All collections", href: "/collections" },
] as const satisfies readonly NavLink[];

const houseLinks = [
  { label: "Our story", href: "/about" },
  { label: "Shipping & returns", href: "/policies/shipping-returns" },
  { label: "Search", href: "/search" },
] as const satisfies readonly NavLink[];

interface PanelProps {
  title: string;
  links: readonly NavLink[];
  feature: { href: Path; src: string; alt: string; label: string };
}

function Panel({ title, links, feature }: PanelProps) {
  return (
    <div className="site-header__panel">
      <div className="site-header__panel-links">
        <p className="site-header__panel-title">{title}</p>
        <ul className="site-header__panel-list">
          {links.map((link) => (
            <li key={link.href}>
              <NavigationMenuLink asChild>
                <Link href={href(link.href)}>{link.label}</Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </div>
      <NavigationMenuLink asChild>
        <Link className="site-header__feature" href={href(feature.href)}>
          <Image
            className="site-header__feature-image"
            src={feature.src}
            alt={feature.alt}
            width={220}
            height={275}
            sizes="220px"
          />
          <span className="site-header__feature-label">{feature.label}</span>
        </Link>
      </NavigationMenuLink>
    </div>
  );
}

export function SiteHeader() {
  return (
    <Navbar sticky collapse="lg" className="site-header">
      <NavbarBrand>
        <Link className="site-header__brand" href="/" aria-label={`${site.name}, home`}>
          {site.name}
        </Link>
      </NavbarBrand>

      <NavbarNav asChild>
        <NavigationMenu aria-label="Main" className="site-header__nav">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/collections/new-arrivals">New</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Women</NavigationMenuTrigger>
              <NavigationMenuContent>
                <Panel
                  title="Women"
                  links={womenLinks}
                  feature={{
                    href: "/collections/women?refine=jackets",
                    src: "/products/venturefield-jacket-womens/waist-up.webp",
                    alt: "A model in a black VentureField Jacket",
                    label: "The outerwear edit",
                  }}
                />
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Men</NavigationMenuTrigger>
              <NavigationMenuContent>
                <Panel
                  title="Men"
                  links={menLinks}
                  feature={{
                    href: "/collections/men?refine=hoodies",
                    src: "/products/peakdrift-hoodie-mens/waist-up.webp",
                    alt: "A model in a black PeakDrift Hoodie",
                    label: "Brushed fleece",
                  }}
                />
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Collections</NavigationMenuTrigger>
              <NavigationMenuContent>
                <Panel
                  title="Collections"
                  links={collectionLinks}
                  feature={{
                    href: "/collections/bestsellers",
                    src: "/products/summitstretch-jacket-womens/waist-up.webp",
                    alt: "A model in an orange SummitStretch Jacket",
                    label: "Most wanted",
                  }}
                />
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about">Our story</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/collections/sale">Sale</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </NavbarNav>

      <NavbarActions className="site-header__actions">
        <CurrencySwitcher />
        <Button
          asChild
          intent="ghost"
          aria-label="Search the store"
          className="site-header__search"
        >
          <Link href="/search">
            <SearchIcon size={22} />
          </Link>
        </Button>
        <CartSheet />
        <NavbarMenu label="Menu" side="start">
          <nav aria-label="Main" className="site-header__mobile">
            <p className="site-header__mobile-title">Shop</p>
            {mobileLinks.map((link) => (
              <NavbarLink key={link.href} asChild>
                <Link href={href(link.href)}>{link.label}</Link>
              </NavbarLink>
            ))}
            <Separator className="site-header__mobile-rule" />
            <p className="site-header__mobile-title">The house</p>
            {houseLinks.map((link) => (
              <NavbarLink key={link.href} asChild>
                <Link href={href(link.href)}>{link.label}</Link>
              </NavbarLink>
            ))}
          </nav>
        </NavbarMenu>
      </NavbarActions>
    </Navbar>
  );
}

import { GemIcon, RotateCcwIcon, ShieldCheckIcon, TruckIcon } from "@nuvui/icons";
import { Separator } from "@nuvui/react";
import Link from "next/link";
import { Money } from "@/components/currency/money";
import { NewsletterForm } from "@/components/newsletter/newsletter-form";
import { href } from "@/lib/routes";
import { footerNav, site } from "@/lib/site";
import "./site-footer.scss";

const promises = [
  {
    icon: TruckIcon,
    title: "Complimentary shipping",
    text: (
      <>
        On every order over <Money usd={site.freeShippingThreshold} whole />.
      </>
    ),
  },
  {
    icon: RotateCcwIcon,
    title: `${site.returnDays}-day returns`,
    text: "Free and unhurried, by mail.",
  },
  { icon: GemIcon, title: "Limited runs", text: "Each piece is made in small numbers." },
  { icon: ShieldCheckIcon, title: "Secure checkout", text: "Encrypted from bag to payment." },
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <ul className="site-footer__promises" aria-label="Our promises">
        {promises.map(({ icon: Icon, title, text }) => (
          <li key={title} className="site-footer__promise">
            <Icon size={24} strokeWidth={1.25} />
            <p className="site-footer__promise-title">{title}</p>
            <p className="site-footer__promise-text">{text}</p>
          </li>
        ))}
      </ul>

      <div className="site-footer__main">
        <section className="site-footer__newsletter" aria-labelledby="site-footer-newsletter">
          <h2 id="site-footer-newsletter" className="site-footer__heading">
            Letters from the atelier
          </h2>
          <p className="site-footer__lede">
            New collections, private previews and the stories behind each piece, a few times a
            season.
          </p>
          <NewsletterForm />
        </section>

        <nav className="site-footer__nav" aria-label="Footer">
          {footerNav.map((group) => (
            <div key={group.title} className="site-footer__group">
              <h2 className="site-footer__group-title">{group.title}</h2>
              <ul className="site-footer__links">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link className="site-footer__link" href={href(link.href)}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <Separator className="site-footer__rule" />

      <div className="site-footer__base">
        <p className="site-footer__wordmark">{site.name}</p>
        <p className="site-footer__legal">
          A demonstration storefront built with Next.js and nuvui. Prices in US dollars.
        </p>
        <a className="site-footer__link" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </div>
    </footer>
  );
}

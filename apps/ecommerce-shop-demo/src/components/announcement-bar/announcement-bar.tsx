import { TruckIcon } from "@nuvui/icons";
import Link from "next/link";
import { Money } from "@/components/currency/money";
import { site } from "@/lib/site";
import "./announcement-bar.scss";

export function AnnouncementBar() {
  return (
    <aside className="announcement-bar" aria-label="Store news">
      <TruckIcon size={16} />
      <p className="announcement-bar__text">
        Complimentary shipping over <Money usd={site.freeShippingThreshold} whole /> and{" "}
        {site.returnDays}-day returns.{" "}
        <Link className="announcement-bar__link" href="/policies/shipping-returns">
          Details
        </Link>
      </p>
    </aside>
  );
}

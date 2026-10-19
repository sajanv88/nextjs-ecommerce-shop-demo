import type { Metadata } from "next";
import { CartView } from "@/components/cart/cart-view";
import { SiteBreadcrumb } from "@/components/site-breadcrumb/site-breadcrumb";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Your bag",
  description: "Review the pieces in your bag before checkout.",
  path: "/cart",
  noindex: true,
});

export default function CartPage() {
  return (
    <div className="page">
      <SiteBreadcrumb
        trail={[
          { name: "Home", path: "/" },
          { name: "Your bag", path: "/cart" },
        ]}
      />
      <h1 className="page__title page__title--spaced">Your bag</h1>
      <CartView />
    </div>
  );
}

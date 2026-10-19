"use client";

import { ShoppingBagIcon } from "@nuvui/icons";
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Empty,
  EmptyActions,
  EmptyDescription,
  EmptyMedia,
  EmptyTitle,
  ItemGroup,
  Separator,
} from "@nuvui/react";
import Link from "next/link";
import { Price } from "@/components/price/price";
import { site } from "@/lib/site";
import { CartLineItem } from "./cart-line-item";
import { cartTotals, useCartLines } from "./cart-store";
import { CheckoutButton } from "./checkout-button";
import { ShippingProgress } from "./shipping-progress";
import "./cart-view.scss";

// The bag as a page: every line with its quantity, and the order's summary beside it.
export function CartView() {
  const lines = useCartLines();
  const { count, subtotal } = cartTotals(lines);
  const shipping = subtotal >= site.freeShippingThreshold ? 0 : 12;

  if (count === 0) {
    return (
      <Empty className="cart-view__empty">
        <EmptyMedia>
          <ShoppingBagIcon size={28} />
        </EmptyMedia>
        <EmptyTitle asChild>
          <h2>Your bag is empty</h2>
        </EmptyTitle>
        <EmptyDescription>
          Pieces you add are kept here on this device while you shop.
        </EmptyDescription>
        <EmptyActions>
          <Button asChild>
            <Link href="/collections/new-arrivals">Shop new arrivals</Link>
          </Button>
          <Button asChild intent="secondary">
            <Link href="/collections/bestsellers">Bestsellers</Link>
          </Button>
        </EmptyActions>
      </Empty>
    );
  }

  return (
    <div className="cart-view">
      <section className="cart-view__lines" aria-labelledby="cart-view-lines">
        <h2 id="cart-view-lines" className="cart-view__heading">
          {count} {count === 1 ? "piece" : "pieces"}
        </h2>
        <ItemGroup aria-labelledby="cart-view-lines">
          {lines.map((line) => (
            <CartLineItem key={`${line.handle}:${line.size}`} line={line} />
          ))}
        </ItemGroup>
      </section>

      <Card className="cart-view__summary">
        <CardHeader>
          <CardTitle asChild>
            <h2 className="cart-view__heading">Summary</h2>
          </CardTitle>
        </CardHeader>
        <CardContent className="cart-view__totals">
          <ShippingProgress subtotal={subtotal} />
          <dl className="cart-view__rows">
            <div className="cart-view__row">
              <dt>Subtotal</dt>
              <dd>
                <Price price={subtotal} size="sm" />
              </dd>
            </div>
            <div className="cart-view__row">
              <dt>Shipping</dt>
              <dd>{shipping === 0 ? "Complimentary" : <Price price={shipping} size="sm" />}</dd>
            </div>
            <div className="cart-view__row">
              <dt>Taxes</dt>
              <dd>Calculated at checkout</dd>
            </div>
          </dl>
          <Separator />
          <dl className="cart-view__rows">
            <div className="cart-view__row cart-view__row--total">
              <dt>Estimated total</dt>
              <dd>
                <Price price={subtotal + shipping} />
              </dd>
            </div>
          </dl>
        </CardContent>
        <CardFooter className="cart-view__actions">
          <CheckoutButton className="cart-view__checkout" />
          <Button asChild intent="ghost" className="cart-view__checkout">
            <Link href="/collections/all">Continue shopping</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

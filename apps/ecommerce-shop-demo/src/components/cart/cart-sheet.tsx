"use client";

import { ShoppingBagIcon } from "@nuvui/icons";
import {
  Button,
  Empty,
  EmptyActions,
  EmptyDescription,
  EmptyMedia,
  EmptyTitle,
  ItemGroup,
  Separator,
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@nuvui/react";
import Link from "next/link";
import { Price } from "@/components/price/price";
import { CartLineItem } from "./cart-line-item";
import { useCartDrawer } from "./cart-provider";
import { cartTotals, useCartLines } from "./cart-store";
import { CheckoutButton } from "./checkout-button";
import { ShippingProgress } from "./shipping-progress";
import "./cart-sheet.scss";

// The header's bag button and the drawer it opens.
export function CartSheet() {
  const lines = useCartLines();
  const { open, setOpen } = useCartDrawer();
  const { count, subtotal } = cartTotals(lines);
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          intent="ghost"
          className="cart-sheet__trigger"
          aria-label={
            count === 0 ? "Bag, empty" : `Bag, ${count} ${count === 1 ? "piece" : "pieces"}`
          }
        >
          <ShoppingBagIcon size={22} />
          {count > 0 && (
            <span className="cart-sheet__count" aria-hidden="true">
              {count}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="cart-sheet">
        <SheetHeader>
          <SheetTitle className="cart-sheet__title">Your bag</SheetTitle>
          <SheetDescription>
            {count === 0
              ? "Nothing here yet."
              : `${count} ${count === 1 ? "piece" : "pieces"}, reserved while you shop.`}
          </SheetDescription>
        </SheetHeader>
        <SheetBody className="cart-sheet__body">
          {count === 0 ? (
            <Empty className="cart-sheet__empty">
              <EmptyMedia>
                <ShoppingBagIcon size={28} />
              </EmptyMedia>
              <EmptyTitle asChild>
                <h3>Your bag is empty</h3>
              </EmptyTitle>
              <EmptyDescription>
                Discover the new season, or start with the pieces our clients love most.
              </EmptyDescription>
              <EmptyActions>
                <SheetClose asChild>
                  <Button asChild>
                    <Link href="/collections/new-arrivals">Shop new arrivals</Link>
                  </Button>
                </SheetClose>
              </EmptyActions>
            </Empty>
          ) : (
            <>
              <ShippingProgress subtotal={subtotal} />
              <ItemGroup aria-label="Pieces in your bag" className="cart-sheet__lines">
                {lines.map((line) => (
                  <CartLineItem
                    key={`${line.handle}:${line.size}`}
                    line={line}
                    onNavigate={close}
                  />
                ))}
              </ItemGroup>
            </>
          )}
        </SheetBody>
        {count > 0 && (
          <SheetFooter className="cart-sheet__footer">
            <dl className="cart-sheet__summary">
              <dt>Subtotal</dt>
              <dd>
                <Price price={subtotal} />
              </dd>
            </dl>
            <p className="cart-sheet__note">Shipping and taxes are calculated at checkout.</p>
            <Separator className="cart-sheet__rule" />
            <CheckoutButton className="cart-sheet__checkout" />
            <SheetClose asChild>
              <Button asChild intent="secondary" className="cart-sheet__view">
                <Link href="/cart">View bag</Link>
              </Button>
            </SheetClose>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}

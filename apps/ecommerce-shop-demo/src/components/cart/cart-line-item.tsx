"use client";

import { CloseIcon } from "@nuvui/icons";
import {
  Button,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
  NumberField,
} from "@nuvui/react";
import Image from "next/image";
import Link from "next/link";
import { useId } from "react";
import { Price } from "@/components/price/price";
import { href } from "@/lib/routes";
import { type CartLine, cart, maxQuantity } from "./cart-store";
import "./cart-line-item.scss";

interface CartLineItemProps {
  line: CartLine;
  /** Called when the line's link is followed, so a drawer can close. */
  onNavigate?: () => void;
}

export function CartLineItem({ line, onNavigate }: CartLineItemProps) {
  const titleId = useId();
  const productHref = href(`/products/${line.handle}`);
  const onClick = onNavigate ? { onClick: onNavigate } : {};

  return (
    <Item className="cart-line-item" size="sm">
      <ItemMedia className="cart-line-item__media">
        <Link href={productHref} {...onClick} tabIndex={-1} aria-hidden="true">
          <Image
            className="cart-line-item__image"
            src={line.image.src}
            alt=""
            width={96}
            height={120}
            sizes="96px"
          />
        </Link>
      </ItemMedia>
      <ItemContent className="cart-line-item__content">
        <ItemTitle id={titleId} className="cart-line-item__title">
          <Link className="cart-line-item__link" href={productHref} {...onClick}>
            {line.title}
          </Link>
        </ItemTitle>
        <ItemDescription>
          {line.color} · Size {line.size}
        </ItemDescription>
        <div className="cart-line-item__row">
          <NumberField
            className="cart-line-item__quantity"
            aria-label={`Quantity of ${line.title}, size ${line.size}`}
            value={line.quantity}
            min={1}
            max={maxQuantity}
            onValueChange={(quantity) => {
              if (quantity !== null) cart.setQuantity(line, quantity);
            }}
            incrementLabel={`One more ${line.title}`}
            decrementLabel={`One fewer ${line.title}`}
          />
          <Price price={line.price * line.quantity} size="sm" />
        </div>
      </ItemContent>
      <ItemActions className="cart-line-item__actions">
        <Button
          intent="ghost"
          size="sm"
          aria-label={`Remove ${line.title}, size ${line.size}`}
          onClick={() => cart.remove(line)}
        >
          <CloseIcon size={16} />
        </Button>
      </ItemActions>
    </Item>
  );
}

"use client";

import { ShoppingBagIcon } from "@nuvui/icons";
import {
  Button,
  Fieldset,
  FieldsetLegend,
  Label,
  NumberField,
  ToggleGroup,
  ToggleGroupItem,
} from "@nuvui/react";
import { useId, useState } from "react";
import { useCartDrawer } from "@/components/cart/cart-provider";
import { cart, maxQuantity } from "@/components/cart/cart-store";
import { SIZES, type Size } from "@/lib/catalog/types";
import "./product-purchase.scss";

interface ProductPurchaseProps {
  product: {
    handle: string;
    title: string;
    color: string;
    price: number;
    image: { src: string; alt: string };
    sizes: readonly Size[];
  };
  defaultSize?: Size | undefined;
}

function isSize(value: string): value is Size {
  return (SIZES as readonly string[]).includes(value);
}

// Size, quantity and "Add to bag". Adding opens the bag's drawer, which takes focus and says
// what was added.
export function ProductPurchase({ product, defaultSize }: ProductPurchaseProps) {
  const { setOpen } = useCartDrawer();
  const [size, setSize] = useState<Size | "">(
    defaultSize && product.sizes.includes(defaultSize) ? defaultSize : "",
  );
  const [quantity, setQuantity] = useState(1);
  const [missingSize, setMissingSize] = useState(false);
  const quantityId = useId();
  const errorId = useId();

  function add() {
    if (!size) {
      setMissingSize(true);
      return;
    }
    cart.add({
      handle: product.handle,
      title: product.title,
      color: product.color,
      size,
      price: product.price,
      image: product.image,
      quantity,
    });
    setOpen(true);
  }

  return (
    <div className="product-purchase">
      <Fieldset className="product-purchase__sizes">
        <FieldsetLegend className="product-purchase__legend">
          Size{size ? <span className="product-purchase__chosen">: {size}</span> : null}
        </FieldsetLegend>
        <ToggleGroup
          type="single"
          variant="ghost"
          size="lg"
          aria-label="Size"
          aria-describedby={missingSize ? errorId : undefined}
          aria-invalid={missingSize || undefined}
          className="product-purchase__size-group"
          value={size}
          onValueChange={(value) => {
            if (!isSize(value)) return;
            setSize(value);
            setMissingSize(false);
          }}
        >
          {product.sizes.map((entry) => (
            <ToggleGroupItem key={entry} value={entry} className="product-purchase__size">
              {entry}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        <p id={errorId} className="product-purchase__error" role="alert">
          {missingSize ? "Choose a size to add this piece to your bag." : ""}
        </p>
      </Fieldset>

      <div className="product-purchase__row">
        <div className="product-purchase__quantity">
          <Label htmlFor={quantityId} className="product-purchase__legend">
            Quantity
          </Label>
          <NumberField
            id={quantityId}
            className="product-purchase__stepper"
            value={quantity}
            min={1}
            max={maxQuantity}
            onValueChange={(value) => setQuantity(value ?? 1)}
          />
        </div>
        <Button size="lg" className="product-purchase__add" onClick={add}>
          <ShoppingBagIcon size={18} />
          Add to bag
        </Button>
      </div>
    </div>
  );
}

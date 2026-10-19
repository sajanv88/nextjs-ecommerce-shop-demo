"use client";

import { createContext, type ReactNode, use, useMemo, useState } from "react";

interface CartDrawer {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const CartDrawerContext = createContext<CartDrawer | null>(null);

// Whether the bag's drawer is open, shared by the header's button and every "Add to bag".
export function CartProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const value = useMemo(() => ({ open, setOpen }), [open]);
  return <CartDrawerContext value={value}>{children}</CartDrawerContext>;
}

export function useCartDrawer(): CartDrawer {
  const drawer = use(CartDrawerContext);
  if (!drawer) throw new Error("useCartDrawer needs a CartProvider above it");
  return drawer;
}

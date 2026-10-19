"use client";

import { createContext, type ReactNode, use } from "react";

const NonceContext = createContext("");

// Makes the request's CSP nonce available to client components, for nuvui's
// <ScrollArea nonce={useNonce()}> and anything else that writes a <style> or <script>.
export function NonceProvider({ nonce, children }: { nonce: string; children: ReactNode }) {
  return <NonceContext value={nonce}>{children}</NonceContext>;
}

export function useNonce(): string {
  return use(NonceContext);
}

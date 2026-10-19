"use client";

import { ChevronDownIcon } from "@nuvui/icons";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@nuvui/react";
import { BASE_CURRENCY, CURRENCIES, parseCurrency } from "@/lib/currency";
import { useCurrency } from "./currency-provider";
import "./currency-switcher.scss";

// The header's currency menu. Choosing one rolls every price on the page to it.
export function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          intent="ghost"
          size="sm"
          className="currency-switcher__trigger"
          aria-label={`Currency: ${currency}. Change currency`}
        >
          {currency}
          <ChevronDownIcon size={14} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="currency-switcher__menu">
        <DropdownMenuRadioGroup
          value={currency}
          onValueChange={(value) => setCurrency(parseCurrency(value))}
        >
          <DropdownMenuLabel>Display currency</DropdownMenuLabel>
          {CURRENCIES.map((entry) => (
            <DropdownMenuRadioItem key={entry.code} value={entry.code}>
              <span className="currency-switcher__code">{entry.code}</span>
              {entry.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="currency-switcher__note">
          Converted for reference. Orders are charged in {BASE_CURRENCY}.
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

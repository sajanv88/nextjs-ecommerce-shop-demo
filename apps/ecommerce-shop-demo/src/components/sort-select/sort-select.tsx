"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@nuvui/react";
import type { Route } from "next";
import { useRouter } from "next/navigation";
import { useId, useTransition } from "react";
import { SORT_LABELS } from "@/lib/catalog/labels";
import { SORTS, type Sort } from "@/lib/catalog/types";
import "./sort-select.scss";

interface SortSelectProps {
  value: Sort;
  /** The page's path, and the other search params to keep. */
  pathname: string;
  params?: Record<string, string | undefined>;
}

function isSort(value: string): value is Sort {
  return (SORTS as readonly string[]).includes(value);
}

export function SortSelect({ value, pathname, params = {} }: SortSelectProps) {
  const router = useRouter();
  const labelId = useId();
  const [pending, startTransition] = useTransition();

  return (
    <div className="sort-select" data-pending={pending || undefined}>
      <span id={labelId} className="sort-select__label">
        Sort by
      </span>
      <Select
        value={value}
        onValueChange={(next) => {
          if (!isSort(next)) return;
          const search = new URLSearchParams();
          for (const [key, entry] of Object.entries(params)) {
            if (entry) search.set(key, entry);
          }
          if (next !== "featured") search.set("sort", next);
          const query = search.toString();
          startTransition(() => {
            router.replace(`${pathname}${query ? `?${query}` : ""}` as Route, { scroll: false });
          });
        }}
      >
        <SelectTrigger className="sort-select__trigger" aria-labelledby={labelId}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {SORTS.map((sort) => (
            <SelectItem key={sort} value={sort}>
              {SORT_LABELS[sort]}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

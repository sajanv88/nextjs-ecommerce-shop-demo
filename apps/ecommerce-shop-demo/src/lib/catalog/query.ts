import * as v from "valibot";
import { CATEGORIES, GENDERS, SIZES, SORTS } from "./types";

// searchParams are whatever the visitor typed into the address bar. Each is parsed here, and a
// value that doesn't fit falls back to the default instead of failing the page.

type RawParams = Record<string, string | string[] | undefined>;

function first(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

const Sort = v.fallback(v.picklist(SORTS), "featured");
const Refine = v.fallback(v.optional(v.picklist([...CATEGORIES, ...GENDERS])), undefined);
const Query = v.fallback(v.pipe(v.string(), v.trim(), v.maxLength(80)), "");
const Size = v.fallback(v.optional(v.picklist(SIZES)), undefined);

export function parseCollectionParams(params: RawParams) {
  return {
    sort: v.parse(Sort, first(params.sort) ?? "featured"),
    refine: v.parse(Refine, first(params.refine)),
  };
}

export function parseSearchParams(params: RawParams) {
  return {
    q: v.parse(Query, first(params.q) ?? ""),
    sort: v.parse(Sort, first(params.sort) ?? "featured"),
  };
}

export function parseProductParams(params: RawParams) {
  return { size: v.parse(Size, first(params.size)) };
}

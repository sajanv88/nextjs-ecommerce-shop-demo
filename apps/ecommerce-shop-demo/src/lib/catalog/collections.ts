import type { Collection, ProductImage } from "./types";

function photo(
  handle: string,
  shot: "main" | "waist-up" | "full-body" | "side-profile",
  alt: string,
) {
  return { src: `/products/${handle}/${shot}.webp`, alt } satisfies ProductImage;
}

/** Curated by hand: the newest pieces, in the order the home page shows them. */
export const NEW_ARRIVALS = [
  "venturefield-jacket-womens",
  "apexvale-jacket-mens",
  "crestlayer-hoodie-womens",
  "peakdrift-hoodie-mens",
  "waypointstack-sweatshirt-womens",
  "metrosync-jacket-womens",
  "haloline-hoodie-mens",
  "rallyhaven-tee-womens",
  "lumenstream-hoodie-unisex",
  "gridstack-sweatshirt-womens",
  "frametrack-long-tee-mens",
  "trekproof-jacket-womens",
] as const;

/** The pieces that sell best, which "Featured" sorts first. */
export const BESTSELLERS = [
  "peakcontour-hoodie-mens",
  "summitstretch-jacket-womens",
  "axismark-hoodie-womens",
  "briskgauge-jacket-mens",
  "pulsephase-sweatshirt-womens",
  "northprime-tee-mens",
  "echopath-long-tee-unisex",
  "coregrid-hoodie-womens",
] as const;

export const collections = [
  {
    handle: "all",
    title: "All pieces",
    tagline: "The complete wardrobe",
    description:
      "Every piece in the current collection: outerwear, fleece and jersey cut for movement and finished for the city.",
    image: photo(
      "summitstretch-jacket-womens",
      "full-body",
      "A model in an orange SummitStretch Jacket",
    ),
    rule: { kind: "all" },
  },
  {
    handle: "new-arrivals",
    title: "New arrivals",
    tagline: "Just landed",
    description:
      "The latest silhouettes from the atelier: technical shells, brushed fleece and fine jersey, released in limited runs.",
    image: photo("metrosync-jacket-womens", "full-body", "A model in a purple MetroSync Jacket"),
    rule: { kind: "handles", handles: NEW_ARRIVALS },
  },
  {
    handle: "bestsellers",
    title: "Bestsellers",
    tagline: "Most wanted",
    description:
      "The pieces our clients return to season after season, chosen for their cut, their hand and how they wear in.",
    image: photo("peakcontour-hoodie-mens", "waist-up", "A model in a black PeakContour Hoodie"),
    rule: { kind: "handles", handles: BESTSELLERS },
  },
  {
    handle: "women",
    title: "Women",
    tagline: "Composed, considered",
    description:
      "Womenswear with a clean line: tailored shells, sculpted hoodies and featherweight tees that move from studio to street.",
    image: photo(
      "venturefield-jacket-womens",
      "full-body",
      "A model in a black VentureField Jacket",
    ),
    rule: { kind: "gender", gender: "women" },
  },
  {
    handle: "men",
    title: "Men",
    tagline: "Quietly precise",
    description:
      "Menswear reduced to what matters: structured outerwear, dense fleece and jersey with a refined drape.",
    image: photo("peakdrift-hoodie-mens", "full-body", "A model in a black PeakDrift Hoodie"),
    rule: { kind: "gender", gender: "men" },
  },
  {
    handle: "unisex",
    title: "Unisex",
    tagline: "Shared essentials",
    description: "Relaxed, gender-neutral cuts designed to be shared, borrowed and worn by anyone.",
    image: photo("lumenstream-hoodie-unisex", "waist-up", "A model in a grey LumenStream Hoodie"),
    rule: { kind: "gender", gender: "unisex" },
  },
  {
    handle: "youth",
    title: "Youth",
    tagline: "Made to keep up",
    description:
      "The same fabrics and finishing as our adult collection, cut for younger wearers who never sit still.",
    image: photo(
      "orbitstructure-jacket-youth",
      "full-body",
      "A young model in a pink OrbitStructure Jacket",
    ),
    rule: { kind: "gender", gender: "youth" },
  },
  {
    handle: "jackets",
    title: "Outerwear",
    tagline: "Shells and soft-shells",
    description:
      "Weather-ready jackets with bonded seams, articulated sleeves and a clean, minimal finish.",
    image: photo("apexvale-jacket-mens", "waist-up", "A model in a blue ApexVale Jacket"),
    rule: { kind: "category", category: "jackets" },
  },
  {
    handle: "hoodies",
    title: "Hoodies",
    tagline: "Brushed fleece",
    description:
      "Heavyweight, brushed-back fleece hoodies with structured hoods and a sculpted fit.",
    image: photo("crestlayer-hoodie-womens", "waist-up", "A model in a black CrestLayer Hoodie"),
    rule: { kind: "category", category: "hoodies" },
  },
  {
    handle: "sweatshirts",
    title: "Sweatshirts",
    tagline: "Everyday layers",
    description:
      "Crew-neck sweatshirts in dense loopback cotton, for the hours between training and dinner.",
    image: photo(
      "waypointstack-sweatshirt-womens",
      "waist-up",
      "A model in a white WaypointStack Sweatshirt",
    ),
    rule: { kind: "category", category: "sweatshirts" },
  },
  {
    handle: "tees",
    title: "Tees",
    tagline: "Fine jersey",
    description:
      "Short-sleeve tees in breathable, fine-gauge jersey that keeps its shape wash after wash.",
    image: photo("northprime-tee-mens", "waist-up", "A model in a white NorthPrime Tee"),
    rule: { kind: "category", category: "tees" },
  },
  {
    handle: "long-tees",
    title: "Long sleeves",
    tagline: "Base layers",
    description:
      "Long-sleeve tees with a close, clean fit, made to be worn alone or under a shell.",
    image: photo("frametrack-long-tee-mens", "waist-up", "A model in a black FrameTrack Long Tee"),
    rule: { kind: "category", category: "long-tees" },
  },
  {
    handle: "sale",
    title: "Archive sale",
    tagline: "Final pieces",
    description: "Last pieces from previous seasons, at reduced prices while sizes last.",
    image: photo("roamband-hoodie-mens", "waist-up", "A model in a black RoamBand Hoodie"),
    rule: { kind: "sale" },
  },
] as const satisfies readonly Collection[];

/** Collections that group by who wears them, and by what they are. */
export const GENDER_COLLECTIONS = ["women", "men", "unisex", "youth"] as const;
export const CATEGORY_COLLECTIONS = [
  "jackets",
  "hoodies",
  "sweatshirts",
  "tees",
  "long-tees",
] as const;

// The demo catalog: 40 pieces with four photographs each, in public/products/<handle>/.
// Swap this module for a commerce backend; the functions in ./index.ts are the only readers.
import type { Product } from "./types";

export const products = [
  {
    handle: "apexflow-tee-womens",
    title: "ApexFlow Tee",
    summary:
      "The ApexFlow Tee is crafted for women who move with intention, offering a clean silhouette and featherlight construction that transitions effortlessly from studio to street.",
    description: [
      "The ApexFlow Tee is crafted for women who move with intention, offering a clean silhouette and featherlight construction that transitions effortlessly from studio to street.",
    ],
    price: 48,
    color: "White",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "women",
    category: "tees",
    rating: 4.9,
    reviewCount: 80,
    images: [
      {
        src: "/products/apexflow-tee-womens/main.webp",
        alt: "ApexFlow Tee in white, on a neutral studio background",
      },
      {
        src: "/products/apexflow-tee-womens/waist-up.webp",
        alt: "ApexFlow Tee in white, worn, waist-up",
      },
      {
        src: "/products/apexflow-tee-womens/full-body.webp",
        alt: "ApexFlow Tee in white, worn, full length",
      },
      {
        src: "/products/apexflow-tee-womens/side-profile.webp",
        alt: "ApexFlow Tee in white, worn, side profile",
      },
    ],
  },
  {
    handle: "apexvale-jacket-mens",
    title: "ApexVale Jacket",
    summary:
      "The ApexVale Jacket is built for the athlete who moves between the gym and the street without missing a beat, offering a clean blue silhouette that stays sharp through every transition.",
    description: [
      "The ApexVale Jacket is built for the athlete who moves between the gym and the street without missing a beat, offering a clean blue silhouette that stays sharp through every transition.",
      "Engineered with a refined, unadorned finish and a streamlined fit, this jacket delivers the quiet confidence of premium training wear designed to perform as well as it looks.",
    ],
    price: 168,
    color: "Blue",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "men",
    category: "jackets",
    rating: 4.9,
    reviewCount: 34,
    images: [
      {
        src: "/products/apexvale-jacket-mens/main.webp",
        alt: "ApexVale Jacket in blue, on a neutral studio background",
      },
      {
        src: "/products/apexvale-jacket-mens/waist-up.webp",
        alt: "ApexVale Jacket in blue, worn, waist-up",
      },
      {
        src: "/products/apexvale-jacket-mens/full-body.webp",
        alt: "ApexVale Jacket in blue, worn, full length",
      },
      {
        src: "/products/apexvale-jacket-mens/side-profile.webp",
        alt: "ApexVale Jacket in blue, worn, side profile",
      },
    ],
  },
  {
    handle: "arcguard-hoodie-mens",
    title: "ArcGuard Hoodie",
    summary:
      "The ArcGuard Hoodie is built for training sessions that demand focus and comfort in equal measure, offering a clean silhouette that moves with you from warm-up through cooldown without restriction.",
    description: [
      "The ArcGuard Hoodie is built for training sessions that demand focus and comfort in equal measure, offering a clean silhouette that moves with you from warm-up through cooldown without restriction.",
      "The result keeps the piece practical.",
      "Crafted in a bold orange tone, this hoodie pairs effortlessly with your existing athletic wardrobe while keeping your look sharp, intentional, and ready for whatever the day brings your way.",
      "The result keeps the piece practical, composed.",
    ],
    price: 118,
    color: "Orange",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "men",
    category: "hoodies",
    rating: 4.4,
    reviewCount: 97,
    images: [
      {
        src: "/products/arcguard-hoodie-mens/main.webp",
        alt: "ArcGuard Hoodie in orange, on a neutral studio background",
      },
      {
        src: "/products/arcguard-hoodie-mens/waist-up.webp",
        alt: "ArcGuard Hoodie in orange, worn, waist-up",
      },
      {
        src: "/products/arcguard-hoodie-mens/full-body.webp",
        alt: "ArcGuard Hoodie in orange, worn, full length",
      },
      {
        src: "/products/arcguard-hoodie-mens/side-profile.webp",
        alt: "ArcGuard Hoodie in orange, worn, side profile",
      },
    ],
  },
  {
    handle: "auramode-sweatshirt-youth",
    title: "AuraMode Sweatshirt",
    summary:
      "The AuraMode Sweatshirt is built for younger athletes who move between training sessions and everyday life without missing a beat or compromising on clean, understated style.",
    description: [
      "The AuraMode Sweatshirt is built for younger athletes who move between training sessions and everyday life without missing a beat or compromising on clean, understated style.",
      "Cut with a relaxed silhouette and finished in rich earthy tones, this sweatshirt layers effortlessly and holds its shape through every stretch, sprint, and casual hangout on the go.",
      "The result keeps the piece practical, composed, and ready.",
    ],
    price: 98,
    color: "Brown",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "youth",
    category: "sweatshirts",
    rating: 4.4,
    reviewCount: 98,
    images: [
      {
        src: "/products/auramode-sweatshirt-youth/main.webp",
        alt: "AuraMode Sweatshirt in brown, on a neutral studio background",
      },
      {
        src: "/products/auramode-sweatshirt-youth/waist-up.webp",
        alt: "AuraMode Sweatshirt in brown, worn, waist-up",
      },
      {
        src: "/products/auramode-sweatshirt-youth/full-body.webp",
        alt: "AuraMode Sweatshirt in brown, worn, full length",
      },
      {
        src: "/products/auramode-sweatshirt-youth/side-profile.webp",
        alt: "AuraMode Sweatshirt in brown, worn, side profile",
      },
    ],
  },
  {
    handle: "axismark-hoodie-womens",
    title: "AxisMark Hoodie",
    summary:
      "The AxisMark Hoodie delivers a refined, understated silhouette designed for movement and ease.",
    description: [
      "The AxisMark Hoodie delivers a refined, understated silhouette designed for movement and ease.",
      "Its clean brown palette and unadorned finish make it effortless to layer from studio to street.",
      "The result keeps the piece practical, composed.",
      "Cut to follow the body without restriction, this hoodie pairs quiet confidence with everyday versatility.",
    ],
    price: 118,
    color: "Brown",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "women",
    category: "hoodies",
    rating: 4.5,
    reviewCount: 26,
    images: [
      {
        src: "/products/axismark-hoodie-womens/main.webp",
        alt: "AxisMark Hoodie in brown, on a neutral studio background",
      },
      {
        src: "/products/axismark-hoodie-womens/waist-up.webp",
        alt: "AxisMark Hoodie in brown, worn, waist-up",
      },
      {
        src: "/products/axismark-hoodie-womens/full-body.webp",
        alt: "AxisMark Hoodie in brown, worn, full length",
      },
      {
        src: "/products/axismark-hoodie-womens/side-profile.webp",
        alt: "AxisMark Hoodie in brown, worn, side profile",
      },
    ],
  },
  {
    handle: "briskgauge-jacket-mens",
    title: "BriskGauge Jacket",
    summary:
      "Built for the transition between effort and ease, the BriskGauge Jacket moves with you through every shift in pace, temperature, and terrain without sacrificing a clean, uncluttered silhouette.",
    description: [
      "Built for the transition between effort and ease, the BriskGauge Jacket moves with you through every shift in pace, temperature, and terrain without sacrificing a clean, uncluttered silhouette.",
      "The result keeps the piece practical.",
      "Refined construction and a streamlined profile make this jacket equally at home on a morning run or a casual afternoon out, delivering understated performance dressed in a sharp monochromatic finish.",
    ],
    price: 168,
    color: "Black",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "men",
    category: "jackets",
    rating: 4.3,
    reviewCount: 160,
    images: [
      {
        src: "/products/briskgauge-jacket-mens/main.webp",
        alt: "BriskGauge Jacket in black, on a neutral studio background",
      },
      {
        src: "/products/briskgauge-jacket-mens/waist-up.webp",
        alt: "BriskGauge Jacket in black, worn, waist-up",
      },
      {
        src: "/products/briskgauge-jacket-mens/full-body.webp",
        alt: "BriskGauge Jacket in black, worn, full length",
      },
      {
        src: "/products/briskgauge-jacket-mens/side-profile.webp",
        alt: "BriskGauge Jacket in black, worn, side profile",
      },
    ],
  },
  {
    handle: "coregrid-hoodie-womens",
    title: "CoreGrid Hoodie",
    summary:
      "The CoreGrid Hoodie is crafted for the woman who moves between studio sessions and city streets without missing a beat, offering a clean silhouette that feels effortless all day.",
    description: [
      "The CoreGrid Hoodie is crafted for the woman who moves between studio sessions and city streets without missing a beat, offering a clean silhouette that feels effortless all day.",
      "The result keeps the piece practical, composed, and ready.",
      "Its relaxed yet structured fit drapes beautifully in monochromatic white, making it the kind of layering piece you reach for every single morning without a second thought.",
    ],
    price: 82.6,
    compareAtPrice: 118,
    color: "White",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "women",
    category: "hoodies",
    rating: 4.5,
    reviewCount: 19,
    images: [
      {
        src: "/products/coregrid-hoodie-womens/main.webp",
        alt: "CoreGrid Hoodie in white, on a neutral studio background",
      },
      {
        src: "/products/coregrid-hoodie-womens/waist-up.webp",
        alt: "CoreGrid Hoodie in white, worn, waist-up",
      },
      {
        src: "/products/coregrid-hoodie-womens/full-body.webp",
        alt: "CoreGrid Hoodie in white, worn, full length",
      },
      {
        src: "/products/coregrid-hoodie-womens/side-profile.webp",
        alt: "CoreGrid Hoodie in white, worn, side profile",
      },
    ],
  },
  {
    handle: "crestlayer-hoodie-womens",
    title: "CrestLayer Hoodie",
    summary: "The CrestLayer Hoodie is built for women who move with intention.",
    description: [
      "The CrestLayer Hoodie is built for women who move with intention.",
      "Clean lines and a streamlined silhouette make this piece equally at home in the studio or on the street after a long training session.",
      "Cut from a smooth, midweight fabric with a relaxed yet structured fit, it layers effortlessly and holds its shape through every wear.",
      "Understated and refined, this hoodie is the foundation of a focused wardrobe.",
    ],
    price: 118,
    color: "Black",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "women",
    category: "hoodies",
    rating: 4.5,
    reviewCount: 132,
    images: [
      {
        src: "/products/crestlayer-hoodie-womens/main.webp",
        alt: "CrestLayer Hoodie in black, on a neutral studio background",
      },
      {
        src: "/products/crestlayer-hoodie-womens/waist-up.webp",
        alt: "CrestLayer Hoodie in black, worn, waist-up",
      },
      {
        src: "/products/crestlayer-hoodie-womens/full-body.webp",
        alt: "CrestLayer Hoodie in black, worn, full length",
      },
      {
        src: "/products/crestlayer-hoodie-womens/side-profile.webp",
        alt: "CrestLayer Hoodie in black, worn, side profile",
      },
    ],
  },
  {
    handle: "drivemode-hoodie-womens",
    title: "DriveMode Hoodie",
    summary:
      "The DriveMode Hoodie is built for the woman who moves with intention, pairing a clean purple silhouette with a relaxed fit that transitions effortlessly from training to the streets.",
    description: [
      "The DriveMode Hoodie is built for the woman who moves with intention, pairing a clean purple silhouette with a relaxed fit that transitions effortlessly from training to the streets.",
      "Cut from a smooth, mid-weight fabric, this hoodie delivers all-day comfort without sacrificing a refined, streamlined look that keeps every outfit sharp and purposeful.",
      "The result keeps the piece practical, composed, and ready for steady.",
    ],
    price: 118,
    color: "Purple",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "women",
    category: "hoodies",
    rating: 4.3,
    reviewCount: 57,
    images: [
      {
        src: "/products/drivemode-hoodie-womens/main.webp",
        alt: "DriveMode Hoodie in purple, on a neutral studio background",
      },
      {
        src: "/products/drivemode-hoodie-womens/waist-up.webp",
        alt: "DriveMode Hoodie in purple, worn, waist-up",
      },
      {
        src: "/products/drivemode-hoodie-womens/full-body.webp",
        alt: "DriveMode Hoodie in purple, worn, full length",
      },
      {
        src: "/products/drivemode-hoodie-womens/side-profile.webp",
        alt: "DriveMode Hoodie in purple, worn, side profile",
      },
    ],
  },
  {
    handle: "echopath-long-tee-unisex",
    title: "EchoPath Long Tee",
    summary:
      "The EchoPath Long Tee is cut for unrestricted movement, offering a relaxed yet structured silhouette that transitions seamlessly from morning training to the rest of your day.",
    description: [
      "The EchoPath Long Tee is cut for unrestricted movement, offering a relaxed yet structured silhouette that transitions seamlessly from morning training to the rest of your day.",
      "Finished in a clean monochromatic green, this unadorned long tee keeps the focus on clean lines and effortless versatility, making it a dependable layer for any active routine.",
    ],
    price: 58,
    color: "Green",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "unisex",
    category: "long-tees",
    rating: 4.4,
    reviewCount: 62,
    images: [
      {
        src: "/products/echopath-long-tee-unisex/main.webp",
        alt: "EchoPath Long Tee in green, on a neutral studio background",
      },
      {
        src: "/products/echopath-long-tee-unisex/waist-up.webp",
        alt: "EchoPath Long Tee in green, worn, waist-up",
      },
      {
        src: "/products/echopath-long-tee-unisex/full-body.webp",
        alt: "EchoPath Long Tee in green, worn, full length",
      },
      {
        src: "/products/echopath-long-tee-unisex/side-profile.webp",
        alt: "EchoPath Long Tee in green, worn, side profile",
      },
    ],
  },
  {
    handle: "echostructure-hoodie-youth",
    title: "EchoStructure Hoodie",
    summary:
      "The EchoStructure Hoodie is built for young athletes who move with purpose, offering a clean silhouette that transitions effortlessly from morning warm-ups to after-school hangouts.",
    description: [
      "The EchoStructure Hoodie is built for young athletes who move with purpose, offering a clean silhouette that transitions effortlessly from morning warm-ups to after-school hangouts.",
      "The result keeps the piece practical, composed, and ready.",
      "Crafted with a smooth, structured finish and an unadorned exterior, this hoodie keeps every look sharp and focused, letting the quality of the cut and fabric speak entirely for itself.",
    ],
    price: 118,
    color: "Red",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "youth",
    category: "hoodies",
    rating: 4.8,
    reviewCount: 174,
    images: [
      {
        src: "/products/echostructure-hoodie-youth/main.webp",
        alt: "EchoStructure Hoodie in red, on a neutral studio background",
      },
      {
        src: "/products/echostructure-hoodie-youth/waist-up.webp",
        alt: "EchoStructure Hoodie in red, worn, waist-up",
      },
      {
        src: "/products/echostructure-hoodie-youth/full-body.webp",
        alt: "EchoStructure Hoodie in red, worn, full length",
      },
      {
        src: "/products/echostructure-hoodie-youth/side-profile.webp",
        alt: "EchoStructure Hoodie in red, worn, side profile",
      },
    ],
  },
  {
    handle: "embergauge-tee-mens",
    title: "EmberGauge Tee",
    summary:
      "The EmberGauge Tee is engineered for athletes who demand precision in every movement, featuring a clean monochromatic silhouette that transitions effortlessly from the gym to the street.",
    description: [
      "The EmberGauge Tee is engineered for athletes who demand precision in every movement, featuring a clean monochromatic silhouette that transitions effortlessly from the gym to the street.",
      "Cut with a tailored yet unrestricted fit, this tee delivers understated confidence through premium fabric construction and a refined, logo-free aesthetic built for daily performance.",
    ],
    price: 48,
    color: "Red",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "men",
    category: "tees",
    rating: 4.8,
    reviewCount: 168,
    images: [
      {
        src: "/products/embergauge-tee-mens/main.webp",
        alt: "EmberGauge Tee in red, on a neutral studio background",
      },
      {
        src: "/products/embergauge-tee-mens/waist-up.webp",
        alt: "EmberGauge Tee in red, worn, waist-up",
      },
      {
        src: "/products/embergauge-tee-mens/full-body.webp",
        alt: "EmberGauge Tee in red, worn, full length",
      },
      {
        src: "/products/embergauge-tee-mens/side-profile.webp",
        alt: "EmberGauge Tee in red, worn, side profile",
      },
    ],
  },
  {
    handle: "frametrack-long-tee-mens",
    title: "FrameTrack Long Tee",
    summary:
      "The FrameTrack Long Tee is built for training sessions that demand focus and comfort in equal measure.",
    description: [
      "The FrameTrack Long Tee is built for training sessions that demand focus and comfort in equal measure.",
      "Its clean black silhouette moves with you, resisting distraction so every rep and stride gets your full attention.",
      "Refined proportions and a streamlined cut make this long tee as versatile off the floor as it is on it.",
      "Wear it solo or layer it under your favorite piece for a look that stays sharp from warm-up to cool-down.",
    ],
    price: 58,
    color: "Black",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "men",
    category: "long-tees",
    rating: 4.3,
    reviewCount: 45,
    images: [
      {
        src: "/products/frametrack-long-tee-mens/main.webp",
        alt: "FrameTrack Long Tee in black, on a neutral studio background",
      },
      {
        src: "/products/frametrack-long-tee-mens/waist-up.webp",
        alt: "FrameTrack Long Tee in black, worn, waist-up",
      },
      {
        src: "/products/frametrack-long-tee-mens/full-body.webp",
        alt: "FrameTrack Long Tee in black, worn, full length",
      },
      {
        src: "/products/frametrack-long-tee-mens/side-profile.webp",
        alt: "FrameTrack Long Tee in black, worn, side profile",
      },
    ],
  },
  {
    handle: "gridstack-sweatshirt-womens",
    title: "GridStack Sweatshirt",
    summary:
      "The GridStack Sweatshirt is built for the woman who moves with intention, offering a clean silhouette and a relaxed fit that transitions effortlessly from morning training to the rest of your day.",
    description: [
      "The GridStack Sweatshirt is built for the woman who moves with intention, offering a clean silhouette and a relaxed fit that transitions effortlessly from morning training to the rest of your day.",
      "The result keeps the piece practical.",
      "Crafted in a deep black fabric with a smooth, understated finish, this sweatshirt layers beautifully over any base and holds its shape through every wear, wash, and workout without compromise.",
    ],
    price: 98,
    color: "Black",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "women",
    category: "sweatshirts",
    rating: 4.7,
    reviewCount: 30,
    images: [
      {
        src: "/products/gridstack-sweatshirt-womens/main.webp",
        alt: "GridStack Sweatshirt in black, on a neutral studio background",
      },
      {
        src: "/products/gridstack-sweatshirt-womens/waist-up.webp",
        alt: "GridStack Sweatshirt in black, worn, waist-up",
      },
      {
        src: "/products/gridstack-sweatshirt-womens/full-body.webp",
        alt: "GridStack Sweatshirt in black, worn, full length",
      },
      {
        src: "/products/gridstack-sweatshirt-womens/side-profile.webp",
        alt: "GridStack Sweatshirt in black, worn, side profile",
      },
    ],
  },
  {
    handle: "haloline-hoodie-mens",
    title: "HaloLine Hoodie",
    summary:
      "The HaloLine Hoodie is engineered for the athlete who demands clean silhouettes and unrestricted movement, offering a relaxed yet structured fit that transitions effortlessly from training to the street.",
    description: [
      "The HaloLine Hoodie is engineered for the athlete who demands clean silhouettes and unrestricted movement, offering a relaxed yet structured fit that transitions effortlessly from training to the street.",
      "Cut from a smooth, mid-weight fabric with a subtle drape, this hoodie delivers quiet confidence through its unadorned profile, making it the kind of essential that earns a permanent place in any rotation.",
    ],
    price: 118,
    color: "Blue",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "men",
    category: "hoodies",
    rating: 4.9,
    reviewCount: 148,
    images: [
      {
        src: "/products/haloline-hoodie-mens/main.webp",
        alt: "HaloLine Hoodie in blue, on a neutral studio background",
      },
      {
        src: "/products/haloline-hoodie-mens/waist-up.webp",
        alt: "HaloLine Hoodie in blue, worn, waist-up",
      },
      {
        src: "/products/haloline-hoodie-mens/full-body.webp",
        alt: "HaloLine Hoodie in blue, worn, full length",
      },
      {
        src: "/products/haloline-hoodie-mens/side-profile.webp",
        alt: "HaloLine Hoodie in blue, worn, side profile",
      },
    ],
  },
  {
    handle: "helixphase-hoodie-youth",
    title: "HelixPhase Hoodie",
    summary:
      "The HelixPhase Hoodie is built for young athletes who move with purpose, pairing a clean red silhouette with a relaxed fit that transitions effortlessly from warm-ups to the weekend without missing a beat.",
    description: [
      "The HelixPhase Hoodie is built for young athletes who move with purpose, pairing a clean red silhouette with a relaxed fit that transitions effortlessly from warm-ups to the weekend without missing a beat.",
      "Every detail stays out of the way so the wearer stays in focus, with a smooth kangaroo pocket, adjustable drawcord hood, and a streamlined hem that layers cleanly over any training or casual outfit.",
      "The result keeps the piece practical.",
    ],
    price: 118,
    color: "Red",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "youth",
    category: "hoodies",
    rating: 4.3,
    reviewCount: 43,
    images: [
      {
        src: "/products/helixphase-hoodie-youth/main.webp",
        alt: "HelixPhase Hoodie in red, on a neutral studio background",
      },
      {
        src: "/products/helixphase-hoodie-youth/waist-up.webp",
        alt: "HelixPhase Hoodie in red, worn, waist-up",
      },
      {
        src: "/products/helixphase-hoodie-youth/full-body.webp",
        alt: "HelixPhase Hoodie in red, worn, full length",
      },
      {
        src: "/products/helixphase-hoodie-youth/side-profile.webp",
        alt: "HelixPhase Hoodie in red, worn, side profile",
      },
    ],
  },
  {
    handle: "kineticgauge-long-tee-womens",
    title: "KineticGauge Long Tee",
    summary: "The KineticGauge Long Tee is built for the woman who moves with intention.",
    description: [
      "The KineticGauge Long Tee is built for the woman who moves with intention.",
      "Its clean, elongated silhouette in deep black delivers a refined look that transitions effortlessly from studio to street without compromise.",
      "Cut to follow the body's natural lines, this long tee offers understated confidence through its minimal, unadorned finish.",
      "Every detail is considered, and nothing is excessive, making it a cornerstone of any focused training wardrobe.",
    ],
    price: 40.6,
    compareAtPrice: 58,
    color: "Black",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "women",
    category: "long-tees",
    rating: 4.3,
    reviewCount: 107,
    images: [
      {
        src: "/products/kineticgauge-long-tee-womens/main.webp",
        alt: "KineticGauge Long Tee in black, on a neutral studio background",
      },
      {
        src: "/products/kineticgauge-long-tee-womens/waist-up.webp",
        alt: "KineticGauge Long Tee in black, worn, waist-up",
      },
      {
        src: "/products/kineticgauge-long-tee-womens/full-body.webp",
        alt: "KineticGauge Long Tee in black, worn, full length",
      },
      {
        src: "/products/kineticgauge-long-tee-womens/side-profile.webp",
        alt: "KineticGauge Long Tee in black, worn, side profile",
      },
    ],
  },
  {
    handle: "lumenstream-hoodie-unisex",
    title: "LumenStream Hoodie",
    summary:
      "The LumenStream Hoodie is built for movement and stillness alike, offering a clean silhouette that transitions from early morning training sessions to the rest of your day without missing a beat.",
    description: [
      "The LumenStream Hoodie is built for movement and stillness alike, offering a clean silhouette that transitions from early morning training sessions to the rest of your day without missing a beat.",
      "The result keeps the piece practical.",
      "Cut from a smooth, mid-weight fabric in understated grey and white tones, this hoodie keeps every detail refined and every line intentional, so you always feel put together no matter the setting.",
    ],
    price: 118,
    color: "Grey",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "unisex",
    category: "hoodies",
    rating: 4.5,
    reviewCount: 150,
    images: [
      {
        src: "/products/lumenstream-hoodie-unisex/main.webp",
        alt: "LumenStream Hoodie in grey, on a neutral studio background",
      },
      {
        src: "/products/lumenstream-hoodie-unisex/waist-up.webp",
        alt: "LumenStream Hoodie in grey, worn, waist-up",
      },
      {
        src: "/products/lumenstream-hoodie-unisex/full-body.webp",
        alt: "LumenStream Hoodie in grey, worn, full length",
      },
      {
        src: "/products/lumenstream-hoodie-unisex/side-profile.webp",
        alt: "LumenStream Hoodie in grey, worn, side profile",
      },
    ],
  },
  {
    handle: "metrosync-jacket-womens",
    title: "MetroSync Jacket",
    summary:
      "The MetroSync Jacket is built for the woman who moves between studio sessions and city streets without missing a beat, wrapping you in a clean, monochromatic purple silhouette that feels as polished as it performs.",
    description: [
      "The MetroSync Jacket is built for the woman who moves between studio sessions and city streets without missing a beat, wrapping you in a clean, monochromatic purple silhouette that feels as polished as it performs.",
      "Every seam is considered and every panel is placed with intention, delivering a streamlined layering piece that transitions effortlessly from a morning warm-up to an afternoon out in the urban environment.",
    ],
    price: 168,
    color: "Purple",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "women",
    category: "jackets",
    rating: 4.6,
    reviewCount: 14,
    images: [
      {
        src: "/products/metrosync-jacket-womens/main.webp",
        alt: "MetroSync Jacket in purple, on a neutral studio background",
      },
      {
        src: "/products/metrosync-jacket-womens/waist-up.webp",
        alt: "MetroSync Jacket in purple, worn, waist-up",
      },
      {
        src: "/products/metrosync-jacket-womens/full-body.webp",
        alt: "MetroSync Jacket in purple, worn, full length",
      },
      {
        src: "/products/metrosync-jacket-womens/side-profile.webp",
        alt: "MetroSync Jacket in purple, worn, side profile",
      },
    ],
  },
  {
    handle: "northprime-tee-mens",
    title: "NorthPrime Tee",
    summary:
      "Built for the athlete who demands more from every rep, the NorthPrime Tee pairs a clean white silhouette with a fabric weight that moves with you through every training session.",
    description: [
      "Built for the athlete who demands more from every rep, the NorthPrime Tee pairs a clean white silhouette with a fabric weight that moves with you through every training session.",
      "The relaxed yet tailored cut sits confidently whether you are pushing your limits in the gym or keeping it casual on the move, making it a versatile everyday essential.",
      "The result keeps the piece practical, composed, and ready for steady.",
    ],
    price: 48,
    color: "White",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "men",
    category: "tees",
    rating: 4.3,
    reviewCount: 78,
    images: [
      {
        src: "/products/northprime-tee-mens/main.webp",
        alt: "NorthPrime Tee in white, on a neutral studio background",
      },
      {
        src: "/products/northprime-tee-mens/waist-up.webp",
        alt: "NorthPrime Tee in white, worn, waist-up",
      },
      {
        src: "/products/northprime-tee-mens/full-body.webp",
        alt: "NorthPrime Tee in white, worn, full length",
      },
      {
        src: "/products/northprime-tee-mens/side-profile.webp",
        alt: "NorthPrime Tee in white, worn, side profile",
      },
    ],
  },
  {
    handle: "norththread-hoodie-womens",
    title: "NorthThread Hoodie",
    summary:
      "The NorthThread Hoodie is crafted for women who move with intention, offering a clean silhouette that transitions effortlessly from a morning workout to an afternoon errand run.",
    description: [
      "The NorthThread Hoodie is crafted for women who move with intention, offering a clean silhouette that transitions effortlessly from a morning workout to an afternoon errand run.",
      "Its monochromatic orange finish brings warmth and confidence to every wear, while the relaxed yet structured fit ensures you stay comfortable through every stretch and stride.",
    ],
    price: 118,
    color: "Orange",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "women",
    category: "hoodies",
    rating: 4.7,
    reviewCount: 99,
    images: [
      {
        src: "/products/norththread-hoodie-womens/main.webp",
        alt: "NorthThread Hoodie in orange, on a neutral studio background",
      },
      {
        src: "/products/norththread-hoodie-womens/waist-up.webp",
        alt: "NorthThread Hoodie in orange, worn, waist-up",
      },
      {
        src: "/products/norththread-hoodie-womens/full-body.webp",
        alt: "NorthThread Hoodie in orange, worn, full length",
      },
      {
        src: "/products/norththread-hoodie-womens/side-profile.webp",
        alt: "NorthThread Hoodie in orange, worn, side profile",
      },
    ],
  },
  {
    handle: "orbitstructure-jacket-youth",
    title: "OrbitStructure Jacket",
    summary:
      "The OrbitStructure Jacket is engineered for young athletes who move fast and train hard, offering a clean silhouette that transitions effortlessly from warm-up sessions to the streets.",
    description: [
      "The OrbitStructure Jacket is engineered for young athletes who move fast and train hard, offering a clean silhouette that transitions effortlessly from warm-up sessions to the streets.",
      "Cut from premium technical fabric in sharp monochromatic tones, this jacket delivers structured comfort without a single distraction, keeping the focus entirely on performance and personal style.",
      "The result keeps the piece practical.",
    ],
    price: 168,
    color: "Pink",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "youth",
    category: "jackets",
    rating: 4.3,
    reviewCount: 179,
    images: [
      {
        src: "/products/orbitstructure-jacket-youth/main.webp",
        alt: "OrbitStructure Jacket in pink, on a neutral studio background",
      },
      {
        src: "/products/orbitstructure-jacket-youth/waist-up.webp",
        alt: "OrbitStructure Jacket in pink, worn, waist-up",
      },
      {
        src: "/products/orbitstructure-jacket-youth/full-body.webp",
        alt: "OrbitStructure Jacket in pink, worn, full length",
      },
      {
        src: "/products/orbitstructure-jacket-youth/side-profile.webp",
        alt: "OrbitStructure Jacket in pink, worn, side profile",
      },
    ],
  },
  {
    handle: "paceshift-sweatshirt-youth",
    title: "PaceShift Sweatshirt",
    summary:
      "The PaceShift Sweatshirt is built for young athletes who move between training and downtime.",
    description: [
      "The PaceShift Sweatshirt is built for young athletes who move between training and downtime.",
      "A clean, unadorned silhouette keeps the look sharp whether you're on the track or off it.",
      "Monochromatic tones make it easy to wear and even easier to style.",
    ],
    price: 98,
    color: "Orange",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "youth",
    category: "sweatshirts",
    rating: 4.5,
    reviewCount: 115,
    images: [
      {
        src: "/products/paceshift-sweatshirt-youth/main.webp",
        alt: "PaceShift Sweatshirt in orange, on a neutral studio background",
      },
      {
        src: "/products/paceshift-sweatshirt-youth/waist-up.webp",
        alt: "PaceShift Sweatshirt in orange, worn, waist-up",
      },
      {
        src: "/products/paceshift-sweatshirt-youth/full-body.webp",
        alt: "PaceShift Sweatshirt in orange, worn, full length",
      },
      {
        src: "/products/paceshift-sweatshirt-youth/side-profile.webp",
        alt: "PaceShift Sweatshirt in orange, worn, side profile",
      },
    ],
  },
  {
    handle: "peakcontour-hoodie-mens",
    title: "PeakContour Hoodie",
    summary:
      "The PeakContour Hoodie is engineered for the athlete who demands both performance and refinement.",
    description: [
      "The PeakContour Hoodie is engineered for the athlete who demands both performance and refinement.",
      "Its clean silhouette moves with your body through every rep, sprint, and recovery session.",
      "The result keeps the piece practical, composed.",
      "Crafted in a deep, all-black palette, this hoodie strips away every distraction so you can stay locked in.",
    ],
    price: 118,
    color: "Black",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "men",
    category: "hoodies",
    rating: 4.4,
    reviewCount: 51,
    images: [
      {
        src: "/products/peakcontour-hoodie-mens/main.webp",
        alt: "PeakContour Hoodie in black, on a neutral studio background",
      },
      {
        src: "/products/peakcontour-hoodie-mens/waist-up.webp",
        alt: "PeakContour Hoodie in black, worn, waist-up",
      },
      {
        src: "/products/peakcontour-hoodie-mens/full-body.webp",
        alt: "PeakContour Hoodie in black, worn, full length",
      },
      {
        src: "/products/peakcontour-hoodie-mens/side-profile.webp",
        alt: "PeakContour Hoodie in black, worn, side profile",
      },
    ],
  },
  {
    handle: "peakdrift-hoodie-mens",
    title: "PeakDrift Hoodie",
    summary:
      "The PeakDrift Hoodie is built for training sessions and easy transitions into the rest of your day.",
    description: [
      "The PeakDrift Hoodie is built for training sessions and easy transitions into the rest of your day.",
      "A clean, unadorned silhouette keeps the focus on movement and comfort above all else.",
      "Designed for men who want premium feel without unnecessary detail.",
    ],
    price: 118,
    color: "Black",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "men",
    category: "hoodies",
    rating: 4.7,
    reviewCount: 130,
    images: [
      {
        src: "/products/peakdrift-hoodie-mens/main.webp",
        alt: "PeakDrift Hoodie in black, on a neutral studio background",
      },
      {
        src: "/products/peakdrift-hoodie-mens/waist-up.webp",
        alt: "PeakDrift Hoodie in black, worn, waist-up",
      },
      {
        src: "/products/peakdrift-hoodie-mens/full-body.webp",
        alt: "PeakDrift Hoodie in black, worn, full length",
      },
      {
        src: "/products/peakdrift-hoodie-mens/side-profile.webp",
        alt: "PeakDrift Hoodie in black, worn, side profile",
      },
    ],
  },
  {
    handle: "peakdrive-tee-mens",
    title: "PeakDrive Tee",
    summary:
      "Built for the grind, the PeakDrive Tee delivers a clean, streamlined silhouette for training or downtime.",
    description: [
      "Built for the grind, the PeakDrive Tee delivers a clean, streamlined silhouette for training or downtime.",
      "Available in red, grey, and blue, each colorway is designed to move with you without holding you back.",
      "Minimal by design, free of logos and clutter, so the focus stays on your performance.",
    ],
    price: 48,
    color: "Red",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "men",
    category: "tees",
    rating: 4.9,
    reviewCount: 19,
    images: [
      {
        src: "/products/peakdrive-tee-mens/main.webp",
        alt: "PeakDrive Tee in red, on a neutral studio background",
      },
      {
        src: "/products/peakdrive-tee-mens/waist-up.webp",
        alt: "PeakDrive Tee in red, worn, waist-up",
      },
      {
        src: "/products/peakdrive-tee-mens/full-body.webp",
        alt: "PeakDrive Tee in red, worn, full length",
      },
      {
        src: "/products/peakdrive-tee-mens/side-profile.webp",
        alt: "PeakDrive Tee in red, worn, side profile",
      },
    ],
  },
  {
    handle: "pivotlink-tee-unisex",
    title: "PivotLink Tee",
    summary:
      "The PivotLink Tee is cut for unrestricted movement and all-day comfort, offering a clean silhouette that transitions effortlessly from morning training sessions to casual everyday wear.",
    description: [
      "The PivotLink Tee is cut for unrestricted movement and all-day comfort, offering a clean silhouette that transitions effortlessly from morning training sessions to casual everyday wear.",
      "Crafted in a bold yellow that stays true wash after wash, this unisex crewneck keeps things sharp and simple with zero embellishment, letting the fit and feel do all the talking.",
      "The result keeps the piece practical, composed, and ready.",
    ],
    price: 48,
    color: "Yellow",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "unisex",
    category: "tees",
    rating: 4.6,
    reviewCount: 181,
    images: [
      {
        src: "/products/pivotlink-tee-unisex/main.webp",
        alt: "PivotLink Tee in yellow, on a neutral studio background",
      },
      {
        src: "/products/pivotlink-tee-unisex/waist-up.webp",
        alt: "PivotLink Tee in yellow, worn, waist-up",
      },
      {
        src: "/products/pivotlink-tee-unisex/full-body.webp",
        alt: "PivotLink Tee in yellow, worn, full length",
      },
      {
        src: "/products/pivotlink-tee-unisex/side-profile.webp",
        alt: "PivotLink Tee in yellow, worn, side profile",
      },
    ],
  },
  {
    handle: "pivotprime-tee-mens",
    title: "PivotPrime Tee",
    summary:
      "Cut for movement and built to endure, this tee delivers a clean silhouette that transitions effortlessly from training sessions to casual wear.",
    description: [
      "Cut for movement and built to endure, this tee delivers a clean silhouette that transitions effortlessly from training sessions to casual wear.",
      "The streamlined design keeps things sharp and uncluttered, letting the precise construction and quality fabric speak for themselves every time.",
      "Available in bold black and striking red, each colorway brings a confident, understated energy that pairs well with any performance kit.",
    ],
    price: 48,
    color: "Black",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "men",
    category: "tees",
    rating: 4.5,
    reviewCount: 157,
    images: [
      {
        src: "/products/pivotprime-tee-mens/main.webp",
        alt: "PivotPrime Tee in black, on a neutral studio background",
      },
      {
        src: "/products/pivotprime-tee-mens/waist-up.webp",
        alt: "PivotPrime Tee in black, worn, waist-up",
      },
      {
        src: "/products/pivotprime-tee-mens/full-body.webp",
        alt: "PivotPrime Tee in black, worn, full length",
      },
      {
        src: "/products/pivotprime-tee-mens/side-profile.webp",
        alt: "PivotPrime Tee in black, worn, side profile",
      },
    ],
  },
  {
    handle: "pulseedge-hoodie-womens",
    title: "PulseEdge Hoodie",
    summary:
      "The PulseEdge Hoodie is built for women who move with intention, offering a clean monochromatic silhouette that transitions effortlessly from a morning workout to an afternoon errand run.",
    description: [
      "The PulseEdge Hoodie is built for women who move with intention, offering a clean monochromatic silhouette that transitions effortlessly from a morning workout to an afternoon errand run.",
      "Designed with a full-zip front and an adjustable hood, this piece keeps the focus on refined structure and everyday comfort, making it a reliable layer for any active routine.",
    ],
    price: 118,
    color: "Yellow",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "women",
    category: "hoodies",
    rating: 4.7,
    reviewCount: 62,
    images: [
      {
        src: "/products/pulseedge-hoodie-womens/main.webp",
        alt: "PulseEdge Hoodie in yellow, on a neutral studio background",
      },
      {
        src: "/products/pulseedge-hoodie-womens/waist-up.webp",
        alt: "PulseEdge Hoodie in yellow, worn, waist-up",
      },
      {
        src: "/products/pulseedge-hoodie-womens/full-body.webp",
        alt: "PulseEdge Hoodie in yellow, worn, full length",
      },
      {
        src: "/products/pulseedge-hoodie-womens/side-profile.webp",
        alt: "PulseEdge Hoodie in yellow, worn, side profile",
      },
    ],
  },
  {
    handle: "pulsephase-sweatshirt-womens",
    title: "PulsePhase Sweatshirt",
    summary:
      "The PulsePhase Sweatshirt moves with your rhythm from early morning sessions to laid-back afternoons, wrapping you in a soft, structured fabrication that holds its shape session after session.",
    description: [
      "The PulsePhase Sweatshirt moves with your rhythm from early morning sessions to laid-back afternoons, wrapping you in a soft, structured fabrication that holds its shape session after session.",
      "The result keeps the piece practical.",
      "Cut with a relaxed yet refined silhouette, this grey crewneck layers effortlessly over any training kit or casual outfit, making it the quiet anchor of a wardrobe built for movement and ease.",
      "The result keeps the piece practical, composed.",
    ],
    price: 98,
    color: "Grey",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "women",
    category: "sweatshirts",
    rating: 4.5,
    reviewCount: 122,
    images: [
      {
        src: "/products/pulsephase-sweatshirt-womens/main.webp",
        alt: "PulsePhase Sweatshirt in grey, on a neutral studio background",
      },
      {
        src: "/products/pulsephase-sweatshirt-womens/waist-up.webp",
        alt: "PulsePhase Sweatshirt in grey, worn, waist-up",
      },
      {
        src: "/products/pulsephase-sweatshirt-womens/full-body.webp",
        alt: "PulsePhase Sweatshirt in grey, worn, full length",
      },
      {
        src: "/products/pulsephase-sweatshirt-womens/side-profile.webp",
        alt: "PulsePhase Sweatshirt in grey, worn, side profile",
      },
    ],
  },
  {
    handle: "pulseway-tee-unisex",
    title: "PulseWay Tee",
    summary:
      "The PulseWay Tee is built for movement and ease, offering a clean silhouette that transitions effortlessly from a morning run to the rest of your day without missing a beat.",
    description: [
      "The PulseWay Tee is built for movement and ease, offering a clean silhouette that transitions effortlessly from a morning run to the rest of your day without missing a beat.",
      "The result keeps the piece practical, composed, and ready for steady.",
    ],
    price: 48,
    color: "Brown",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "unisex",
    category: "tees",
    rating: 4.5,
    reviewCount: 73,
    images: [
      {
        src: "/products/pulseway-tee-unisex/main.webp",
        alt: "PulseWay Tee in brown, on a neutral studio background",
      },
      {
        src: "/products/pulseway-tee-unisex/waist-up.webp",
        alt: "PulseWay Tee in brown, worn, waist-up",
      },
      {
        src: "/products/pulseway-tee-unisex/full-body.webp",
        alt: "PulseWay Tee in brown, worn, full length",
      },
      {
        src: "/products/pulseway-tee-unisex/side-profile.webp",
        alt: "PulseWay Tee in brown, worn, side profile",
      },
    ],
  },
  {
    handle: "rallyhaven-tee-womens",
    title: "RallyHaven Tee",
    summary:
      "The RallyHaven Tee is crafted for women who move with purpose, offering a clean, streamlined silhouette that transitions effortlessly from morning studio sessions to the rest of your day.",
    description: [
      "The RallyHaven Tee is crafted for women who move with purpose, offering a clean, streamlined silhouette that transitions effortlessly from morning studio sessions to the rest of your day.",
      "Cut from a smooth, lightweight fabric in a rich purple tone, this tee layers beautifully and holds its shape through every stretch, reach, and rep you put into your routine.",
    ],
    price: 48,
    color: "Purple",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "women",
    category: "tees",
    rating: 4.8,
    reviewCount: 154,
    images: [
      {
        src: "/products/rallyhaven-tee-womens/main.webp",
        alt: "RallyHaven Tee in purple, on a neutral studio background",
      },
      {
        src: "/products/rallyhaven-tee-womens/waist-up.webp",
        alt: "RallyHaven Tee in purple, worn, waist-up",
      },
      {
        src: "/products/rallyhaven-tee-womens/full-body.webp",
        alt: "RallyHaven Tee in purple, worn, full length",
      },
      {
        src: "/products/rallyhaven-tee-womens/side-profile.webp",
        alt: "RallyHaven Tee in purple, worn, side profile",
      },
    ],
  },
  {
    handle: "roamband-hoodie-mens",
    title: "RoamBand Hoodie",
    summary:
      "Built for the space between the gym and the street, the RoamBand Hoodie delivers a clean, structured silhouette in tonal black and grey that moves with you through every part of your day.",
    description: [
      "Built for the space between the gym and the street, the RoamBand Hoodie delivers a clean, structured silhouette in tonal black and grey that moves with you through every part of your day.",
      "Crafted with a premium heavyweight fabric, this hoodie features a relaxed fit and refined finishing that keeps the look sharp whether you are warming up, cooling down, or heading out.",
    ],
    price: 70.8,
    compareAtPrice: 118,
    color: "Black",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "men",
    category: "hoodies",
    rating: 4.4,
    reviewCount: 180,
    images: [
      {
        src: "/products/roamband-hoodie-mens/main.webp",
        alt: "RoamBand Hoodie in black, on a neutral studio background",
      },
      {
        src: "/products/roamband-hoodie-mens/waist-up.webp",
        alt: "RoamBand Hoodie in black, worn, waist-up",
      },
      {
        src: "/products/roamband-hoodie-mens/full-body.webp",
        alt: "RoamBand Hoodie in black, worn, full length",
      },
      {
        src: "/products/roamband-hoodie-mens/side-profile.webp",
        alt: "RoamBand Hoodie in black, worn, side profile",
      },
    ],
  },
  {
    handle: "summitstretch-jacket-womens",
    title: "SummitStretch Jacket",
    summary:
      "Engineered for movement and refined for everyday wear, the SummitStretch Jacket wraps you in a clean, monochromatic orange silhouette that transitions effortlessly from morning training to the rest of your day.",
    description: [
      "Engineered for movement and refined for everyday wear, the SummitStretch Jacket wraps you in a clean, monochromatic orange silhouette that transitions effortlessly from morning training to the rest of your day.",
      "Its sleek, unadorned exterior pairs with a thoughtfully tailored fit that moves with your body, making it the kind of versatile layering piece you reach for again and again without a second thought.",
      "The result keeps the piece practical.",
    ],
    price: 168,
    color: "Orange",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "women",
    category: "jackets",
    rating: 4.4,
    reviewCount: 20,
    images: [
      {
        src: "/products/summitstretch-jacket-womens/main.webp",
        alt: "SummitStretch Jacket in orange, on a neutral studio background",
      },
      {
        src: "/products/summitstretch-jacket-womens/waist-up.webp",
        alt: "SummitStretch Jacket in orange, worn, waist-up",
      },
      {
        src: "/products/summitstretch-jacket-womens/full-body.webp",
        alt: "SummitStretch Jacket in orange, worn, full length",
      },
      {
        src: "/products/summitstretch-jacket-womens/side-profile.webp",
        alt: "SummitStretch Jacket in orange, worn, side profile",
      },
    ],
  },
  {
    handle: "swiftedge-jacket-womens",
    title: "SwiftEdge Jacket",
    summary:
      "The SwiftEdge Jacket is built for women who move with purpose and dress with intention.",
    description: [
      "The SwiftEdge Jacket is built for women who move with purpose and dress with intention.",
      "A clean, streamlined silhouette in a bold monochromatic red makes a statement without saying a word.",
      "Designed for the transition between training and everyday life, effortlessly and with confidence.",
    ],
    price: 168,
    color: "Red",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "women",
    category: "jackets",
    rating: 4.5,
    reviewCount: 98,
    images: [
      {
        src: "/products/swiftedge-jacket-womens/main.webp",
        alt: "SwiftEdge Jacket in red, on a neutral studio background",
      },
      {
        src: "/products/swiftedge-jacket-womens/waist-up.webp",
        alt: "SwiftEdge Jacket in red, worn, waist-up",
      },
      {
        src: "/products/swiftedge-jacket-womens/full-body.webp",
        alt: "SwiftEdge Jacket in red, worn, full length",
      },
      {
        src: "/products/swiftedge-jacket-womens/side-profile.webp",
        alt: "SwiftEdge Jacket in red, worn, side profile",
      },
    ],
  },
  {
    handle: "swiftedge-jacket-youth",
    title: "SwiftEdge Jacket",
    summary: "The SwiftEdge jacket is built for young athletes who move fast and stay sharp.",
    description: [
      "The SwiftEdge jacket is built for young athletes who move fast and stay sharp.",
      "Clean lines and a sleek silhouette keep the look minimal and ready for any setting.",
      "Wear it from early morning drills to the rest of the day without missing a beat.",
    ],
    price: 168,
    color: "Purple",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "youth",
    category: "jackets",
    rating: 4.7,
    reviewCount: 108,
    images: [
      {
        src: "/products/swiftedge-jacket-youth/main.webp",
        alt: "SwiftEdge Jacket in purple, on a neutral studio background",
      },
      {
        src: "/products/swiftedge-jacket-youth/waist-up.webp",
        alt: "SwiftEdge Jacket in purple, worn, waist-up",
      },
      {
        src: "/products/swiftedge-jacket-youth/full-body.webp",
        alt: "SwiftEdge Jacket in purple, worn, full length",
      },
      {
        src: "/products/swiftedge-jacket-youth/side-profile.webp",
        alt: "SwiftEdge Jacket in purple, worn, side profile",
      },
    ],
  },
  {
    handle: "trekproof-jacket-womens",
    title: "TrekProof Jacket",
    summary: "The TrekProof Jacket is built for movement that refuses to slow down.",
    description: [
      "The TrekProof Jacket is built for movement that refuses to slow down.",
      "Clean lines and a streamlined silhouette make it equally at home on a morning run or a casual weekend errand without sacrificing an ounce of performance.",
      "Rendered in a bold monochromatic yellow, this jacket brings understated confidence to every outing.",
      "The unadorned finish keeps the focus on form and function, making it a versatile anchor piece in any active wardrobe rotation.",
    ],
    price: 168,
    color: "Yellow",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "women",
    category: "jackets",
    rating: 4.9,
    reviewCount: 34,
    images: [
      {
        src: "/products/trekproof-jacket-womens/main.webp",
        alt: "TrekProof Jacket in yellow, on a neutral studio background",
      },
      {
        src: "/products/trekproof-jacket-womens/waist-up.webp",
        alt: "TrekProof Jacket in yellow, worn, waist-up",
      },
      {
        src: "/products/trekproof-jacket-womens/full-body.webp",
        alt: "TrekProof Jacket in yellow, worn, full length",
      },
      {
        src: "/products/trekproof-jacket-womens/side-profile.webp",
        alt: "TrekProof Jacket in yellow, worn, side profile",
      },
    ],
  },
  {
    handle: "venturefield-jacket-womens",
    title: "VentureField Jacket",
    summary:
      "The VentureField Jacket is built for movement that takes you from early morning training sessions to the city streets without missing a beat or compromising on clean, refined style.",
    description: [
      "The VentureField Jacket is built for movement that takes you from early morning training sessions to the city streets without missing a beat or compromising on clean, refined style.",
      "The result keeps the piece practical, composed, and ready.",
      "Clean seams and a streamlined silhouette keep every line intentional, while the structured yet flexible construction adapts to your pace whether you are pushing hard or winding down.",
    ],
    price: 168,
    color: "Black",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "women",
    category: "jackets",
    rating: 4.7,
    reviewCount: 159,
    images: [
      {
        src: "/products/venturefield-jacket-womens/main.webp",
        alt: "VentureField Jacket in black, on a neutral studio background",
      },
      {
        src: "/products/venturefield-jacket-womens/waist-up.webp",
        alt: "VentureField Jacket in black, worn, waist-up",
      },
      {
        src: "/products/venturefield-jacket-womens/full-body.webp",
        alt: "VentureField Jacket in black, worn, full length",
      },
      {
        src: "/products/venturefield-jacket-womens/side-profile.webp",
        alt: "VentureField Jacket in black, worn, side profile",
      },
    ],
  },
  {
    handle: "vistaprime-tee-unisex",
    title: "VistaPrime Tee",
    summary:
      "The VistaPrime Tee delivers a clean, relaxed silhouette built for movement and everyday wear, crafted from a smooth, breathable fabric that keeps you comfortable from morning training to afternoon errands.",
    description: [
      "The VistaPrime Tee delivers a clean, relaxed silhouette built for movement and everyday wear, crafted from a smooth, breathable fabric that keeps you comfortable from morning training to afternoon errands.",
      "Its streamlined, monochromatic green design strips away all distractions so the focus stays on how you feel and move, making it an effortless staple in any performance-minded wardrobe.",
    ],
    price: 48,
    color: "Green",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "unisex",
    category: "tees",
    rating: 4.9,
    reviewCount: 19,
    images: [
      {
        src: "/products/vistaprime-tee-unisex/main.webp",
        alt: "VistaPrime Tee in green, on a neutral studio background",
      },
      {
        src: "/products/vistaprime-tee-unisex/waist-up.webp",
        alt: "VistaPrime Tee in green, worn, waist-up",
      },
      {
        src: "/products/vistaprime-tee-unisex/full-body.webp",
        alt: "VistaPrime Tee in green, worn, full length",
      },
      {
        src: "/products/vistaprime-tee-unisex/side-profile.webp",
        alt: "VistaPrime Tee in green, worn, side profile",
      },
    ],
  },
  {
    handle: "waypointstack-sweatshirt-womens",
    title: "WaypointStack Sweatshirt",
    summary:
      "The WaypointStack Sweatshirt is built for the woman who moves with intention, offering a clean silhouette and a relaxed fit that transitions effortlessly from studio warmup to weekend errands.",
    description: [
      "The WaypointStack Sweatshirt is built for the woman who moves with intention, offering a clean silhouette and a relaxed fit that transitions effortlessly from studio warmup to weekend errands.",
      "The result keeps the piece practical.",
      "Crafted in a soft, substantial fleece, this white sweatshirt keeps its shape wash after wash while the unadorned design ensures it pairs seamlessly with every piece already in your wardrobe.",
      "The result keeps the piece practical, composed.",
    ],
    price: 98,
    color: "White",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "women",
    category: "sweatshirts",
    rating: 4.7,
    reviewCount: 139,
    images: [
      {
        src: "/products/waypointstack-sweatshirt-womens/main.webp",
        alt: "WaypointStack Sweatshirt in white, on a neutral studio background",
      },
      {
        src: "/products/waypointstack-sweatshirt-womens/waist-up.webp",
        alt: "WaypointStack Sweatshirt in white, worn, waist-up",
      },
      {
        src: "/products/waypointstack-sweatshirt-womens/full-body.webp",
        alt: "WaypointStack Sweatshirt in white, worn, full length",
      },
      {
        src: "/products/waypointstack-sweatshirt-womens/side-profile.webp",
        alt: "WaypointStack Sweatshirt in white, worn, side profile",
      },
    ],
  },
] as const satisfies readonly Product[];

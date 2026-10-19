import { site } from "./site";

// The store's policies. Template copy: have it reviewed before you take real orders.

export interface Policy {
  slug: string;
  title: string;
  description: string;
  updated: string;
  sections: readonly { heading: string; paragraphs: readonly string[] }[];
  faq?: readonly { question: string; answer: string }[];
}

export const policies = [
  {
    slug: "shipping-returns",
    title: "Shipping and returns",
    description: `Complimentary shipping over $${site.freeShippingThreshold}, express delivery and free returns within ${site.returnDays} days.`,
    updated: "2026-10-01",
    sections: [
      {
        heading: "Shipping",
        paragraphs: [
          `Standard shipping is complimentary on orders over $${site.freeShippingThreshold}, and $12 below that. Orders leave the atelier within one working day and arrive in three to five.`,
          "Express delivery arrives in one to two working days and can be chosen at checkout. Every order is tracked, and you'll receive the tracking link by email as soon as it ships.",
        ],
      },
      {
        heading: "Returns",
        paragraphs: [
          `Returns are free within ${site.returnDays} days of delivery. Pieces should be unworn, unwashed and with their tags attached.`,
          "Start a return from the link in your shipping email. Once it reaches us, your refund is issued to the original payment method within five working days.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I exchange a size?",
        answer:
          "Yes. Return the piece for a refund and place a new order for the size you need, so you're not left waiting for the exchange to travel both ways.",
      },
      {
        question: "Do you ship internationally?",
        answer:
          "This demo store ships within the United States. Duties, rates and countries are set by the commerce platform you connect.",
      },
      {
        question: "My order arrived damaged. What now?",
        answer: `Write to ${site.email} with your order number and a photograph, and we'll send a replacement at once.`,
      },
    ],
  },
  {
    slug: "privacy",
    title: "Privacy",
    description: `How ${site.name} collects, uses and protects your personal information.`,
    updated: "2026-10-01",
    sections: [
      {
        heading: "What we collect",
        paragraphs: [
          "When you place an order we collect your name, email, shipping address and the details needed to process payment. When you join our letters we keep your email address.",
          "Your bag is stored in your own browser, on your device, and isn't sent to us until you check out.",
        ],
      },
      {
        heading: "How we use it",
        paragraphs: [
          "We use your information to fulfil orders, to answer your questions and, if you've asked for them, to send our letters. We never sell your information.",
          `You can ask to see, correct or delete the information we hold about you at any time by writing to ${site.email}.`,
        ],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of service",
    description: `The terms that apply when you shop with ${site.name}.`,
    updated: "2026-10-01",
    sections: [
      {
        heading: "Orders and pricing",
        paragraphs: [
          "Prices are shown in US dollars and include any discounts. An order is confirmed once payment is taken and we've sent a confirmation email.",
          "We make every effort to show our pieces' colors accurately, but the color you see depends on your screen.",
        ],
      },
      {
        heading: "This store",
        paragraphs: [
          "This is a demonstration storefront. No orders are taken and no payments are processed until a checkout is connected.",
        ],
      },
    ],
  },
] as const satisfies readonly Policy[];

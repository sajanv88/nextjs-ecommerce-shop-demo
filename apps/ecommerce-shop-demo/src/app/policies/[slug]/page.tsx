import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@nuvui/react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { JsonLd } from "@/components/json-ld/json-ld";
import { TextSkeleton } from "@/components/page-skeleton/page-skeleton";
import { SiteBreadcrumb } from "@/components/site-breadcrumb/site-breadcrumb";
import { pageMetadata } from "@/lib/metadata";
import { type Policy, policies } from "@/lib/policies";
import { breadcrumbJsonLd } from "@/lib/seo";
import "./policy.scss";

// Prerendered at build; an unknown handle gets a 404 status from src/proxy.ts.
export function generateStaticParams() {
  return policies.map((policy) => ({ slug: policy.slug }));
}

function findPolicy(slug: string): Policy | undefined {
  return policies.find((policy) => policy.slug === slug);
}

export async function generateMetadata({
  params,
}: PageProps<"/policies/[slug]">): Promise<Metadata> {
  const policy = findPolicy((await params).slug);
  if (!policy) return {};
  return pageMetadata({
    title: policy.title,
    description: policy.description,
    path: `/policies/${policy.slug}`,
  });
}

// The URL is read inside a Suspense boundary, so a navigation shows the skeleton at once and
// the page streams in behind it. The HTML still carries the whole page for search engines.
export default function PolicyPage(props: PageProps<"/policies/[slug]">) {
  return (
    <Suspense fallback={<TextSkeleton />}>
      <PolicyContent {...props} />
    </Suspense>
  );
}

async function PolicyContent({ params }: PageProps<"/policies/[slug]">) {
  const policy = findPolicy((await params).slug);
  if (!policy) notFound();

  const trail = [
    { name: "Home", path: "/" },
    { name: policy.title, path: `/policies/${policy.slug}` },
  ] as const;
  const updated = new Date(`${policy.updated}T00:00:00Z`).toLocaleDateString("en-US", {
    dateStyle: "long",
    timeZone: "UTC",
  });

  return (
    <article className="page page--narrow policy">
      <SiteBreadcrumb trail={trail} />
      <header className="policy__header">
        <p className="page__eyebrow">Client care</p>
        <h1 className="page__title">{policy.title}</h1>
        <p className="page__meta">
          Last updated <time dateTime={policy.updated}>{updated}</time>
        </p>
      </header>

      {policy.sections.map((section) => (
        <section key={section.heading} className="policy__section">
          <h2 className="policy__heading">{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="policy__text">
              {paragraph}
            </p>
          ))}
        </section>
      ))}

      {policy.faq && (
        <section className="policy__section" aria-labelledby="policy-faq">
          <h2 id="policy-faq" className="policy__heading">
            Questions
          </h2>
          <Accordion type="single" collapsible className="policy__faq">
            {policy.faq.map((entry) => (
              <AccordionItem key={entry.question} value={entry.question}>
                <AccordionTrigger headingLevel={3}>{entry.question}</AccordionTrigger>
                <AccordionContent forceMount className="policy__answer">
                  {entry.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      )}

      <p className="policy__text policy__more">
        Anything else? See <Link href="/policies/shipping-returns">shipping and returns</Link>,{" "}
        <Link href="/policies/privacy">privacy</Link> and <Link href="/policies/terms">terms</Link>.
      </p>

      <JsonLd data={breadcrumbJsonLd(trail)} />
      {policy.faq && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: policy.faq.map((entry) => ({
              "@type": "Question",
              name: entry.question,
              acceptedAnswer: { "@type": "Answer", text: entry.answer },
            })),
          }}
        />
      )}
    </article>
  );
}

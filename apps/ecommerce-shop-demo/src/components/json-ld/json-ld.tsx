import { headers } from "next/headers";

// Structured data for search engines. The script carries the request's CSP nonce, and `<` is
// escaped so a value in the data can never close the script element.
export async function JsonLd({ data }: { data: object }) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      nonce={nonce}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: serialized JSON with `<` escaped, built on the server from our own data
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}

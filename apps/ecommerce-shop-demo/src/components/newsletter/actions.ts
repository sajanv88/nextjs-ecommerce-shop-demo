"use server";

import * as v from "valibot";

export type NewsletterState =
  | { status: "idle" }
  | { status: "subscribed"; email: string }
  | { status: "invalid"; error: string };

const Subscription = v.object({
  email: v.pipe(
    v.string(),
    v.trim(),
    v.toLowerCase(),
    v.maxLength(254, "That address is too long."),
    v.email("Enter an email address, such as name@example.com."),
  ),
});

// A public sign-up, so there's no session to check: the input is validated and nothing else
// is trusted. Send `email` to your email provider here, from the server, with its secret key
// read inside this function.
export async function subscribe(_: NewsletterState, form: FormData): Promise<NewsletterState> {
  const input = v.safeParse(Subscription, { email: form.get("email") ?? "" });
  if (!input.success) {
    return { status: "invalid", error: input.issues[0]?.message ?? "Enter an email address." };
  }
  return { status: "subscribed", email: input.output.email };
}

"use client";

import { ArrowRightIcon } from "@nuvui/icons";
import {
  Button,
  Field,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldLabel,
  Input,
  toast,
} from "@nuvui/react";
import { useActionState, useEffect } from "react";
import { type NewsletterState, subscribe } from "./actions";
import "./newsletter-form.scss";

const initial: NewsletterState = { status: "idle" };

export function NewsletterForm() {
  const [state, action, pending] = useActionState(subscribe, initial);

  useEffect(() => {
    if (state.status !== "subscribed") return;
    toast("You're on the list", {
      intent: "success",
      description: `We'll write to ${state.email} when the next collection arrives.`,
    });
  }, [state]);

  const error = state.status === "invalid" ? state.error : undefined;

  return (
    <form className="newsletter-form" action={action} noValidate>
      <Field className="newsletter-form__field" invalid={Boolean(error)}>
        <FieldLabel className="newsletter-form__label">Email address</FieldLabel>
        <div className="newsletter-form__row">
          <FieldControl>
            <Input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
              key={state.status === "subscribed" ? "sent" : "draft"}
            />
          </FieldControl>
          <Button type="submit" disabled={pending}>
            {pending ? "Joining…" : "Join"}
            <ArrowRightIcon size={16} />
          </Button>
        </div>
        {error ? (
          <FieldError>{error}</FieldError>
        ) : (
          <FieldDescription>Early access to new collections. No noise, ever.</FieldDescription>
        )}
      </Field>
    </form>
  );
}

"use client";

import Link from "next/link";
import { ComponentProps } from "react";
import { Button } from "ui/src/components/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "ui/src/components/field";
import { Input } from "ui/src/components/input/page";
import { cn } from "ui/src/utils/cn";

export function SignupForm({ className, ...props }: ComponentProps<"form">) {
  return (
    <form
      className={cn("flex w-full flex-col gap-6 max-w-sm", className)}
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      {...props}
    >
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">Full Name</FieldLabel>
          <Input
            autoComplete="name webauthn"
            id="name"
            name="name"
            placeholder="John Doe"
            required
            type="text"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            autoComplete="email webauthn"
            id="email"
            name="email"
            placeholder="m@example.com"
            required
            type="email"
          />
        </Field>

        <Field>
          <Button type="submit">Create Account</Button>
        </Field>
        <Field>
          <FieldDescription className="px-6 text-center">
            Already have an account? <Link href="/login">Log In</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}

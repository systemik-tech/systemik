"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { Button } from "ui/src/components/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "ui/src/components/field";
import { Input } from "ui/src/components/input/page";
import { cn } from "ui/src/utils/cn";

export const LoginForm = ({ className, ...props }: ComponentProps<"form">) => {
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
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            autoComplete="email webauthn"
            id="email"
            name="email"
            placeholder="m@example.com"
            required
            type="email"
          />
          <Field>
            <Button type="submit">Login</Button>
          </Field>
        </Field>
        <Field>
          <FieldDescription className="text-center">
            Don&apos;t have an account?{" "}
            <Link
              className="underline underline-offset-4"
              href="/create-account"
            >
              Create Account
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
};

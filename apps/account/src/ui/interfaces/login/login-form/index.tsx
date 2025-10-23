"use client";

import { AuthError } from "@supabase/supabase-js";
import { useForm, useStore } from "@tanstack/react-form";
import Link from "next/link";
import type { ComponentProps } from "react";
import { toast } from "sonner";
import { Button } from "ui/src/components/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "ui/src/components/field";
import { Input } from "ui/src/components/input/page";
import { cn } from "ui/src/utils/cn";
import { z } from "zod";
import { login } from "@/lib/actions/login";

const formSchema = z.object({
  email: z.email({
    pattern: z.regexes.email,
    message: "A valid email is required.",
  }),
});

export const LoginForm = ({ className, ...props }: ComponentProps<"form">) => {
  const form = useForm({
    defaultValues: {
      email: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        await login(value.email);
      } catch (error: unknown) {
        if (error instanceof AuthError) {
          toast.error(error.message);
        }
      }
    },
  });
  const canSubmit = useStore(form.store, (state) => state.canSubmit);
  const isSubmitting = useStore(form.store, (state) => state.isSubmitting);

  return (
    <form
      className={cn("flex w-full flex-col gap-6 max-w-sm", className)}
      id="login-form"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      {...props}
    >
      <FieldGroup>
        <form.Field name="email">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                <Input
                  aria-invalid={isInvalid}
                  autoComplete="email webauthn"
                  id={field.name}
                  name={field.name}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="m@example.com"
                  required
                  type="email"
                  value={field.state.value}
                />
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            );
          }}
        </form.Field>
        <Field>
          <Button disabled={!canSubmit} type="submit">
            {isSubmitting ? "..." : "Login"}
          </Button>
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

"use client";

import { useForm, useStore } from "@tanstack/react-form";
import Link from "next/link";
import { ComponentProps, CSSProperties } from "react";
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
import { signup } from "@/lib/actions/signup";
import { signupSchema } from "@/lib/validators/signup";

export function SignupForm({ className, ...props }: ComponentProps<"form">) {
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
    },
    validators: {
      onSubmit: signupSchema,
    },
    onSubmit: async ({ value }) => {
      const { success, message } = await signup(value);
      if (!success) {
        toast.error("An error occurred.", {
          description: <p className="text-destructive">{message}</p>,
          position: "bottom-right",
          classNames: {
            content: "flex flex-col gap-2",
          },
          style: {
            "--border-radius": "calc(var(--radius)  + 4px)",
          } as CSSProperties,
        });
      }
    },
  });
  const isSubmitting = useStore(form.store, (state) => state.isSubmitting);

  return (
    <form
      className={cn("flex w-full flex-col gap-6 max-w-sm", className)}
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      {...props}
    >
      <FieldGroup>
        <form.Field name="fullName">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                <Input
                  aria-invalid={isInvalid}
                  autoComplete="name webauthn"
                  disabled={isSubmitting}
                  id={field.name}
                  name={field.name}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="John Doe"
                  required
                  type="text"
                  value={field.state.value}
                />
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            );
          }}
        </form.Field>
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
                  disabled={isSubmitting}
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
          <Button type="submit">{isSubmitting ? "..." : "Submit"}</Button>
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

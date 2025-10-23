"use client";

import { useForm, useStore } from "@tanstack/react-form";
import { ComponentProps } from "react";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "ui/src/components/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  REGEXP_ONLY_DIGITS,
} from "ui/src/components/input-otp";
import { Spinner } from "ui/src/components/spinner";
import { cn } from "ui/src/utils/cn";
import { z } from "zod";
import { verifyOtp } from "@/lib/actions/verify";

type OTPFormProps = ComponentProps<"div"> & {
  email: string;
};

const OTP_LENGTH = 6;
const formSchema = z.object({
  otp: z.string().length(OTP_LENGTH, "OTP must be 6 digits"),
});

export function OTPForm({ email, className, ...props }: OTPFormProps) {
  const form = useForm({
    defaultValues: { otp: "" },
    validators: { onSubmit: formSchema },
    onSubmit: async ({ value }) => {
      // Pass email along with otp to the verify function
      const { success, message } = await verifyOtp({
        email,
        otp: value.otp,
      });

      if (!success) {
        // You can show an error message in the UI
        alert(message);
      } else {
        // Optional: redirect user to confirm page
        window.location.href = "/confirm";
      }
    },
  });

  const isSubmitting = useStore(form.store, (state) => state.isSubmitting);

  return (
    <div
      className={cn(
        "flex w-full flex-col items-center lg:items-start lg:justify-start max-w-sm",
        className
      )}
      {...props}
    >
      <form
        className="flex w-full max-w-sm lg:justify-start flex-col gap-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <FieldGroup className="flex w-full justify-start">
          <form.Field name="otp">
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;

              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel className="sr-only" htmlFor={field.name}>
                    Verification code
                  </FieldLabel>

                  <div className="relative flex justify-center">
                    <InputOTP
                      containerClassName="justify-center"
                      disabled={isSubmitting}
                      id={field.name}
                      maxLength={6}
                      onChange={(value) => {
                        field.handleChange(value);
                        if (
                          value.length === OTP_LENGTH &&
                          field.state.meta.isValid
                        ) {
                          form.handleSubmit();
                        }
                      }}
                      pattern={REGEXP_ONLY_DIGITS}
                      value={field.state.value}
                    >
                      <div className="flex justify-center gap-3">
                        <InputOTPGroup className="gap-3">
                          {[0, 1, 2, 3, 4, 5].map((i) => (
                            <InputOTPSlot
                              className={cn(
                                "h-14 w-12 rounded-lg border-2 border-input text-lg transition-all",
                                isSubmitting
                                  ? "cursor-not-allowed opacity-50"
                                  : "data-[active=true]:border-ring"
                              )}
                              index={i}
                              key={i}
                            />
                          ))}
                        </InputOTPGroup>
                      </div>
                    </InputOTP>

                    {isSubmitting && (
                      <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-background/60 backdrop-blur-sm">
                        <Spinner className="size-6 text-primary" />
                      </div>
                    )}
                  </div>

                  <FieldDescription className="text-center">
                    {(() => {
                      if (isInvalid) {
                        return field.state.meta.errors.join(", ");
                      }
                      if (isSubmitting) {
                        return "Verifying your code...";
                      }
                      return "Enter the 6-digit code sent to your email.";
                    })()}
                  </FieldDescription>
                </Field>
              );
            }}
          </form.Field>

          <FieldDescription className="text-center lg:text-left text-sm">
            Didn&apos;t receive the code?{" "}
            <a className="underline underline-offset-2" href="#">
              Resend
            </a>
          </FieldDescription>
        </FieldGroup>
      </form>
    </div>
  );
}

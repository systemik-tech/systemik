"use client";

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
} from "ui/src/components/input-otp";
import { cn } from "ui/src/utils/cn";

export function OTPForm({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        // Make sure the outer container is not enforcing center alignment on large screens
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
          <Field className="w-full flex justify-start">
            <FieldLabel className="sr-only" htmlFor="otp">
              Verification code
            </FieldLabel>

            {/* Align center on mobile, left on large */}

            <InputOTP
              containerClassName="justify-center lg:justify-start"
              id="otp"
              maxLength={6}
            >
              <div className="flex justify-center lg:justify-start gap-3">
                <InputOTPGroup className="gap-3">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <InputOTPSlot
                      className={cn(
                        "h-14 w-12 rounded-lg border-2 border-input text-lg transition-all",
                        "data-[active=true]:border-ring"
                      )}
                      index={i}
                      key={i}
                    />
                  ))}
                </InputOTPGroup>
              </div>
            </InputOTP>

            <FieldDescription className="text-center lg:text-left">
              Enter the 6-digit code sent to your email.
            </FieldDescription>
          </Field>

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

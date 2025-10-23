"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { type SignupData } from "@/lib/validators/signup";

type SignupResult = {
  success: boolean;
  message?: string;
};

export async function signup(values: SignupData): Promise<SignupResult> {
  console.log("[SIGNUP] Starting signup for email:", values.email);

  const supabase = await createClient();

  try {
    console.log("[SIGNUP] Calling supabase.auth.signInWithOtp...");
    const { data, error } = await supabase.auth.signInWithOtp({
      email: values.email,
      options: {
        shouldCreateUser: true,
        data: { full_name: values.fullName },
      },
    });

    if (error) {
      console.error("[SIGNUP] Supabase returned an error:", error);
      return {
        success: false,
        message:
          error.message ||
          "Failed to send verification email. Please try again.",
      };
    }

    console.log(
      `[SIGNUP] OTP sent successfully for ${values.email}. Redirecting to verify page...`
    );
    const encodedEmail = encodeURIComponent(values.email);

    // This will throw a NEXT_REDIRECT (expected!)
    redirect(`/create-account/verify?email=${encodedEmail}`);
  } catch (err: any) {
    // Ignore Next.js redirect "errors"
    if (err?.digest?.startsWith("NEXT_REDIRECT")) {
      console.log("[SIGNUP] Redirect handled by Next.js runtime.");
      throw err; // rethrow so Next.js can complete the redirect
    }

    console.error("[SIGNUP] Unexpected exception during signup:", err);
    if (err?.cause) console.error("[SIGNUP] Error cause:", err.cause);

    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}

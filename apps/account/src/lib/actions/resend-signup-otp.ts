"use server";

import { createClient } from "@/lib/supabase/server";

type ResendOtpParams = {
  email: string;
};

type ResendOtpResult = {
  success: boolean;
  message: string;
};

export async function resendSignupOtp(
  values: ResendOtpParams
): Promise<ResendOtpResult> {
  try {
    const supabase = await createClient();

    const { error } = await supabase.auth.resend({
      type: "signup",
      email: values.email,
    });

    if (error) {
      return {
        success: false,
        message:
          error.message ||
          "Failed to resend verification email. Please try again.",
      };
    }

    return {
      success: true,
      message:
        "Verification email resent successfully. Please check your inbox.",
    };
  } catch (err) {
    console.error("Error resending OTP:", err);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}

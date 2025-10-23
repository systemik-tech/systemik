"use server";

import { createClient } from "@/lib/supabase/server";

type VerifySignupParams = {
  email: string;
  otp: string;
};

type VerifySignupResult = {
  success: boolean;
  message: string;
};

export async function verifyOtp(
  values: VerifySignupParams
): Promise<VerifySignupResult> {
  try {
    const supabase = await createClient();

    const { error } = await supabase.auth.verifyOtp({
      email: values.email,
      token: values.otp,
      type: "email",
    });

    if (error) {
      // Customize error message based on error.code or error.message if you want
      return {
        success: false,
        message:
          "The verification code is incorrect or has expired. Please try again.",
      };
    }

    return {
      success: true,
      message: "Your email has been successfully verified!",
    };
  } catch (err) {
    console.error("Error verifying OTP:", err);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}

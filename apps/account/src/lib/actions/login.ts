"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function login(email: string) {
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: false,
    },
  });
  if (error) {
    throw error;
  }

  const encodedEmail = encodeURIComponent(email);

  // This will throw a NEXT_REDIRECT (expected!)
  redirect(`/login/verify?email=${encodedEmail}`);
}

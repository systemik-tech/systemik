import { ReactNode } from "react";
import { createClient } from "@/lib/supabase/server";
import { EmptyAuth } from "@/ui/interfaces/empty-auth";
import { AuthLayoutComponent } from "@/ui/layouts/auth-layout";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();

  if (data?.claims) {
    return <EmptyAuth email={data.claims.email} />;
  }

  return <AuthLayoutComponent>{children}</AuthLayoutComponent>;
}

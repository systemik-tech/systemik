import { ReactNode } from "react";
import { AuthLayoutComponent } from "@/ui/layouts/auth-layout";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <AuthLayoutComponent>{children}</AuthLayoutComponent>;
}

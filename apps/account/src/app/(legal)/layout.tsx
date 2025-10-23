import type { ReactNode } from "react";
import { Container } from "@/ui/layouts/container";

export default function LegalLayout({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}

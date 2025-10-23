import Link from "next/link";
import { ReactNode } from "react";
import { BrandLogo } from "@/ui/components/brand-logo";
import { Container } from "@/ui/layouts/container";
import { H2 } from "@/ui/typography/h2";

export const AuthLayoutComponent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid min-h-svh grid-cols-1 lg:grid-cols-5">
      <Container className="relative hidden py-24 bg-neutral-300 lg:flex flex-col items-start justify-between lg:col-span-2">
        <div className="flex flex-col gap-8 text-balance">
          <BrandLogo />
          <H2>
            SystemiK is the online <br /> digital powerhouse.
          </H2>
        </div>
        <div className="flex flex-col gap-4 text-slate-800 text-sm">
          <Link href="/help">Help</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
      </Container>
      <div className="p-8 md:p-24 flex flex-col justify-center h-full lg:col-span-3">
        <div className="w-full flex justify-center">
          <BrandLogo className="hidden" />
        </div>
        {children}
      </div>
    </div>
  );
};

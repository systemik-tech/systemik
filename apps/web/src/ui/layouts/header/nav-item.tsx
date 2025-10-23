"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "ui/src/components/button";
import { cn } from "ui/src/utils/cn";

type NavItemProps = {
  href: string;
  label: string;
  className?: string;
};

export const NavItem = ({ label, href, className }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}`);

  return (
    <div className="w-full flex-1">
      <Link
        className={cn(
          buttonVariants({
            variant: "ghost",
          }),
          "w-full bg-transparent font-semibold text-base",
          isActive && "underline underline-offset-4",
          className
        )}
        href={href}
      >
        {label}
      </Link>
    </div>
  );
};

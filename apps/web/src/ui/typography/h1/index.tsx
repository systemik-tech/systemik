import type { ComponentProps } from "react";
import { cn } from "ui/src/utils/cn";

export const H1 = ({ children, className, ...props }: ComponentProps<"h1">) => (
  <h1
    className={cn(
      "scroll-m-20 text-balance font-extrabold text-3xl tracking-tight",
      className
    )}
    {...props}
  >
    {children}
  </h1>
);

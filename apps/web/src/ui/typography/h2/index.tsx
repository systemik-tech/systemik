import type { ComponentProps } from "react";
import { cn } from "ui/src/utils/cn";

export const H2 = ({ children, className, ...props }: ComponentProps<"h2">) => (
  <h1
    className={cn(
      "scroll-m-20 capitalize text-balance font-extrabold text-xl lg:text-3xl tracking-tight",
      className
    )}
    {...props}
  >
    {children}
  </h1>
);

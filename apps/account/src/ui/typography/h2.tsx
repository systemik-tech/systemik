import type { ComponentProps } from "react";
import { cn } from "ui/src/utils/cn";

export const H2 = ({ children, className, ...props }: ComponentProps<"h2">) => (
  <h2
    className={cn(
      "scroll-m-20 pb-2 font-semibold text-xl lg:text-2xl tracking-tight first:mt-0",
      className
    )}
    {...props}
  >
    {children}
  </h2>
);

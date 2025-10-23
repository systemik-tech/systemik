import type { ComponentProps } from "react";
import { cn } from "ui/src/utils/cn";

export const Lead = ({
  className,
  children,
  ...props
}: ComponentProps<"p">) => (
  <p
    className={cn("text-muted-foreground text-xl md:text-2xl", className)}
    {...props}
  >
    {children}
  </p>
);

import type { ComponentProps } from "react";
import { cn } from "ui/src/utils/cn";

export const Text = ({
  className,
  children,
  ...props
}: ComponentProps<"p">) => (
  <p
    className={cn(
      "text-secondary-foreground leading-7 [&:not(:first-child)]:mt-6",
      className
    )}
    {...props}
  >
    {children}
  </p>
);

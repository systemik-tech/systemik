import type { ComponentProps } from "react";
import { cn } from "ui/src/utils/cn";

type SectionElement = ComponentProps<"div">;

/**
 * Denotes a section of page content.
 */
export const Section = ({ children, className, ...props }: SectionElement) => (
  <section className={cn("py-16 sm:py-24", className)} {...props}>
    {children}
  </section>
);

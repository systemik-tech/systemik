import type { ReactNode } from "react";
import { cn } from "ui/src/utils/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Container
 *
 * A layout component that:
 * - Centers content horizontally on the page
 * - Restricts content width with a `max-width`
 * - Adds consistent horizontal padding for responsiveness
 *
 * Use this inside sections, headers, and footers to keep content
 * aligned and prevent it from stretching edge-to-edge.
 */
export const Container = ({ children, className = "" }: ContainerProps) => (
  <div
    className={cn(
      "mx-auto max-w-7xl px-8 sm:px-16 md:px-24 lg:px-32",
      className
    )}
  >
    {children}
  </div>
);

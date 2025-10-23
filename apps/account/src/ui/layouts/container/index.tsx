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
  <div className={cn("px-8", className)}>{children}</div>
);

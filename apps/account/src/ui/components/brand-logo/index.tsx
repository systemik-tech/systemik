import NextImage from "next/image";
import NextLink from "next/link";
import { cn } from "ui/src/utils/cn";

type BrandLogoProps = {
  /** Optional link destination */
  href?: string;
  /** Add custom Tailwind classes */
  className?: string;
  /** Override image priority (default: true) */
  priority?: boolean;
};

export const BrandLogo = ({
  href = "/",
  className,
  priority = true,
}: BrandLogoProps) => (
  <NextLink
    aria-label="Systemik Home"
    className={cn(
      "inline-flex items-center gap-2 transition-all duration-300 hover:opacity-90",
      className
    )}
    href={href}
  >
    <div className="flex items-center gap-2">
      <NextImage
        alt="Systemik Logo Icon (Light)"
        className="size-8 transition-transform group-hover:scale-105"
        height={32}
        priority={priority}
        src="/logos/logo_icon_black.png"
        width={32}
      />

      <NextImage
        alt="Systemik Logo Wordmark (Light)"
        className="h-auto w-32 transition-transform group-hover:translate-x-0.5 md:flex"
        height={32}
        priority={priority}
        src="/logos/logo_wordmark_black.png"
        width={128}
      />
    </div>

    {/*<div className="flex items-center gap-2">*/}
    {/*  <NextImage*/}
    {/*    alt="Systemik Logo Icon (Dark)"*/}
    {/*    className="size-8 transition-transform group-hover:scale-105"*/}
    {/*    height={32}*/}
    {/*    priority={priority}*/}
    {/*    src="/logos/logo_icon_white.png"*/}
    {/*    width={32}*/}
    {/*  />*/}

    {/*  <NextImage*/}
    {/*    alt="Systemik Logo Wordmark (Dark)"*/}
    {/*    className="hidden h-auto w-32 transition-transform group-hover:translate-x-0.5 md:flex"*/}
    {/*    height={32}*/}
    {/*    priority={priority}*/}
    {/*    src="/logos/logo_wordmark_white.png"*/}
    {/*    width={128}*/}
    {/*  />*/}
    {/*</div>*/}
  </NextLink>
);

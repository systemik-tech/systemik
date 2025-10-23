"use client";

import { useEffect, useState } from "react";
import { cn } from "ui/src/utils/cn";
import { BrandLogo } from "@/ui/components/brand-logo";
import { Container } from "@/ui/layouts/container";
import { Nav } from "@/ui/layouts/header/nav";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 mx-auto flex h-20 w-full items-center text-primary",
        scrolled && "border-accent border-b bg-background/80 backdrop-blur-md"
      )}
    >
      <Container className="flex w-full justify-between">
        <div className="flex flex-shrink-0 items-center">
          <BrandLogo className="w-auto" />
        </div>
        <Nav />
      </Container>
    </header>
  );
};

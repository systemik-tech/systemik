import Link from "next/link";
import { buttonVariants } from "ui/src/components/button";
import { cn } from "ui/src/utils/cn";
import { Container } from "@/ui/layouts/container";
import { Section } from "@/ui/layouts/section";
import { H1 } from "@/ui/typography/h1";

export const Hero = () => {
  return (
    <Section className="relative overflow-hidden py-16 sm:py-20">
      <Container>
        <div className="w-full flex items-center justify-center">
          <span className="text-xs sm:text-sm md:text-base uppercase font-semibold tracking-wider">
            Software Development Agency
          </span>
        </div>

        <div className="flex flex-col items-center gap-6 py-8 relative z-10">
          <H1 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl text-balance tracking-tight leading-tight sm:leading-snug md:leading-none">
            Build Digital Experiences That Work Hard for You
          </H1>

          <p className="mt-4 text-center text-base sm:text-lg md:text-xl max-w-xl mx-auto text-muted-foreground">
            Digital transformation and growth strategies, executed with smart
            and bold solutions.
          </p>

          <div className="flex w-full max-w-xs">
            <Link
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full py-5 sm:py-6 text-sm sm:text-base"
              )}
              href="/contact"
            >
              Let’s talk
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

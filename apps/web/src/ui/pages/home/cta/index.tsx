import Link from "next/link";
import { Button, buttonVariants } from "ui/src/components/button";
import { cn } from "ui/src/utils/cn";
import { Container } from "@/ui/layouts/container";
import { Section } from "@/ui/layouts/section";
import { H2 } from "@/ui/typography/h2";
import { Lead } from "@/ui/typography/lead";
import { Text } from "@/ui/typography/text";

export const Cta = () => (
  <Section className="border-y text-white">
    <Container className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {/* Left: Newsletter */}
      <div className="w-full py-12 flex flex-col items-start px-6 text-left">
        <H2 className="font-semibold">Sign up for a newsletter</H2>
        <div className="mt-4 w-20 h-1 bg-[#61ECFF] rounded" />
        <Text className="mt-6 text-neutral-300 max-w-2xl">
          We send out a newsletter full of content about the tech landscape. No
          spam - we promise!
        </Text>

        <form
          aria-label="newsletter-signup"
          className="mt-8 w-full max-w-xl relative"
        >
          <input
            className="w-full pr-16 bg-transparent border-b border-neutral-600 text-white placeholder:text-neutral-400 py-3 focus:outline-none"
            name="email"
            placeholder="Your e-mail address"
            type="email"
          />

          <Button
            aria-label="submit-email"
            className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded shadow-lg grid place-items-center"
            disabled
            type="button"
          >
            {/* Arrow icon */}
            <svg
              fill="none"
              height="18"
              viewBox="0 0 24 24"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12h14"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <path
                d="M13 5l7 7-7 7"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </Button>
        </form>
      </div>

      {/* Right: Contact CTA */}
      <div className="w-full py-12 flex flex-col items-start px-6">
        <H2>Let's work together</H2>
        <div className="mt-4 w-20 h-1 bg-[#61ECFF] rounded" />
        <Text className="mt-6 text-neutral-300 max-w-2xl">
          If you want to move your sales to the online world, are looking for
          new ideas for strategy or innovative e-commerce technologies - write
          to us! We will be happy to talk about the best solutions for your
          business.
        </Text>

        <div className="w-full flex  py-8">
          <Link
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "lg",
              }),
              "w-full"
            )}
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </Container>
  </Section>
);

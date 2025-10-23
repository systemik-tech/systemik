import Link from "next/link";
import { buttonVariants } from "ui/src/components/button";
import { cn } from "ui/src/utils/cn";
import { Container } from "@/ui/layouts/container";
import { Section } from "@/ui/layouts/section";
import { H2 } from "@/ui/typography/h2";
import { Lead } from "@/ui/typography/lead";
import { Text } from "@/ui/typography/text";

export const Ready = () => {
  return (
    <Section>
      <Container className="grid grid-cols-1 md:px-32 md:grid-cols-3">
        <div className="md:col-span-1 flex flex-col gap-3">
          <H2>The Future of Digital Experiences? Systemik is Ready.</H2>
          <Lead>Are you?</Lead>
        </div>
        <div className="text-balance lg:col-span-2">
          <Text>
            The digital world is moving fast — from AI-powered personalization
            and progressive web apps to cross-platform mobile experiences that
            connect everything.{" "}
          </Text>
          <Text>
            At <strong>SystemiK</strong>, we don’t just keep up with the pace of
            change — we help you lead it. As your strategic partner in web and
            mobile development, we turn your ideas into seamless digital
            experiences that grow with your business.
          </Text>
          <Text>
            From high-performing websites to intuitive mobile apps, we build
            reliable, scalable solutions that put your brand everywhere your
            customers are — and keep them coming back.
          </Text>
        </div>
      </Container>
      <div className="flex w-full items-center justify-center py-8">
        <Link
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "lg",
            }),
            "uppercase max-w-sm w-full"
          )}
          href="/services"
        >
          Our Services
        </Link>
      </div>
    </Section>
  );
};

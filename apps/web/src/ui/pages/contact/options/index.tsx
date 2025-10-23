import {
  ArrowRightCircleIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

import Link from "next/link";
import { buttonVariants } from "ui/src/components/button";
import { Card, CardContent } from "ui/src/components/card";
import { cn } from "ui/src/utils/cn";
import { Container } from "@/ui/layouts/container";
import { Section } from "@/ui/layouts/section";
import { Lead } from "@/ui/typography/lead";

export const ContactOptions = () => (
  <Section className="-mt-12">
    <Container className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
      {[
        {
          icon: EnvelopeIcon,
          title: "Sales",
          description: "Speak to our sales team about the service you want.",
          href: "/contact/sales",
          button: "Talk to Sales",
        },
        {
          icon: ChatBubbleOvalLeftEllipsisIcon,
          title: "Help and Support",
          description:
            "Ask product questions, report problems, or leave feedback.",
          href: "/contact/support",
          button: "Contact Support",
        },
      ].map(({ icon: Icon, title, description, href, button }) => (
        <Card className="border-accent" key={title}>
          <CardContent className="flex h-full flex-col justify-between gap-6">
            <div className="flex flex-col items-start gap-3">
              <div className="flex items-center gap-2">
                <Icon className="size-6" />
                <Lead className="text-primary">{title}</Lead>
              </div>
              <p className="text-md text-muted-foreground">{description}</p>
            </div>

            <Link
              className={cn(
                buttonVariants({
                  variant: "secondary",
                  size: "lg",
                }),
                "group mt-auto"
              )}
              href={href}
            >
              {button}
              <ArrowRightCircleIcon className="size-4 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </CardContent>
        </Card>
      ))}
    </Container>
  </Section>
);

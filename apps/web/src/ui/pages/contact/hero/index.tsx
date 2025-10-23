import { Container } from "@/ui/layouts/container";
import { Section } from "@/ui/layouts/section";
import { H1 } from "@/ui/typography/h1";
import { Lead } from "@/ui/typography/lead";

export const Hero = () => (
  <Section>
    <Container>
      <div className="flex flex-col items-center gap-4">
        <H1 className="text-center font-bold text-5xl tracking-tight sm:text-6xl sm:leading-none lg:text-7xl">
          <span className="">Let's talk about your</span>
          <span className="relative flex w-full justify-center overflow-hidden text-center text-[#555fbb] md:pt-1 md:pb-4">
            &nbsp; <span className="text-center">business.</span>
          </span>
        </H1>
        <Lead className="mx-auto max-w-3xl text-balance text-center text-muted-foreground">
          Contact us to discuss business opportunities, or just to say hello.
          Use the form below to send us a message.
        </Lead>
      </div>
    </Container>
  </Section>
);

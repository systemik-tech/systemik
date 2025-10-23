import { Input } from "ui/src/components/input/page";
import { Container } from "@/ui/layouts/container";
import { Section } from "@/ui/layouts/section";
import { H2 } from "@/ui/typography/h2";
import { Lead } from "@/ui/typography/lead";
import { Text } from "@/ui/typography/text";

export const Cta = () => (
  <Section className="border-y bg-[#61ECFF] text-background">
    <Container className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div className="w-full py-8 flex flex-col items-center justify-center">
        <H2 className="font-normal">Stay Informed</H2>
        <Input />
      </div>
      <div className="w-full py-8 flex max-w-md flex-col items-center justify-center">
        <H2 className="text-left w-full">Let's work together</H2>
        <Text className="text-background">
          If you want to move your sales to the online world, are looking for
          new ideas for strategy or innovative e-commerce technologies - write
          to us! We will be happy to talk about the best solutions for your
          business.
        </Text>
      </div>
    </Container>
  </Section>
);

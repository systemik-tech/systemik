import { Container } from "@/ui/layouts/container";
import { Section } from "@/ui/layouts/section";
import { H1 } from "@/ui/typography/h1";

export const Hero = () => (
  <>
    <Section className="relative pb-0 flex flex-col items-center justify-between min-h-[calc(100vh-4rem)] overflow-hidden">
      <Container className="flex flex-1 justify-center flex-col items-center gap-6">
        <H1 className="text-balance mt-[-4rem] font-semibold text-center md:text-6xl lg:text-7xl">
          Pushing Boundaries in Digital Technology.
        </H1>
      </Container>
      <p className="text-sm absolute bottom-12 text-primary tracking-widest">
        SCROLL DOWN
      </p>
      <div className="absolute z-[-10] inset-0 bg-gradient-to-t from-[#61CEFF]/50 via-transparent to-transparent pointer-events-none" />
    </Section>
  </>
);

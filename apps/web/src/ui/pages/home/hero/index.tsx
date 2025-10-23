import { Container } from "@/ui/layouts/container";
import { Section } from "@/ui/layouts/section";
import { H1 } from "@/ui/typography/h1";

export const Hero = () => (
  <>
    <Section className="relative pb-0 flex flex-col items-center justify-between min-h-[calc(100vh-4rem)] overflow-hidden">
      {/* Background video (fills hero) */}
      <video
        autoPlay
        className="absolute inset-0 w-full h-full object-cover -z-20 pointer-events-none"
        loop
        muted
        playsInline
        src="/videos/tech-video.mp4"
      />

      <Container className="flex w-full flex-1 justify-center flex-col items-center gap-6 px-4 sm:px-6 md:px-12">
        <H1 className="text-balance -mt-10 font-semibold text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight">
          Pushing Boundaries in Digital Technology.
        </H1>
      </Container>
      <p className="text-xs sm:text-sm absolute bottom-12 text-primary tracking-widest">
        SCROLL DOWN
      </p>
      {/* Dark overlay to dim background video */}
      <div className="absolute -z-10 inset-0 bg-black/40 pointer-events-none" />
    </Section>
  </>
);

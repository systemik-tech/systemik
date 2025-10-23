import Link from "next/link";
import { AspectRatio } from "ui/src/components/aspect-ratio";
import { buttonVariants } from "ui/src/components/button";
import { cn } from "ui/src/utils/cn";
import { Container } from "@/ui/layouts/container";
import { Text } from "@/ui/typography/text";

export const About = () => {
  return (
    <Container className="grid grid-cols-1 gap-10 px-4 py-16 sm:px-6 md:px-8 lg:px-12 lg:grid-cols-2 lg:gap-16">
      {/* Video section */}
      <AspectRatio
        className="bg-muted rounded-xl overflow-hidden relative"
        ratio={16 / 9}
      >
        <video
          autoPlay
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          loop
          muted
          playsInline
          src="/videos/website.mp4"
        />
      </AspectRatio>

      {/* Text section */}
      <div className="flex flex-col justify-center gap-6">
        <Text className="text-lg sm:text-xl md:text-2xl leading-relaxed">
          At Systemik Tech, we don’t just design — we engineer digital
          experiences that attract customers, build trust, and grow your
          business. From high-performing websites to powerful mobile apps, we
          turn your ideas into products people actually want to use — and keep
          using.
        </Text>
        <Text className="text-lg sm:text-xl md:text-2xl text-center lg:text-left font-medium">
          Websites. Apps. Systems that scale.
        </Text>

        <div className="flex justify-center lg:justify-start">
          <Link
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-2 px-8 py-6 text-base sm:text-lg"
            )}
            href="/contact"
          >
            Let’s Get Started →
          </Link>
        </div>
      </div>
    </Container>
  );
};

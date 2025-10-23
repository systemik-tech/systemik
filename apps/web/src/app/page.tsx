import { Cta } from "@/ui/pages/home/cta";
import { Hero } from "@/ui/pages/home/hero";
import { Ready } from "@/ui/pages/home/ready";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Ready />
      <Cta />
    </main>
  );
}

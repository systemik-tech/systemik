import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Container } from "@/ui/layouts/container";
import { Section } from "@/ui/layouts/section";
import { ContactForm } from "@/ui/pages/contact/form";

export default function ContactSalesPage() {
  return (
    <main>
      <Section>
        <Container className="grid grid-cols-1 gap-12 overflow-visible lg:grid-cols-2">
          {/* Left column */}
          <div className="space-y-6 self-start lg:sticky lg:top-40">
            <h1 className="mb-6 font-bold text-3xl sm:text-4xl lg:text-5xl">
              Tell us about your requirements
            </h1>

            <div className="space-y-3 sm:space-y-4">
              {[
                "Request a quote",
                "Learn which service is right for your team",
                "Get technical help",
              ].map((text) => (
                <div className="flex items-center gap-3" key={text}>
                  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
                    <CheckCircleIcon className="size-5" strokeWidth={6} />
                  </div>
                  <span className="text-base sm:text-lg">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column (form) */}
          <div className="px-4 sm:px-6">
            <ContactForm />
          </div>
        </Container>
      </Section>
    </main>
  );
}

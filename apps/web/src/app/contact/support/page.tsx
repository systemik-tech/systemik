import { Button } from "ui/src/components/button";
import { Container } from "@/ui/layouts/container";
import { Section } from "@/ui/layouts/section";

export default function ContactSupportPage() {
  return (
    <main>
      <Section>
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left column */}
          <div className="space-y-6 self-start lg:sticky lg:top-40">
            <h1 className="mb-6 font-bold text-3xl sm:text-4xl lg:text-5xl">
              Tell us about your requirements
            </h1>
          </div>

          {/* Right column */}
          <div className="rounded-xl border border-neutral-800 bg-muted p-10 text-center">
            <p className="text-foreground">
              Log in to your account so we can help you faster:
            </p>
            <Button
              className="mt-6 font-bold transition hover:bg-neutral-700"
              disabled
              type="button"
            >
              Log in
            </Button>
            <p className="mt-6 text-muted-foreground text-sm">
              or email us at{" "}
              <a
                className="text-neutral-300 hover:underline"
                href="mailto:support@systemik.tech"
              >
                support@systemik.tech
              </a>
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}

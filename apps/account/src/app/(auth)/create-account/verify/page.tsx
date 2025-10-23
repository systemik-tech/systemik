import { OTPForm } from "@/ui/interfaces/verify-form";
import { H2 } from "@/ui/typography/h2";

export default function LoginPage() {
  return (
    <div className="lg:h-full flex flex-col gap-6 items-start justify-center py-12">
      <H2>Last step...</H2>
      <OTPForm />
    </div>
  );
}

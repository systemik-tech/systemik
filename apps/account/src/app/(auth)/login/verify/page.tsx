import { OTPForm } from "@/ui/interfaces/verify-form";
import { H2 } from "@/ui/typography/h2";

export default function LoginPage() {
  return (
    <div className="h-full flex flex-col gap-6 items-start justify-center py-12">
      <H2>Enter the code sent to your email</H2>
      <OTPForm />
    </div>
  );
}

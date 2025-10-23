import { SignupForm } from "@/ui/interfaces/create-account/signup-form";
import { H2 } from "@/ui/typography/h2";

export default function CreateAccountPage() {
  return (
    <div className="h-full flex flex-col gap-6 items-start justify-center py-12">
      <H2>Welcome To Systemik</H2>
      <SignupForm />
    </div>
  );
}

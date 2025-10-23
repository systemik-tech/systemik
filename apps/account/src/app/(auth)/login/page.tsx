import { LoginForm } from "@/ui/interfaces/login/login-form";
import { H2 } from "@/ui/typography/h2";

export default function LoginPage() {
  return (
    <div className="h-full flex flex-col gap-6 items-start justify-center py-12">
      <H2>Welcome Back</H2>
      <LoginForm />
    </div>
  );
}

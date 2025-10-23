import { createClient } from "@/lib/supabase/server";

export default async function ProfilePage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();
  return (
    <main>
      <div>You are logged in</div>
    </main>
  );
}

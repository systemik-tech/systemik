import { createClient } from "@/lib/supabase/server";
import { EmptyPage } from "@/ui/interfaces/profile/empty-page";
import { UserProfile } from "@/ui/interfaces/profile/user-profile";

export default async function ProfilePage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims) {
    return <EmptyPage />;
  }

  return (
    <main>
      <UserProfile
        email={data?.claims.user_metadata.email}
        fullName={data?.claims.user_metadata.full_name}
      />
    </main>
  );
}

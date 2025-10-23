"use client";

import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "ui/src/components/avatar";
import { Button } from "ui/src/components/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "ui/src/components/empty/page";
import { createClient } from "@/lib/supabase/client";

type UserProfileProps = {
  email: string;
  fullName: string;
};

export function UserProfile({ email, fullName }: UserProfileProps) {
  const router = useRouter();

  async function signOut() {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    if (error) return;
    router.refresh();
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="default">
            <Avatar className="size-12">
              <AvatarImage
                className="grayscale"
                src="https://github.com/rewardalakiri.png"
              />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
          </EmptyMedia>
          <EmptyTitle>Welcome back, {fullName}.</EmptyTitle>
          <EmptyDescription>
            Systemik Store is currently in development, but its good to have you
            on board.
          </EmptyDescription>
          <EmptyDescription>Your email address is: {email}</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button onClick={() => signOut()} size="sm">
            Sign Out
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  );
}

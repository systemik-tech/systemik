import Link from "next/link";
import { buttonVariants } from "ui/src/components/button";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "ui/src/components/empty/page";
import { cn } from "ui/src/utils/cn";

export function EmptyAuth({ email }: { email: string }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Empty>
        <EmptyHeader>
          <EmptyTitle>
            <h1>User Found</h1>
          </EmptyTitle>
          <EmptyDescription>
            This user is currently logged in as <strong>{email}</strong>. You
            can view your{" "}
            <Link
              className={cn(
                buttonVariants({
                  variant: "link",
                }),
                "p-0"
              )}
              href="/profile"
            >
              profile here
            </Link>
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  );
}

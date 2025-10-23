import Link from "next/link";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "ui/src/components/empty/page";

export function EmptyPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Empty>
        <EmptyHeader>
          <EmptyTitle>
            <h1>User Not Found</h1>
          </EmptyTitle>
          <EmptyDescription>
            This user is currently not logged in. You can{" "}
            <Link href="/login">login</Link> and come back to view your profile.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  );
}

import Link from "next/link";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "ui/src/components/empty/page";

export default function ErrorPage() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Empty>
        <EmptyHeader>
          <EmptyTitle>
            <h1>An error occured</h1>
          </EmptyTitle>
          <EmptyDescription className="text-destructive">
            Try again by going to the <Link href="/login">login</Link> page.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  );
}

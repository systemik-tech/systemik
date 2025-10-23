import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Toaster } from "ui/src/components/sonner";

export const metadata: Metadata = {
  title: "Systemik Tech",
  description: "The official website of Systemik Tech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen overscroll-none overflow-y-scroll">
        <Toaster />
        <div>{children}</div>
      </body>
    </html>
  );
}

import "./globals.css";
import { ReactNode } from "react";
import { Toaster } from "ui/src/components/sonner";

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

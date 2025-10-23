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
      <body>
        <Toaster />
        <div>{children}</div>
      </body>
    </html>
  );
}

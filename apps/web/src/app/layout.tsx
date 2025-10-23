import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Header } from "@/ui/layouts/header";

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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

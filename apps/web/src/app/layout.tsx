import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "ui/src/providers/theme-provider";
import { Header } from "@/ui/layouts/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

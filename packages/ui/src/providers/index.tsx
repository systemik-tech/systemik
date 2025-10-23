import type { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";

type ProvidersProps = {
  children: ReactNode;
  theme?: typeof ThemeProvider;
};

export const Providers = ({ children }: ProvidersProps) => (
  <ThemeProvider>{children}</ThemeProvider>
);

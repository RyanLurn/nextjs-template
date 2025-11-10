"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ComponentProps } from "react";

function ThemeProvider({
  children,
  ...properties
}: ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...properties}>{children}</NextThemesProvider>;
}

export { ThemeProvider };

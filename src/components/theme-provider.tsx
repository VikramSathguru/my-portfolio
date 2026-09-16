"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // next-themes injects an inline <script> to prevent theme flash. React 19
  // warns when Client Components render <script>. Keep a real script on SSR
  // (so it runs before paint); on the client, mark it as non-JS so React
  // does not treat it as an executable component script.
  const scriptProps =
    typeof window === "undefined"
      ? { suppressHydrationWarning: true }
      : ({
          type: "application/json",
          suppressHydrationWarning: true,
        } as const);

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      scriptProps={scriptProps}
    >
      {children}
    </NextThemesProvider>
  );
}

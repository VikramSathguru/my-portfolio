import { ViewTransition } from "react";

const navEnter = {
  "nav-forward": "nav-forward",
  "nav-back": "nav-back",
  default: "none",
} as const;

const navExit = {
  "nav-forward": "nav-forward",
  "nav-back": "nav-back",
  default: "none",
} as const;

/** Directional page enter/exit — place in page.tsx, not layouts. */
export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter={navEnter} exit={navExit} default="none">
      {children}
    </ViewTransition>
  );
}

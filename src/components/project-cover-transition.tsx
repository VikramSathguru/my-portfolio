import { ViewTransition } from "react";

/** Shared-element morph for project covers between grid and case study. */
export function ProjectCoverTransition({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  return (
    <ViewTransition name={`project-cover-${slug}`} share="morph" default="none">
      {children}
    </ViewTransition>
  );
}

import Image from "next/image";
import type { SolutionSlug } from "@/data/solutions";
import { solutionVisuals } from "@/data/solution-visuals";

type SolutionMediaProps = {
  slug: SolutionSlug;
  label: string;
  src?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  showEmoji?: boolean;
};

export function SolutionMedia({
  slug,
  label,
  src,
  priority = false,
  sizes = "(min-width: 1024px) 44vw, 100vw",
  className = "",
  showEmoji = true,
}: SolutionMediaProps) {
  const visual = solutionVisuals[slug];
  const imageSrc = src ?? visual.image;

  return (
    <div
      className={`solution-media ${className}`.trim()}
      style={{ ["--solution-accent" as string]: visual.accent }}
    >
      <Image
        src={imageSrc}
        alt={label}
        fill
        priority={priority}
        quality={90}
        sizes={sizes}
        className="solution-media-img"
      />
      <div className="solution-media-veil" aria-hidden />
      {showEmoji ? (
        <span className="solution-media-emoji" aria-hidden>
          {visual.emoji}
        </span>
      ) : null}
    </div>
  );
}

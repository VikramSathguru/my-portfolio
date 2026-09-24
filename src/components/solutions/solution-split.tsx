import { SolutionArt } from "@/components/solutions/solution-art";
import { SolutionMedia } from "@/components/solutions/solution-media";
import type { ArtId, SolutionSlug } from "@/data/solutions";

export function SolutionSplit({
  art,
  label,
  reversed = false,
  deferred = false,
  imageSlug,
  imageSrc,
  priority = false,
  showEmoji = true,
  children,
}: {
  art: ArtId;
  label: string;
  reversed?: boolean;
  deferred?: boolean;
  imageSlug?: SolutionSlug;
  imageSrc?: string;
  priority?: boolean;
  showEmoji?: boolean;
  children: React.ReactNode;
}) {
  const usePhoto = Boolean(imageSrc || imageSlug);

  return (
    <section
      className={`solution-split${reversed ? " is-reversed" : ""}${deferred ? " is-deferred" : ""}`}
    >
      <div className="solution-plate">
        {usePhoto && imageSlug ? (
          <SolutionMedia
            slug={imageSlug}
            src={imageSrc}
            label={label}
            priority={priority}
            showEmoji={showEmoji}
            className="is-framed"
          />
        ) : (
          <SolutionArt id={art} title={label} />
        )}
      </div>
      <div>{children}</div>
    </section>
  );
}

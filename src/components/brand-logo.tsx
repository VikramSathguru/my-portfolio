import Image from "next/image";
import { site } from "@/data/portfolio";

type BrandLogoProps = {
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  className?: string;
};

const sizes = {
  sm: { box: "h-9 w-9", img: 36 },
  md: { box: "h-11 w-11", img: 44 },
  lg: { box: "h-14 w-14", img: 56 },
};

export function BrandLogo({
  size = "md",
  showWordmark = true,
  className = "",
}: BrandLogoProps) {
  const dim = sizes[size];

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        className={`relative shrink-0 overflow-hidden rounded-full ring-1 ring-[color-mix(in_srgb,#c9a227_55%,transparent)] ${dim.box}`}
      >
        <Image
          src="/images/vikram-logo.png"
          alt={`${site.fullName} logo`}
          width={dim.img}
          height={dim.img}
          className="h-full w-full object-cover"
          priority={size !== "sm"}
        />
      </span>
      {showWordmark && (
        <span className="font-display text-base font-semibold tracking-tight text-[var(--foreground)] sm:text-lg">
          {site.name}
          <span className="text-[var(--accent)]">.</span>
        </span>
      )}
    </span>
  );
}

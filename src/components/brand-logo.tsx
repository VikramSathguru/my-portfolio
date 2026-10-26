import Image from "next/image";
import { site } from "@/data/portfolio";

type BrandLogoProps = {
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  className?: string;
};

const sizes = {
  sm: { box: "h-12 w-12", img: 48 },
  md: { box: "h-16 w-16", img: 64 },
  lg: { box: "h-20 w-20", img: 80 },
};

export function BrandLogo({
  size = "md",
  showWordmark = true,
  className = "",
}: BrandLogoProps) {
  const dim = sizes[size];

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className={`relative shrink-0 ${dim.box}`}>
        <Image
          src="/images/vikram-sathguru-logo.png"
          alt={`${site.fullName} logo`}
          width={dim.img}
          height={dim.img}
          className="h-full w-full object-contain"
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

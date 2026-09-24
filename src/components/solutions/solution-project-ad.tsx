"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { m } from "@/components/motion";
import { localizeProject } from "@/lib/cms/localize";
import type { AppLocale } from "@/i18n/routing";
import type { CmsProject } from "@/lib/cms/types";

export function SolutionProjectAd({
  project,
  locale,
  eyebrow,
  cta,
  side = "right",
}: {
  project: CmsProject;
  locale: AppLocale;
  eyebrow: string;
  cta: string;
  side?: "left" | "right";
}) {
  const [open, setOpen] = useState(true);
  const content = localizeProject(project, locale);

  return open ? (
        <m.aside
          className={`solution-ad solution-ad-${side}`}
          initial={{ opacity: 0, y: 36, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 320, damping: 24, delay: 0.55 }}
          aria-label={eyebrow}
        >
          <m.div
            className="solution-ad-pulse"
            animate={{ boxShadow: [
              "0 18px 40px rgb(0 0 0 / 0.28)",
              "0 18px 48px color-mix(in srgb, var(--accent) 35%, transparent)",
              "0 18px 40px rgb(0 0 0 / 0.28)",
            ] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <button
              type="button"
              className="solution-ad-close"
              aria-label="Close"
              onClick={() => setOpen(false)}
            >
              ×
            </button>

            <Link href={`/work/${project.slug}`} className="solution-ad-link">
              <span className="solution-ad-eyebrow">
                <span aria-hidden>✨</span> {eyebrow}
              </span>
              <span className="solution-ad-media">
                <Image
                  src={project.cover}
                  alt={content.title}
                  fill
                  sizes="280px"
                  className="object-cover"
                />
                <m.span
                  className="solution-ad-shine"
                  aria-hidden
                  animate={{ x: ["-120%", "160%"] }}
                  transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 2.2, ease: "easeInOut" }}
                />
              </span>
              <span className="solution-ad-body">
                <span className="solution-ad-title">{content.title}</span>
                <span className="solution-ad-cta">
                  {cta} <span aria-hidden>→</span>
                </span>
              </span>
            </Link>
          </m.div>
        </m.aside>
  ) : null;
}

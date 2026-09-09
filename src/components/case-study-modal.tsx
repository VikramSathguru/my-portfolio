"use client";

import { useRouter } from "@/i18n/navigation";
import { useEffect } from "react";

export function CaseStudyModal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") router.back();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [router]);

  return (
    <div className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-black/55 p-3 backdrop-blur-sm sm:p-6">
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 cursor-default"
        onClick={() => router.back()}
      />
      <div className="relative z-10 mt-8 w-full max-w-5xl overflow-hidden rounded-[1.5rem] bg-[var(--background)] shadow-2xl ring-1 ring-white/10">
        <button
          type="button"
          onClick={() => router.back()}
          className="absolute top-4 right-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-[var(--surface)] text-[var(--foreground)] ring-1 ring-[var(--border)]"
          aria-label="Close"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

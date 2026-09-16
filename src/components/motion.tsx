"use client";

import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";

export function MotionRoot({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}

export { m, AnimatePresence };

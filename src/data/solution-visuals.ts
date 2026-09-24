import type { SolutionSlug } from "@/data/solutions";

export type SolutionVisual = {
  image: string;
  emoji: string;
  accent: string;
};

export const solutionVisuals: Record<SolutionSlug, SolutionVisual> = {
  websites: {
    image: "/images/solutions/websites.png",
    emoji: "🌐",
    accent: "#e0c35a",
  },
  "online-stores": {
    image: "/images/solutions/online-stores.png",
    emoji: "🛍️",
    accent: "#fb7185",
  },
  crm: {
    image: "/images/solutions/crm.png",
    emoji: "🗂️",
    accent: "#60a5fa",
  },
  acquisition: {
    image: "/images/solutions/acquisition.png",
    emoji: "🎯",
    accent: "#f472b6",
  },
  automation: {
    image: "/images/solutions/automation.png",
    emoji: "⚙️",
    accent: "#34d399",
  },
  mobile: {
    image: "/images/solutions/mobile.png",
    emoji: "📱",
    accent: "#a78bfa",
  },
  blockchain: {
    image: "/images/solutions/blockchain.png",
    emoji: "⛓️",
    accent: "#fbbf24",
  },
  seo: {
    image: "/images/solutions/seo.png",
    emoji: "📈",
    accent: "#38bdf8",
  },
};

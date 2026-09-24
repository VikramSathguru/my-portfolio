export const site = {
  name: "Vikram",
  fullName: "Vikram Sathguru",
};

export const stats = [
  { value: "10+", labelKey: "years" as const },
  { value: "NUS", labelKey: "education" as const },
  { value: "4+", labelKey: "reach" as const },
];

/** Core proficiency scores shown as percentage bars. */
export const technicalSkills = [
  { name: "HTML5 / CSS", level: 97 },
  { name: "PHP", level: 96 },
  { name: "Node.js", level: 95 },
  { name: "Express.js", level: 95 },
  { name: "TypeScript", level: 95 },
  { name: "Python", level: 95 },
  { name: "MySQL & MongoDB", level: 93 },
  { name: "React", level: 90 },
  { name: "CRM Development", level: 90 },
  { name: "Workflow Automation", level: 83 },
];

/** Technical stack grouped by domain (not percentage-based). */
export const expertiseAreas = [
  {
    id: "frontend",
    skills: [
      "React.js",
      "Next.js",
      "Angular",
      "Vue.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    id: "backend",
    skills: ["Node.js", "Express.js", "Python", "REST API", "GraphQL", "PHP"],
  },
  {
    id: "database",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Database Design", "Data Migration"],
  },
  {
    id: "ecommerce",
    skills: ["WordPress", "WooCommerce", "Shopify", "Payment Integration", "Order Management"],
  },
  {
    id: "mobile",
    skills: ["React Native", "Flutter"],
  },
  {
    id: "ai",
    skills: [
      "Make.com",
      "Zapier",
      "WhatsApp Business",
      "AI Chatbots",
      "OpenAI API",
      "Automated Customer Support",
    ],
  },
  {
    id: "business",
    skills: [
      "CRM Development",
      "SEO",
      "Google Search Console",
      "Email Marketing Automation",
      "Google Ads API",
      "Facebook / Instagram API",
      "Analytics Integration",
    ],
  },
  {
    id: "blockchain",
    skills: ["Solana", "Ethereum", "Solidity"],
  },
] as const;

export const portfolioFilterKeys = [
  "all",
  "web",
  "mobile",
  "uiux",
  "ecommerce",
  "ai",
] as const;

export type PortfolioFilterKey = (typeof portfolioFilterKeys)[number];

export const processSteps = ["01", "02", "03", "04"] as const;
export const experienceHighlightKeys = ["h1", "h2", "h3", "h4", "h5"] as const;

/**
 * Blue proficiency fill (replaces the old red accent bars).
 * Lower scores → lighter sky blue; higher → deeper indigo-blue.
 */
export function skillLevelColor(level: number): string {
  const t = Math.min(1, Math.max(0, (level - 70) / 30)); // 70% → 0, 100% → 1
  const hue = 200 + t * 30; // sky → indigo-blue
  const saturation = 58 + t * 22;
  const lightness = 58 - t * 20;
  return `hsl(${hue} ${saturation}% ${lightness}%)`;
}

export const site = {
  name: "Vikram",
  fullName: "Vikram Sathguru",
  email: "hello@vikram.dev",
  phone: "+65 0000 0000",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
  },
};

export const stats = [
  { value: "10+", labelKey: "years" as const },
  { value: "NUS", labelKey: "education" as const },
  { value: "Global", labelKey: "reach" as const },
];

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
  { name: "Node & Express", level: 90 },
  { name: "Workflow Automation", level: 83 },
];

export const expertiseAreas = [
  {
    id: "frontend",
    skills: [
      "React.js",
      "Next.js",
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
    skills: ["WooCommerce", "Shopify", "Payment Integration", "Order Management"],
  },
  {
    id: "ai",
    skills: [
      "AI Chatbots",
      "OpenAI API",
      "ML Concepts",
      "Automated Customer Support",
    ],
  },
  {
    id: "business",
    skills: [
      "CRM Development",
      "Email Marketing Automation",
      "Google Ads API",
      "Facebook / Instagram API",
      "Analytics Integration",
    ],
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

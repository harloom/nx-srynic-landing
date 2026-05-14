export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "nusantara-pay",
    title: "Nusantara Pay",
    category: "Fintech Platform",
    year: "2025",
    description:
      "End-to-end payment gateway serving merchants across Southeast Asia with sub-second settlement and built-in fraud detection.",
    tags: ["Next.js", "Go", "PostgreSQL"],
  },
  {
    slug: "harvest-iq",
    title: "HarvestIQ",
    category: "AgriTech IoT",
    year: "2025",
    description:
      "Field sensor network and analytics dashboard helping smallholder farmers optimize yield with real-time soil and weather telemetry.",
    tags: ["IoT", "TimescaleDB", "React"],
  },
  {
    slug: "kelas-cerdas",
    title: "Kelas Cerdas",
    category: "EdTech",
    year: "2024",
    description:
      "Adaptive learning platform with AI-generated quizzes and progress analytics, deployed across 120+ schools in Indonesia.",
    tags: ["Next.js", "Python", "OpenAI"],
  },
  {
    slug: "logistika-os",
    title: "Logistika OS",
    category: "Logistics SaaS",
    year: "2024",
    description:
      "Fleet and warehouse management suite with route optimization, cutting last-mile delivery costs by an average of 27%.",
    tags: ["TypeScript", "Kubernetes", "Mapbox"],
  },
];

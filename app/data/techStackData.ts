// techData.ts
import { Cloud, Code, Database, Server, Smartphone } from "lucide-react";

export const techStack = [
  {
    category: "Frontend",
    icon: Code,
    items: [
      { name: "Vue.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Framer Motion" },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    items: [{ name: "TypeScript" }, { name: "Node.js" }, { name: "Java" }, { name: "Express.js" }],
  },
  {
    category: "Mobile",
    icon: Smartphone,
    items: [{ name: "React Native" }],
  },
  {
    category: "Database",
    icon: Database,
    items: [{ name: "MongoDB" }, { name: "Redis" }, { name: "PostgreSQL" }, { name: "MySQL" }],
  },
  {
    category: "DevOps",
    icon: Cloud,
    items: [
      { name: "Git" },
      { name: "Linux" },
      { name: "GitHub" },
      { name: "GitLab" },
      { name: "Bash" },
      { name: "Docker" },
      { name: "AWS" },
    ],
  },
];

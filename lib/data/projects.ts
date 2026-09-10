// lib/data/projects.ts
import { Project } from "../types/project";
import {SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiFramer, SiMysql, SiExpress } from 'react-icons/si';

export const projects: Project[] = [
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with Next.js, Tailwind CSS, and TypeScript.",
    image: "/images/portfolio_pic.png",
    link: "https://abel-asmelash.vercel.app/",
    github: "https://github.com/abel-asmelash/portfolio-website",
    tags: [ { icon: SiNextdotjs, name: "Next.js" }, { icon: SiTailwindcss, name: "Tailwind CSS" }, { icon: SiTypescript, name: "TypeScript" }, { icon: SiFramer, name: "Framer Motion" } ],
  },
  {
    slug: "icu-forum",
    title: "ICU Forum",
    description:
      "AI-powered discussion forum for a church built with Next.js, TypeScript, Tailwind CSS, and MongoDB.",
    image: "/images/kennis_forum.png",
    link: "https://icukennisplatform.vercel.app/",
    github: "https://github.com/abel-asmelash/icuplatform",
    tags: [ { icon: SiNextdotjs, name: "Next.js" }, { icon: SiMongodb, name: "MongoDB" }, { icon: SiTypescript, name: "TypeScript" }, { icon: SiTailwindcss, name: "Tailwind CSS" }, { icon: SiFramer, name: "Framer Motion" } ],
  },
  {
    slug: "ai-country-explorer",
    title: "AI Powered Country Explorer",
    description:
      "An AI-powered explorer where users can ask natural-language questions about any country and get instant answers — powered by Groq for fast LLM inference.",
    image: "/images/explorer.png",
    link: "https://ai-powered-explorer-app-seven.vercel.app/",
    github: "https://github.com/abel-asmelash/country-explorer-app",
    tags: [ { icon: SiNextdotjs, name: "Next.js" }, { icon: SiTypescript, name: "TypeScript" }, { icon: SiTailwindcss, name: "Tailwind CSS" }, { icon: SiFramer, name: "Framer Motion" } ],
  },
  {
    slug: "AI-Powered-church-management-system",
    title: "AI Powered Church Management System",
    description:
      "A web application that uses AI to streamline church management tasks and enhance community engagement.",
    image: "/images/church_management.png",
    link: "https://ai-church-management.vercel.app/",
    github: "https://github.com/abel-asmelash/ai-church-management",
    status: "In Progress",
    tags: [ { icon: SiNextdotjs, name: "Next.js" }, { icon: SiTypescript, name: "TypeScript" }, { icon: SiTailwindcss, name: "Tailwind CSS" }, { icon: SiFramer, name: "Node.js"}, { icon: SiMysql, name: "MySql" }, { icon: SiExpress, name: "Express.js" } ],
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

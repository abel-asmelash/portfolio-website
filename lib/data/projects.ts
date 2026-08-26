//Array of objects containing information about the projects to be displayed on the portfolio website
import { Project } from "../types/project";
export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with Next.js, Tailwind CSS, and TypeScript.",
    image: "/images/portfolio_pic.png",
    link: "https://abel-asmelash.vercel.app/",
  },
  {
    title: "ICU Forum",
    description:
      "AI-powered discussion forum for a church built with Next.js and MongoDB.",
    image: "/images/icu_proj.png",
    link: "https://icukennisplatform.vercel.app/",
  },
  {
    title: "Ai powered country explorer",
    description: "An AI-powered country explorer app built with Next.js.",
    image: "/images/explorer_image.png",
    link: "https://ai-powered-explorer-app-seven.vercel.app/",
  },
];

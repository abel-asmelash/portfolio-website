"use client";
import { useState } from "react";
import ProjectCard from "@/components/project/ProjectCard";
import { Project } from "@/lib/types/project";
 

const ProjectFilter = ({ projects }: { projects: Project[] }) => {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const allTags = [...new Set(projects.flatMap((project) => project.tags.map((tag) => tag.icon)))];
  const filtered = activeTag
    ? projects.filter((project) => project.tags.some((tag) => tag.name === activeTag))
    : projects;

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveTag(null)}
          className={`px-4 py-2 rounded-full ${
            !activeTag ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag.name}
            onClick={() => setActiveTag(tag.name)}
            className={`px-4 py-2 rounded-full ${
              activeTag === tag.name ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            {tag.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectFilter;
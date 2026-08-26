import Link from "next/link";
import Image from "next/image";
import { projects } from "../../lib/data/projects";

// Singular type name & added tags array to match UI design
type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
};

const Page = () => {
  return (
    <div className="min-h-screen bg-[#07090e] p-8 text-white">
      <h3 className="mb-6 text-3xl font-bold tracking-tight">
        Featured Projects
      </h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project: Project) => (
          <div
            key={project.title}
            className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-[#0c0f17] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-xl"
          >
            <div>
              {/* Image Container on Top */}
              <div className="relative h-52 w-full overflow-hidden rounded-xl bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Title & Description */}
              <div className="mt-5 space-y-2 px-1">
                <h4 className="text-xl font-bold tracking-tight text-slate-100">
                  {project.title}
                </h4>
                <p className="text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div className="mt-6 flex flex-wrap gap-2 px-1">
              {(project.tags || ["Next.js", "MongoDB", "Tailwind"]).map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-300"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            {/* Whole Card Clickable overlay */}
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 rounded-2xl"
              aria-label={`View ${project.title}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

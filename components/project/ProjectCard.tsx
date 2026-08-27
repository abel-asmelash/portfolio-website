import Link from "next/link";
import Image from "next/image";
import { projects } from "../../lib/data/projects";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
};

const Page = () => {
  return (
    <div className="min-h-screen bg-[#07090e] p-8 ml-8 text-white">
      <h3 className="mb-6 text-2xl font-bold tracking-tight text-slate-100">
        Featured Projects
      </h3>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((project: Project) => (
          <div
            key={project.title}
            className="group relative flex max-w-sm flex-col justify-between rounded-xl border border-slate-800/80 bg-[#0c0f17] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700"
          >
            <div>
              <div className="relative h-40 w-full overflow-hidden rounded-lg bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              <div className="mt-3 space-y-1 px-1">
                <h4 className="text-lg font-bold tracking-tight text-slate-100">
                  {project.title}
                </h4>
                <p className="text-xs leading-relaxed text-slate-400">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5 px-1">
              {(project.tags || ["Next.js", "MongoDB", "Tailwind"]).map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-slate-800 bg-slate-900/80 px-2 py-1 text-[10px] font-medium text-slate-300"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 rounded-xl"
              aria-label={`View ${project.title}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/data/projects";
import Image from "next/image";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

      <div className="flex gap-2 mb-6 flex-wrap">
        {project.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 text-sm rounded-full bg-white/5">
            {tag}
          </span>
        ))}
      </div>

      <Image
        src={project.image}
        width={800}
        height={400}
        alt={project.title}
        className="rounded-xl mb-8 w-full"
      />

      <p className="text-white/70 text-lg mb-8">{project.description}</p>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 rounded-full bg-purple-500 text-white font-medium hover:bg-purple-600 transition"
      >
        View Live Project →
      </a>
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-full bg-gray-800 text-white font-medium hover:bg-gray-600 transition ml-4"
        >
          View Source Code →
        </a>
      )}
    </main>
  );
}

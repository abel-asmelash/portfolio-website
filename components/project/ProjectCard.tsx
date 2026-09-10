import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/types/project";

const ProjectCard = ({
  slug,
  title,
  description,
  image,
  tags,
  status,
}: Project) => {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="rounded-xl border border-white/10 p-4 hover:border-white/30 transition">
        {/* Image Container with Status Badge Overlay */}
        <div className="relative w-full mb-4">
          <Image
            src={image}
            alt={title}
            className="rounded-lg object-cover"
            width={600}
            height={400}
          />

          {status && (
            <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-amber-500/90 text-black rounded-full backdrop-blur-md shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
              {status}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-white/60 text-sm mt-1">{description}</p>
        <div className="flex gap-2 mt-3 flex-wrap">
          {tags.map(({ name, icon: Icon }) => (
            <span
              key={name}
              className="px-2 py-1 text-xs rounded-full bg-white/5 flex items-center gap-1.5"
            >
              <Icon size={16} />
              {name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

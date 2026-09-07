
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/types/project";
 
const ProjectCard = ({ slug, title, description, image, tags }: Project) => {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="rounded-xl border border-white/10 p-4 hover:border-white/30 transition">
        <Image src={image} alt={title} className="rounded-lg mb-4" width={600} height={400} />
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-white/60 text-sm mt-1">{description}</p>
        <div className="flex gap-2 mt-3 flex-wrap">
          {tags.map(({name, icon: Icon}) => (
            <span
              key={name}
              className="px-2 py-1 text-xs rounded-full bg-white/5"
            >
              <Icon size={22}/>
              {name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

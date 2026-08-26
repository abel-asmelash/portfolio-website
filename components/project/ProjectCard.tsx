import Link from "next/link";
import { projects } from "../../lib/data/projects";
import Image from "next/image";

type Projects = {
  title: string;
  description: string;
  image: string;
  link: string;
};
const page = () => {
  return (
    <div>
      <h3>Featured Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project: Projects) => (
          <div key={project.title} className="border rounded-lg p-4">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="relative w-full h-48 mt-2 rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-linear-to-r from-purple-500 to-blue-400 text-white font-bold py-2 px-4 rounded-full hover:from-purple-600 hover:to-blue-500 transition-all duration-300 shadow-md mt-4"
            >
              Visit Project
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;

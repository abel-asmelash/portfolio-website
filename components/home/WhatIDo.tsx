import { skills } from "@/lib/data/skills";
import Link from "next/link";
import {
  Code2,
  Server,
  Database,
  Sparkles,
  Cloud,
  Layers,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const skillIcons: { [key: string]: LucideIcon } = {
  "Frontend Development": Code2,
  "Backend Development": Server,
  "Database Management": Database,
  "AI & API Integration": Sparkles,
  "Cloud & Deployment": Cloud,
  "Full-Stack Development": Layers,
  "Developer Tooling & Quality": Wrench,
};

const WhatIDo = () => {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-6">What I Do</h2>

        {/* Changed gap from 5 to 3.5 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {skills.map((skill) => {
            const Icon = skillIcons[skill.title] ?? Code2;

            return (
              <Link
                key={skill.title}
                href="#about"
                className="group relative flex flex-col justify-between rounded-lg border border-white/10 bg-white/3 p-4 transition-all duration-300 hover:border-purple-500/40 hover:bg-white/3"
              >
                <div>
                  {/* Smaller icon box */}
                  <div className="mb-3 inline-flex items-center justify-center rounded-md bg-purple-500/10 p-2">
                    <Icon className="h-4 w-4 text-purple-400" strokeWidth={2} />
                  </div>

                  <h3 className="mb-1.5 text-sm font-semibold text-white">
                    {skill.title}
                  </h3>

                  {/* Compact text styling */}
                  <p className="text-xs leading-normal text-gray-400 line-clamp-3 mb-3">
                    {skill.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;

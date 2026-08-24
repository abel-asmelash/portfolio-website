import { skills } from "@/lib/data/skills";
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
    <section className="py-20 relative bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-dark mb-10">What I Do</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill, index) => {
            const Icon = skillIcons[skill.title] ?? Code2;

            return (
              <div
                key={index}
                className="group rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-purple-500/40 hover:bg-white/10"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-purple-500/10 p-2.5">
                  <Icon className="h-5 w-5 text-purple-400" strokeWidth={2} />
                </div>

                <h3 className="mb-2 text-base font-semibold text-white">
                  {skill.title}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-gray-400">
                  {skill.description}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-medium text-purple-400 transition-all group-hover:gap-2 hover:text-purple-300"
                >
                  Learn more
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;

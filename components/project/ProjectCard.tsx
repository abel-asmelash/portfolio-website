"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../../lib/data/projects";
import { gsap } from "gsap";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
};

const Page = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Staggered entrance animation on initial load
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 25, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power2.out",
        },
      );
    });

    return () => ctx.revert();
  }, []);

  // Hardware-accelerated 3D tilt interaction
  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number,
  ) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.3,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = (index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <div className="min-h-screen bg-[#07090e] p-8 text-white relative">
      <h3 className="mb-6 text-2xl font-bold tracking-tight text-slate-100">
        Featured Projects
      </h3>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((project: Project, index: number) => (
          <div
            key={project.title}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className="group relative flex max-w-sm flex-col justify-between rounded-xl border border-slate-800/80 bg-[#0c0f17] p-3 transition-colors duration-300 hover:border-purple-500/50 [transform-3d]"
          >
            {/* Ambient Purple Background Glow on Hover */}
            <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-purple-500/10 via-transparent to-blue-500/10 -z-10" />

            <div>
              {/* Image Container */}
              <div className="relative h-40 w-full overflow-hidden rounded-lg bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              {/* Text Information */}
              <div className="mt-3 space-y-1 px-1">
                <h4 className="text-lg font-bold tracking-tight text-slate-100 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h4>
                <p className="text-xs leading-relaxed text-slate-400">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Tech Tags */}
            <div className="mt-4 flex flex-wrap gap-1.5 px-1 z-10">
              {(project.tags || ["Next.js", "MongoDB", "Tailwind"]).map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-purple-500/20 bg-purple-500/10 px-2 py-1 text-[10px] font-medium text-purple-300"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            {/* Click Target */}
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 rounded-xl z-20"
              aria-label={`View ${project.title}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

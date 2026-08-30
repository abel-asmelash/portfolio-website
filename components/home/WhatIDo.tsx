"use client";

import { useEffect, useRef } from "react";
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
import { gsap } from "gsap";

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
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    // 1. Entrance Fade & Stagger Animation
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
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

  // 2. High-Performance 3D Mouse Tilt FX
  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement>,
    index: number,
  ) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.4,
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
      duration: 0.6,
      ease: "power2.out",
    });
  };

  return (
    <section className="py-12 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-6 tracking-tight flex items-center gap-2">
          What I Do
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {skills.map((skill, index) => {
            const Icon = skillIcons[skill.title] ?? Code2;

            return (
              <Link
                key={skill.title}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                href="#about"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-gray-900/40 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-purple-500/50 hover:bg-gray-900/80 [transform-3d]"
              >
                {/* Background Ambient Glow on Hover */}
                <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-purple-500/10 via-transparent to-blue-500/10 -z-10" />

                <div>
                  {/* Glowing Icon Container */}
                  <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-purple-500/10 p-2.5 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-purple-500/50">
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </div>

                  <h3 className="mb-1.5 text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {skill.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-gray-400 line-clamp-3">
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

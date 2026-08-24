"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ComponentType, SVGProps, useState } from "react";

export type HoverEffectItem = {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  link?: string;
};

export const HoverEffect = ({
  items,
  className,
}: {
  items: HoverEffectItem[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 py-4",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item.link ?? "#"}
          key={item.title}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-purple-500/10 block rounded-2xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.15 },
                }}
              />
            )}
          </AnimatePresence>

          <div
            className={cn(
              "relative z-20 h-full w-full rounded-2xl border border-white/10 bg-zinc-950/80 p-6 backdrop-blur-sm",
              "transition-colors group-hover:border-transparent",
            )}
          >
            {/* Gradient glow ring on hover */}
            <div
              className={cn(
                "pointer-events-none absolute -inset-px rounded-2xl p-px opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                "bg-linear-to-r from-purple-500 via-fuchsia-500 to-amber-400",
                "[mask-clip:content-box,border-box] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] mask-exclude",
              )}
            />

            {/* Soft ambient neon halo */}
            <div
              className={cn(
                "pointer-events-none absolute -inset-1 -z-10 rounded-2xl opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-50",
                "bg-linear-to-r from-purple-500 via-fuchsia-500 to-amber-400",
              )}
            />

            <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-purple-500/10 p-2.5">
              <item.icon className="h-5 w-5 text-purple-400" strokeWidth={2} />
            </div>

            <h3 className="mb-2 text-base font-semibold text-white">
              {item.title}
            </h3>

            <p className="mb-4 text-sm leading-relaxed text-gray-400">
              {item.description}
            </p>

            <span className="inline-flex items-center gap-1 text-sm font-medium text-purple-400 transition-all group-hover:gap-2">
              Learn more
              <span aria-hidden="true">→</span>
            </span>
          </div>
        </a>
      ))}
    </div>
  );
};

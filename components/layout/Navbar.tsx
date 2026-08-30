"use client";

import { navItems } from "@/lib/data/navigation";
import Link from "next/link";
import React, { useEffect, useId, useRef, useState } from "react";
import { gsap } from "gsap";
import { ThemeToggle } from "@/components/ui/theme-toggle";

/**
 * Subtle SVG mesh/noise texture, layered over the glass background at very
 * low opacity with `mix-blend-mode: overlay` so it reads as grain rather
 * than pattern. Each instance gets a unique filter id via useId().
 */
const NoiseOverlay = () => {
  const filterId = useId();
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full rounded-2xl opacity-[0.05] mix-blend-overlay"
    >
      <filter id={filterId}>
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.9"
          numOctaves="2"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter={`url(#${filterId})`} />
    </svg>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileInnerRef = useRef<HTMLDivElement>(null);

  const barTopRef = useRef<SVGLineElement>(null);
  const barMidRef = useRef<SVGLineElement>(null);
  const barBottomRef = useRef<SVGLineElement>(null);

  const prefersReducedMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // --- Entrance animation -------------------------------------------------
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set(navRef.current, { opacity: 1, y: 0 });
        gsap.set(
          linksRef.current ? Array.from(linksRef.current.children) : [],
          {
            opacity: 1,
            y: 0,
          },
        );
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        navRef.current,
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
      ).fromTo(
        linksRef.current ? Array.from(linksRef.current.children) : [],
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
        "-=0.45",
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  // --- Mobile menu spring open/close --------------------------------------
  useEffect(() => {
    const menu = mobileMenuRef.current;
    const inner = mobileInnerRef.current;
    if (!menu || !inner) return;

    const items = Array.from(inner.querySelectorAll("[data-mobile-link]"));
    const reduce = prefersReducedMotion();

    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.set(menu, { display: "block", height: "auto" });
      const fullHeight = menu.offsetHeight;

      if (reduce) {
        gsap.set(menu, { height: fullHeight, opacity: 1 });
        gsap.set(items, { opacity: 1, y: 0, scale: 1 });
        return;
      }

      gsap.fromTo(
        menu,
        { height: 0, opacity: 0 },
        {
          height: fullHeight,
          opacity: 1,
          duration: 0.55,
          ease: "elastic.out(1, 0.65)",
          onComplete: () => gsap.set(menu, { height: "auto" }),
        },
      );
      gsap.fromTo(
        items,
        { y: -16, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.06,
          delay: 0.05,
          ease: "back.out(1.8)",
        },
      );
    } else {
      document.body.style.overflow = "";
      if (reduce) {
        gsap.set(menu, { height: 0, opacity: 0, display: "none" });
        return;
      }
      gsap.to(menu, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => gsap.set(menu, { display: "none" }),
      });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // --- Hamburger -> X morph -----------------------------------------------
  useEffect(() => {
    if (!barTopRef.current || !barMidRef.current || !barBottomRef.current)
      return;
    const ease = "power3.inOut";
    const duration = prefersReducedMotion() ? 0 : 0.35;

    if (isOpen) {
      gsap.to(barTopRef.current, {
        rotate: 45,
        y: 6,
        transformOrigin: "center",
        duration,
        ease,
      });
      gsap.to(barMidRef.current, {
        opacity: 0,
        duration: duration * 0.6,
        ease,
      });
      gsap.to(barBottomRef.current, {
        rotate: -45,
        y: -6,
        transformOrigin: "center",
        duration,
        ease,
      });
    } else {
      gsap.to(barTopRef.current, { rotate: 0, y: 0, duration, ease });
      gsap.to(barMidRef.current, {
        opacity: 1,
        duration: duration * 0.7,
        delay: duration * 0.3,
        ease,
      });
      gsap.to(barBottomRef.current, { rotate: 0, y: 0, duration, ease });
    }
  }, [isOpen]);

  // --- Close on Escape ------------------------------------------------------
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        ref={navRef}
        className="relative mx-auto max-w-6xl opacity-0"
        aria-label="Primary"
      >
        {/* Rotating gradient border beam wrapper */}
        <div className="beam-border relative overflow-hidden rounded-2xl p-[1px] shadow-[0_8px_40px_-12px_rgba(59,130,246,0.35)]">
          <div className="relative overflow-hidden rounded-2xl bg-[#0a0e1c]/85 backdrop-blur-xl">
            <NoiseOverlay />

            <div className="relative flex items-center justify-between gap-4 px-5 py-3 sm:px-6">
              {/* Brand */}
              <Link
                href="/"
                className="shrink-0 bg-gradient-to-r from-violet-300 via-blue-200 to-violet-300 bg-clip-text text-lg font-bold tracking-wide text-transparent"
              >
                Abel Asmelash
              </Link>

              {/* Desktop links */}
              <div ref={linksRef} className="hidden items-center gap-1 md:flex">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Desktop right side */}
              <div className="hidden items-center gap-4 md:flex">
                <ThemeToggle />
                <a href="#contact" className="neon-cta">
                  Let&apos;s talk
                </a>
              </div>

              {/* Mobile right side */}
              <div className="flex items-center gap-3 md:hidden">
                <ThemeToggle />
                <button
                  onClick={() => setIsOpen((v) => !v)}
                  className="rounded-lg p-1.5 text-slate-300 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                  aria-label="Toggle navigation menu"
                  aria-expanded={isOpen}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <line
                      ref={barTopRef}
                      x1="4"
                      y1="7"
                      x2="20"
                      y2="7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      ref={barMidRef}
                      x1="4"
                      y1="12"
                      x2="20"
                      y2="12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      ref={barBottomRef}
                      x1="4"
                      y1="17"
                      x2="20"
                      y2="17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile menu */}
            <div
              ref={mobileMenuRef}
              className="overflow-hidden md:hidden"
              style={{ display: "none", height: 0 }}
            >
              <div
                ref={mobileInnerRef}
                className="flex flex-col gap-1 border-t border-white/10 px-5 pb-5 pt-3"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    data-mobile-link
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href="#contact"
                  data-mobile-link
                  onClick={() => setIsOpen(false)}
                  className="neon-cta mt-2 justify-center text-center"
                >
                  Let&apos;s talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <style jsx global>{`
        @property --border-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        .beam-border {
          --border-angle: 0deg;
          background: conic-gradient(
            from var(--border-angle),
            transparent 0%,
            rgba(167, 139, 250, 0.9) 6%,
            rgba(96, 165, 250, 0.9) 14%,
            transparent 26%,
            transparent 100%
          );
          animation: rotate-border-angle 5s linear infinite;
        }

        @keyframes rotate-border-angle {
          to {
            --border-angle: 360deg;
          }
        }

        .neon-cta {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 1.25rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 600;
          color: #ece2ff;
          background: linear-gradient(
            180deg,
            rgba(139, 92, 246, 0.18),
            rgba(59, 130, 246, 0.08)
          );
          border: 1px solid rgba(167, 139, 250, 0.5);
          box-shadow:
            0 0 6px rgba(167, 139, 250, 0.5),
            0 0 16px rgba(96, 165, 250, 0.35),
            inset 0 0 6px rgba(167, 139, 250, 0.25);
          transition:
            box-shadow 0.3s ease,
            transform 0.2s ease,
            color 0.3s ease;
        }

        .neon-cta:hover {
          color: #ffffff;
          transform: translateY(-1px);
          box-shadow:
            0 0 10px rgba(167, 139, 250, 0.9),
            0 0 28px rgba(96, 165, 250, 0.6),
            0 0 44px rgba(139, 92, 246, 0.4),
            inset 0 0 10px rgba(167, 139, 250, 0.4);
        }

        .neon-cta:focus-visible {
          outline: 2px solid rgba(167, 139, 250, 0.9);
          outline-offset: 2px;
        }

        @media (prefers-reduced-motion: reduce) {
          .beam-border {
            animation: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;

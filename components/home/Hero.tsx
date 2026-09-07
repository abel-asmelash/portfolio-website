"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { FaLinkedinIn, FaEnvelope, FaGithub, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { gsap } from "gsap";
const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  // References for GSAP stagger animations
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const socialRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // 1. Mouse Spotlight Tracking (Minimal CSS transform update)
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(spotlightRef.current, {
        x: x - 250,
        y: y - 250,
        duration: 0.9,
        ease: "power2.out",
      });
    };

    const container = containerRef.current;
    container?.addEventListener("mousemove", handleMouseMove);

    // 2. Entrance Animation Timeline
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        [badgeRef.current, titleRef.current, descRef.current, ctaRef.current],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
      )
        .fromTo(
          socialRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.5 },
          "-=0.3",
        )
        .fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.92, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 1 },
          "-=0.6",
        );
    }, containerRef);

    return () => {
      container?.removeEventListener("mousemove", handleMouseMove);
      ctx.revert();
    };
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen bg-white dark:bg-[#0b0f19] text-gray-900 dark:text-white flex items-center justify-center px-6 py-12 overflow-hidden"
    >
      {/* BACKGROUND ACCENTS (Low Overhead GSAP-Tracked Glow & Ambient Mesh) */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px] -z-10 transition-opacity duration-500 hidden sm:block"
      />

      {/* Static Ambient Color Nodes */}
      <div className="pointer-events-none absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] -z-10" />

      {/* Grid Pattern Overlay for AI/Dev Aesthetics */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1f293d15_1px,transparent_1px),linear-gradient(to_bottom,#1f293d15_1px,transparent_1px)] bg-size-[4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        {/* Left Column: Text Section */}
        <section className="flex flex-col space-y-4 text-left">
          <p
            ref={badgeRef}
            className="text-gray-400 text-sm tracking-widest uppercase font-semibold"
          >
            HELLO, I&lsquo;M ABEL ASMELASH
          </p>

          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl font-extrabold uppercase leading-tight tracking-wide"
          >
            FULL-STACK DEVELOPER
            <br />
            <span className="bg-linear-to-r from-purple-500 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
              AI INTEGRATION
            </span>
          </h1>

          <p
            ref={descRef}
            className="text-gray-600 dark:text-gray-400 text-lg max-w-lg leading-relaxed"
          >
            Crafting clean, high-performance web applications powered by modern
            LLMs.
          </p>

          {/* CTA Button */}
          <div ref={ctaRef} className="pt-2">
            <Link
              href="/projects"
              className="inline-block bg-linear-to-r from-purple-500 to-blue-400 text-white font-bold py-3 px-6 rounded-full hover:from-purple-600 hover:to-blue-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-purple-500/20"
            >
              View My Work
            </Link>
          </div>

          {/* Social Icons */}
          <div ref={socialRef} className="flex items-center gap-4 pt-4">
            {[
              {
                icon: <FaGithub />,
                href: "https://github.com/abel-asmelash",
              },
              {
                icon: <FaLinkedinIn />,
                href: "https://www.linkedin.com/in/abel-asmelash-6325b0382/",
              },
              {
                icon: <FaEnvelope />,
                href: "mailto:abelasmelash07@gmail.com",
              },
              {
                icon: <FaWhatsapp />,
                href: "https://wa.me/31613983234",
              },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-800 bg-gray-100 dark:bg-gray-900/80 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-purple-500 hover:-translate-y-1 transition-all duration-200"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </section>

        {/* Right Column: Profile Picture */}
        <section ref={imageRef} className="flex justify-center items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-purple-500 to-blue-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <Image
              src="/images/profile.png.jpeg"
              alt="Profile Picture"
              width={320}
              height={320}
              priority
              className="relative w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-xl shadow-2xl border border-white/10"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Hero;

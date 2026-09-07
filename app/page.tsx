"use client";
import { useState } from "react";
import Hero from "@/components/home/Hero";
import WhatIDo from "@/components/home/WhatIDo";
import Project from "@/app/projects/page";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [loading, setLoading] = useState(true);
  return (
    <main className="min-h-screen bg-white dark:bg-[#0b0f19] text-gray-900 dark:text-white">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 space-y-16 py-12">
        <Hero />
        <WhatIDo />
        <Project />
      </div>
    </main>
  );
}

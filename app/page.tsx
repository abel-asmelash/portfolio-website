import Hero from "@/components/home/Hero";
import WhatIDo from "@/components/home/WhatIDo";
import Project from "@/app/projects/page"
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 space-y-16 py-12">
        <Hero />
        <WhatIDo />
        <Project />
      </div>
    </main>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { Code, Monitor, Rocket } from "lucide-react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[10000] bg-[#05040a] flex flex-col items-center justify-center text-white select-none overflow-hidden font-sans">
      {/* Grid background + neon glow blobs */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #1f1b3a 1px, transparent 1px), linear-gradient(to bottom, #1f1b3a 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-900/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Large background orbital ring */}
      <div className="absolute w-[800px] h-[400px] border border-purple-500/10 rounded-[100%] rotate-[-25deg] pointer-events-none flex items-center justify-center">
        <div className="absolute w-2.5 h-2.5 bg-purple-400 rounded-full blur-[1px] shadow-[0_0_12px_#c084fc] top-0 left-1/4 animate-pulse" />
        <div className="absolute w-2 h-2 bg-indigo-400 rounded-full blur-[1px] shadow-[0_0_10px_#818cf8] bottom-4 right-1/4" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-[480px] w-full px-6">
        {/* Central diamond logo */}
        <div className="relative mb-10 flex items-center justify-center">
          {/* Neon glow behind the logo */}
          <div className="absolute w-36 h-36 bg-purple-600/30 blur-3xl rounded-full animate-pulse" />

          {/* Spinning ring around the logo */}
          <div className="absolute w-52 h-20 border border-purple-400/40 rounded-[100%] -rotate-[28deg] shadow-[0_0_15px_rgba(168,85,247,0.2)] animate-[spin_12s_linear_infinite]">
            <div className="absolute -top-1 left-6 w-2 h-2 bg-purple-300 rounded-full shadow-[0_0_8px_#d8b4fe]" />
          </div>

          {/* Diamond frame */}
          <div className="relative w-28 h-28 border border-purple-500/50 bg-[#0a0814]/80 backdrop-blur-md rounded-2xl rotate-45 shadow-[0_0_30px_rgba(147,51,234,0.3)] flex items-center justify-center">
            {/* Content inside the diamond (counter-rotated to stay upright) */}
            <div className="-rotate-45 flex items-center gap-1 text-2xl font-black tracking-widest">
              <span className="text-purple-400 font-mono text-xl opacity-80">
                &lt;
              </span>
              <span className="bg-gradient-to-tr from-purple-400 via-indigo-300 to-white bg-clip-text text-transparent text-3xl font-extrabold drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]">
                N
              </span>
              <span className="text-purple-400 font-mono text-xl opacity-80">
                &gt;
              </span>
            </div>
          </div>
        </div>

        {/* Headings */}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-2">
          Welcome to My{" "}
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Portfolio
          </span>
        </h1>

        <p className="text-xs font-mono text-gray-400 tracking-[0.3em] uppercase mb-9 opacity-80">
          Code <span className="text-purple-500 mx-1">•</span> Design{" "}
          <span className="text-purple-500 mx-1">•</span> Create
        </p>

        {/* Progress bar + percentage */}
        <div className="w-full space-y-3 mb-10">
          <div className="flex items-center gap-4">
            {/* Progress bar container */}
            <div className="flex-1 h-3 bg-[#110f1d] border border-purple-900/40 rounded-full p-[2px] overflow-hidden shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-400 rounded-full transition-all duration-100 ease-out shadow-[0_0_15px_rgba(168,85,247,0.9)]"
                style={{ width: `${progress}%` }}
              />
            </div>
            {/* Percentage */}
            <span className="text-sm font-mono font-bold text-gray-300 w-10 text-right">
              {progress}%
            </span>
          </div>

          {/* Subtext */}
          <div className="text-center">
            <span className="text-[10px] font-mono tracking-[0.35em] text-gray-500 uppercase">
              Loading Experience
            </span>
          </div>
        </div>

        {/* Bottom icons */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full border border-purple-800/40 bg-[#0d0b18] flex items-center justify-center text-purple-400 shadow-[0_0_10px_rgba(147,51,234,0.15)] hover:border-purple-500 transition-colors">
            <Code size={16} />
          </div>
          <div className="w-10 h-10 rounded-full border border-purple-800/40 bg-[#0d0b18] flex items-center justify-center text-purple-400 shadow-[0_0_10px_rgba(147,51,234,0.15)] hover:border-purple-500 transition-colors">
            <Monitor size={16} />
          </div>
          <div className="w-10 h-10 rounded-full border border-purple-800/40 bg-[#0d0b18] flex items-center justify-center text-purple-400 shadow-[0_0_10px_rgba(147,51,234,0.15)] hover:border-purple-500 transition-colors">
            <Rocket size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}

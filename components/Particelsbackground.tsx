"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  glowColor: string;
  alpha: number;
  vx: number;
  vy: number;
  pulseSpeed: number;
  isAccentDot: boolean;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Number of particles/stars spread across the page
    const particleCount = 220;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const isAccentDot = i === 0; // one standout accent particle

      particles.push({
        // Spread across the full page (horizontal & vertical)
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        // Varying sizes for a sense of depth
        radius: isAccentDot ? 4.5 : Math.random() * 2.5 + 0.3,
        // Purple/blue accent to match the site's theme
        color: isAccentDot ? "#8b5cf6" : "#e0e7ff",
        glowColor: isAccentDot ? "#8b5cf6" : "#60a5fa",
        alpha: Math.random() * 0.8 + 0.2,
        // Slow drifting speed
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        isAccentDot,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Drift each particle slowly
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Twinkle effect
        p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.005;
        const currentAlpha = Math.max(0.15, Math.min(0.9, p.alpha));

        // Draw particle with glow
        ctx.save();
        ctx.globalAlpha = currentAlpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        ctx.fillStyle = p.color;
        ctx.shadowBlur = p.isAccentDot ? 16 : 8;
        ctx.shadowColor = p.glowColor;

        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
  );
}

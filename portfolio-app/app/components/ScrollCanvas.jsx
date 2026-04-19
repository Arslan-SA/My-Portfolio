"use client";

import { useRef, useEffect, useState } from "react";

export default function ScrollCanvas() {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / sectionHeight));
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Draw frames based on scroll progress
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    const p = scrollProgress;

    ctx.clearRect(0, 0, w, h);

    // Background gradient that shifts with scroll
    const bgGrad = ctx.createRadialGradient(
      w / 2,
      h / 2,
      0,
      w / 2,
      h / 2,
      Math.max(w, h) * 0.8
    );
    bgGrad.addColorStop(0, `rgba(99, 102, 241, ${0.08 + p * 0.05})`);
    bgGrad.addColorStop(0.5, `rgba(34, 211, 238, ${0.03 + p * 0.03})`);
    bgGrad.addColorStop(1, "rgba(5, 5, 5, 1)");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Particle system - neural network style
    const totalNodes = 60;
    const nodes = [];
    const time = p * Math.PI * 4;

    for (let i = 0; i < totalNodes; i++) {
      const angle = (i / totalNodes) * Math.PI * 2 + time * 0.3;
      const radius = 100 + Math.sin(time + i * 0.5) * (50 + p * 150);
      const spiralOffset = i * 0.15;

      const x =
        w / 2 +
        Math.cos(angle + spiralOffset) * radius * (1 + p * 0.8) +
        Math.sin(time * 0.5 + i) * 30;
      const y =
        h / 2 +
        Math.sin(angle + spiralOffset) * radius * (0.6 + p * 0.5) +
        Math.cos(time * 0.3 + i) * 20;

      const size = 2 + Math.sin(time + i) * 1.5 + p * 2;
      const alpha = 0.3 + Math.sin(time * 2 + i * 0.8) * 0.2 + p * 0.3;

      nodes.push({ x, y, size, alpha });
    }

    // Draw connections
    ctx.lineWidth = 0.5;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 120 + p * 80;

        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.15 * (0.5 + p * 0.5);
          ctx.beginPath();
          ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    for (const node of nodes) {
      // Glow
      const glow = ctx.createRadialGradient(
        node.x,
        node.y,
        0,
        node.x,
        node.y,
        node.size * 4
      );
      glow.addColorStop(0, `rgba(99, 102, 241, ${node.alpha * 0.5})`);
      glow.addColorStop(1, "rgba(99, 102, 241, 0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.size * 4, 0, Math.PI * 2);
      ctx.fill();

      // Core
      ctx.fillStyle = `rgba(255, 255, 255, ${node.alpha})`;
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
      ctx.fill();
    }

    // Central element — morphing shape
    const centerSize = 40 + p * 60;
    const sides = Math.floor(3 + p * 5);
    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.rotate(time * 0.2);

    ctx.beginPath();
    for (let i = 0; i <= sides; i++) {
      const a = (i / sides) * Math.PI * 2;
      const r = centerSize + Math.sin(time * 2 + i) * 10;
      const px = Math.cos(a) * r;
      const py = Math.sin(a) * r;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.strokeStyle = `rgba(34, 211, 238, ${0.3 + p * 0.4})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Inner glow
    const innerGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, centerSize);
    innerGlow.addColorStop(0, `rgba(99, 102, 241, ${0.1 + p * 0.1})`);
    innerGlow.addColorStop(1, "rgba(99, 102, 241, 0)");
    ctx.fillStyle = innerGlow;
    ctx.fill();

    ctx.restore();

    // Data flow lines
    const flowCount = 5;
    for (let i = 0; i < flowCount; i++) {
      const flowProgress = (p * 3 + i * 0.3) % 1;
      const startX = -50;
      const startY = h * 0.2 + (i * h * 0.15);
      const endX = w + 50;
      const endY = h * 0.3 + (i * h * 0.12);
      const currentX = startX + (endX - startX) * flowProgress;
      const currentY = startY + (endY - startY) * flowProgress + Math.sin(flowProgress * Math.PI * 3) * 30;

      const trailLength = 80;
      const grad = ctx.createLinearGradient(
        currentX - trailLength,
        currentY,
        currentX,
        currentY
      );
      grad.addColorStop(0, "rgba(34, 211, 238, 0)");
      grad.addColorStop(1, `rgba(34, 211, 238, ${0.3 + p * 0.3})`);

      ctx.beginPath();
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1;
      ctx.moveTo(currentX - trailLength, currentY);
      ctx.lineTo(currentX, currentY);
      ctx.stroke();

      // Head dot
      ctx.fillStyle = `rgba(34, 211, 238, ${0.6 + p * 0.4})`;
      ctx.beginPath();
      ctx.arc(currentX, currentY, 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }, [scrollProgress]);

  return (
    <section ref={sectionRef} className="canvas-section relative">
      <div className="canvas-sticky">
        <canvas ref={canvasRef} className="absolute inset-0" />

        {/* Parallax text overlays */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none gap-4">
          <div
            className="parallax-text text-white"
            style={{
              transform: `translateX(${(scrollProgress - 0.5) * -300}px)`,
              opacity: 0.03 + scrollProgress * 0.04,
            }}
          >
            DATA SCIENCE • MACHINE LEARNING • PYTHON
          </div>
          <div
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-center px-4"
            style={{ opacity: Math.min(1, scrollProgress * 3) }}
          >
            <span className="gradient-text">
              {scrollProgress < 0.33
                ? "Exploring Data"
                : scrollProgress < 0.66
                  ? "Building Models"
                  : "Delivering Insights"}
            </span>
          </div>
          <div
            className="parallax-text text-white"
            style={{
              transform: `translateX(${(scrollProgress - 0.5) * 300}px)`,
              opacity: 0.03 + scrollProgress * 0.04,
            }}
          >
            STATISTICS • ANALYSIS • NEURAL NETWORKS
          </div>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3">
          <div className="w-40 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#6366f1] to-[#22d3ee] rounded-full transition-all duration-100"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
          <span className="text-xs font-mono text-white/30">
            {Math.round(scrollProgress * 100)}%
          </span>
        </div>
      </div>
    </section>
  );
}

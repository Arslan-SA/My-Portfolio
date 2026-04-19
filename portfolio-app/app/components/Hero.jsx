"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const sectionRef = useRef(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight =
        sectionRef.current.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / sectionHeight));
      setP(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Scroll phases ──
  // 0.00–0.20: Full-screen photo with name overlay, face looking left
  // 0.20–0.45: Face slowly rotates right, degree info slides in
  // 0.45–0.65: Certificates & SIH info appear alongside photo
  // 0.65–0.85: CTA buttons appear, photo starts pulling back
  // 0.85–1.00: Photo fades out, section exits

  // Photo transforms
  const photoRotateY = -12 + p * 35; // -12° → +23° (left-facing → right-facing)
  const photoScale = 1.05 - p * 0.15; // slight zoom out
  const photoX = p < 0.2 ? 0 : Math.min(30, (p - 0.2) * 80); // slides right as info appears
  const photoOpacity = p > 0.82 ? Math.max(0, 1 - (p - 0.82) / 0.18) : 1;
  const photoBrightness = 0.7 + p * 0.2;

  // Overlay gradient shifts to reveal text space
  const overlayOpacity = 0.3 + p * 0.35;

  // Name: always visible until fade-out
  const nameOpacity = p > 0.85 ? Math.max(0, 1 - (p - 0.85) / 0.15) : 1;
  const nameY = p * -20;

  // Tagline
  const taglineOpacity =
    p < 0.06 ? 0 : p < 0.15 ? (p - 0.06) / 0.09 : p > 0.85 ? Math.max(0, 1 - (p - 0.85) / 0.15) : 1;

  // Degree info
  const degreeOpacity =
    p < 0.2 ? 0 : p < 0.32 ? (p - 0.2) / 0.12 : p > 0.85 ? Math.max(0, 1 - (p - 0.85) / 0.15) : 1;
  const degreeY = p < 0.2 ? 50 : p < 0.32 ? 50 - ((p - 0.2) / 0.12) * 50 : 0;

  // Certificates
  const certsOpacity =
    p < 0.38 ? 0 : p < 0.5 ? (p - 0.38) / 0.12 : p > 0.85 ? Math.max(0, 1 - (p - 0.85) / 0.15) : 1;
  const certsY = p < 0.38 ? 50 : p < 0.5 ? 50 - ((p - 0.38) / 0.12) * 50 : 0;

  // SIH
  const sihOpacity =
    p < 0.52 ? 0 : p < 0.62 ? (p - 0.52) / 0.1 : p > 0.85 ? Math.max(0, 1 - (p - 0.85) / 0.15) : 1;
  const sihY = p < 0.52 ? 40 : p < 0.62 ? 40 - ((p - 0.52) / 0.1) * 40 : 0;

  // CTA
  const ctaOpacity =
    p < 0.64 ? 0 : p < 0.74 ? (p - 0.64) / 0.1 : p > 0.85 ? Math.max(0, 1 - (p - 0.85) / 0.15) : 1;
  const ctaY = p < 0.64 ? 30 : p < 0.74 ? 30 - ((p - 0.64) / 0.1) * 30 : 0;

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: "450vh" }}
      id="hero"
    >
      {/* Sticky full-screen container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* ── PHOTO — RIGHT SIDE, FULL FACE VISIBLE ── */}
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: photoOpacity,
          }}
        >
          <div
            className="absolute top-0 right-0 h-full"
            style={{
              width: "60%",
              perspective: "1400px",
            }}
          >
            <div
              className="relative w-full h-full"
              style={{
                transform: `rotateY(${photoRotateY}deg) scale(${photoScale}) translateX(${photoX}%)`,
                transformOrigin: "center center",
                transformStyle: "preserve-3d",
                transition: "transform 0.05s linear",
              }}
            >
              <Image
                src="/arslan-photo.png"
                alt="Arslan — Data Science student at IIT Madras"
                fill
                sizes="60vw"
                className="object-contain object-right"
                style={{
                  filter: `brightness(${photoBrightness})`,
                }}
                priority
              />
            </div>
          </div>
        </div>

        {/* ── DARK GRADIENT OVERLAYS ── */}
        {/* Bottom gradient - always present for text readability */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: `linear-gradient(
              to top,
              rgba(5, 5, 5, 0.95) 0%,
              rgba(5, 5, 5, ${overlayOpacity}) 40%,
              rgba(5, 5, 5, 0.1) 70%,
              rgba(5, 5, 5, 0.3) 100%
            )`,
          }}
        />
        {/* Left side gradient for text area */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: `linear-gradient(
              to right,
              rgba(5, 5, 5, ${0.6 + p * 0.3}) 0%,
              rgba(5, 5, 5, ${0.2 + p * 0.2}) 50%,
              transparent 80%
            )`,
            opacity: p > 0.15 ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        />

        {/* ── VIGNETTE ── */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            boxShadow: "inset 0 0 200px 80px rgba(5,5,5,0.6)",
          }}
        />

        {/* ── CONTENT OVERLAY ── */}
        <div className="relative z-[2] h-full flex items-end lg:items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 pb-20 lg:pb-0 w-full">
            <div className="max-w-xl">
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 backdrop-blur-md border border-white/[0.1] mb-6"
                style={{ opacity: nameOpacity }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm text-white/70 font-mono">
                  Open to opportunities
                </span>
              </motion.div>

              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                style={{
                  opacity: nameOpacity,
                  transform: `translateY(${nameY}px)`,
                }}
              >
                <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tight mb-3">
                  <span className="block text-white drop-shadow-[0_2px_30px_rgba(0,0,0,0.8)]">
                    Arslan
                  </span>
                </h1>
              </motion.div>

              {/* Tagline */}
              <div
                style={{ opacity: taglineOpacity }}
                className="mb-8"
              >
                <p className="text-lg sm:text-xl text-white/60 leading-relaxed font-light max-w-md drop-shadow-lg">
                  Data Science Student •{" "}
                  <span className="text-[#818cf8] font-medium">IIT Madras</span>
                </p>
              </div>

              {/* ── DEGREE INFO ── */}
              <div
                style={{
                  opacity: degreeOpacity,
                  transform: `translateY(${degreeY}px)`,
                }}
                className="mb-5"
              >
                <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-5 border border-white/[0.08]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#6366f1]/15 border border-[#6366f1]/25 flex items-center justify-center text-xl flex-shrink-0">
                      🎓
                    </div>
                    <div>
                      <p className="text-xs font-mono text-[#6366f1] uppercase tracking-wider mb-1">
                        Currently Pursuing
                      </p>
                      <h3 className="text-base sm:text-lg font-bold text-white/95">
                        B.Sc Data Science & Applications
                      </h3>
                      <p className="text-sm text-[#22d3ee] font-medium mt-0.5">
                        IIT Madras
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── CERTIFICATES ── */}
              <div
                style={{
                  opacity: certsOpacity,
                  transform: `translateY(${certsY}px)`,
                }}
                className="mb-5"
              >
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-black/40 backdrop-blur-xl rounded-xl p-4 border border-white/[0.08]">
                    <span className="text-xl block mb-2">📜</span>
                    <p className="text-xs text-white/40 font-mono uppercase tracking-wider">
                      Completed
                    </p>
                    <p className="text-sm text-white/90 font-semibold mt-1">
                      CS50x
                    </p>
                    <p className="text-xs text-emerald-400/80 mt-0.5">
                      Harvard • edX
                    </p>
                  </div>
                  <div className="bg-black/40 backdrop-blur-xl rounded-xl p-4 border border-white/[0.08]">
                    <span className="text-xl block mb-2">🏅</span>
                    <p className="text-xs text-white/40 font-mono uppercase tracking-wider">
                      Pursuing
                    </p>
                    <p className="text-sm text-white/90 font-semibold mt-1">
                      DSA Program
                    </p>
                    <p className="text-xs text-amber-400/80 mt-0.5">
                      GeeksforGeeks
                    </p>
                  </div>
                </div>
              </div>

              {/* ── SIH ACHIEVEMENT ── */}
              <div
                style={{
                  opacity: sihOpacity,
                  transform: `translateY(${sihY}px)`,
                }}
                className="mb-6"
              >
                <div className="bg-black/40 backdrop-blur-xl rounded-xl p-4 border border-white/[0.08] flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-500/25 flex items-center justify-center text-lg flex-shrink-0">
                    🏆
                  </div>
                  <div>
                    <p className="text-sm text-white/90 font-semibold">
                      Smart India Hackathon (SIH)
                    </p>
                    <p className="text-xs text-white/40 mt-0.5">
                      India&apos;s biggest hackathon participant
                    </p>
                  </div>
                </div>
              </div>

              {/* ── CTA BUTTONS ── */}
              <div
                style={{
                  opacity: ctaOpacity,
                  transform: `translateY(${ctaY}px)`,
                }}
              >
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="group inline-flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-[#6366f1] to-[#818cf8] text-white font-semibold rounded-full hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-all duration-300 hover:scale-105 text-sm"
                  >
                    View Projects
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="inline-flex items-center gap-3 px-7 py-3.5 bg-white/[0.08] backdrop-blur-md border border-white/[0.15] text-white/90 font-semibold rounded-full hover:bg-white/[0.12] transition-all duration-300 text-sm"
                  >
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── SCROLL INDICATOR ── */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2"
          style={{ opacity: Math.max(0, 1 - p * 6) }}
        >
          <span className="text-xs text-white/40 font-mono uppercase tracking-widest drop-shadow-lg">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-white/50" />
          </motion.div>
        </div>

        {/* ── PROGRESS BAR ── */}
        <div className="absolute top-0 left-0 right-0 h-[2px] z-[4]">
          <div
            className="h-full bg-gradient-to-r from-[#6366f1] via-[#22d3ee] to-[#818cf8]"
            style={{ width: `${p * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
}

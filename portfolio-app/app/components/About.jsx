"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(99,102,241,0.06)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-sm font-mono text-[#6366f1] tracking-wider uppercase">
            01 / About
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mt-4 tracking-tight">
            More About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Bio narrative */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-white/60 leading-relaxed mb-6">
              I&apos;m someone who genuinely loves breaking down complex
              problems with data. My journey started with sheer curiosity about
              how algorithms can uncover patterns hidden in noise — and that
              curiosity hasn&apos;t stopped.
            </p>
            <p className="text-lg text-white/60 leading-relaxed mb-6">
              At{" "}
              <span className="text-[#22d3ee] font-medium">IIT Madras</span>, I
              study everything from mathematical foundations and probability to
              applied machine learning. Outside the classroom, I&apos;ve pushed
              myself through Harvard&apos;s{" "}
              <span className="text-white font-medium">CS50x</span> to sharpen
              my core CS skills and am currently leveling up my DSA through
              GeeksforGeeks.
            </p>
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              Competing in the{" "}
              <span className="text-[#818cf8] font-medium">
                Smart India Hackathon
              </span>{" "}
              taught me how to work under pressure, collaborate with a team, and
              ship something real within tight deadlines. That experience
              reshaped how I approach every project since.
            </p>

            {/* Philosophy cards */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { emoji: "🔍", label: "Curious", sub: "Always learning" },
                { emoji: "⚡", label: "Driven", sub: "Results-focused" },
                { emoji: "🤝", label: "Team Player", sub: "Collaborative" },
              ].map((trait, i) => (
                <motion.div
                  key={trait.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="glass-card p-4 text-center"
                >
                  <span className="text-2xl block mb-2">{trait.emoji}</span>
                  <p className="text-sm text-white/80 font-semibold">
                    {trait.label}
                  </p>
                  <p className="text-xs text-white/30 mt-0.5">{trait.sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Code block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="glass-card p-6 sm:p-8 font-mono text-sm">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/[0.06]">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-white/30 text-xs">
                  arslan_profile.py
                </span>
              </div>

              <div className="space-y-2 text-white/70">
                <div>
                  <span className="text-[#c678dd]">class</span>{" "}
                  <span className="text-[#e5c07b]">Arslan</span>
                  <span className="text-white/40">:</span>
                </div>
                <div className="pl-6">
                  <span className="text-[#c678dd]">def</span>{" "}
                  <span className="text-[#61afef]">__init__</span>
                  <span className="text-white/40">(</span>
                  <span className="text-[#e06c75]">self</span>
                  <span className="text-white/40">):</span>
                </div>
                <div className="pl-12">
                  <span className="text-white/40">self.</span>
                  <span className="text-[#e06c75]">name</span>
                  <span className="text-white/40"> = </span>
                  <span className="text-[#98c379]">&quot;Arslan&quot;</span>
                </div>
                <div className="pl-12">
                  <span className="text-white/40">self.</span>
                  <span className="text-[#e06c75]">university</span>
                  <span className="text-white/40"> = </span>
                  <span className="text-[#98c379]">&quot;IIT Madras&quot;</span>
                </div>
                <div className="pl-12">
                  <span className="text-white/40">self.</span>
                  <span className="text-[#e06c75]">degree</span>
                  <span className="text-white/40"> = </span>
                  <span className="text-[#98c379]">
                    &quot;B.Sc Data Science&quot;
                  </span>
                </div>
                <div className="pl-12">
                  <span className="text-white/40">self.</span>
                  <span className="text-[#e06c75]">mindset</span>
                  <span className="text-white/40"> = </span>
                  <span className="text-[#98c379]">
                    &quot;Never stop learning&quot;
                  </span>
                </div>
                <div className="pl-12 mt-2">
                  <span className="text-white/40">self.</span>
                  <span className="text-[#e06c75]">passion</span>
                  <span className="text-white/40"> = </span>
                  <span className="text-[#d19a66]">float</span>
                  <span className="text-white/40">(</span>
                  <span className="text-[#98c379]">&quot;inf&quot;</span>
                  <span className="text-white/40">)</span>
                </div>
                <div className="mt-4 pl-6">
                  <span className="text-[#c678dd]">def</span>{" "}
                  <span className="text-[#61afef]">current_status</span>
                  <span className="text-white/40">(</span>
                  <span className="text-[#e06c75]">self</span>
                  <span className="text-white/40">):</span>
                </div>
                <div className="pl-12">
                  <span className="text-[#c678dd]">return</span>{" "}
                  <span className="text-[#98c379]">
                    &quot;Building the future 🚀&quot;
                  </span>
                </div>
              </div>

              {/* Blinking cursor */}
              <div className="mt-4 flex items-center gap-2">
                <span className="text-white/30">{">>>"}</span>
                <span className="w-2 h-4 bg-[#6366f1] animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

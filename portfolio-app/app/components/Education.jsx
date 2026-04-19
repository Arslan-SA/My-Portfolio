"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const education = [
  {
    type: "degree",
    title: "B.Sc in Data Science & Applications",
    institution: "Indian Institute of Technology, Madras",
    period: "Currently Pursuing",
    status: "ongoing",
    description:
      "Comprehensive program covering Mathematics, Statistics, Machine Learning, Data Mining, and Programming. One of India's premier institutions for technology education.",
    highlights: [
      "Machine Learning & AI",
      "Statistical Methods",
      "Data Mining",
      "Mathematical Foundations",
    ],
    icon: "🎓",
    color: "#6366f1",
  },
];

const certificates = [
  {
    type: "certificate",
    title: "CS50x: Introduction to Computer Science",
    institution: "Harvard University (via edX)",
    period: "Completed",
    status: "completed",
    description:
      "Harvard's renowned introduction to computer science covering algorithms, data structures, software engineering, and web development. One of the most prestigious online courses in CS.",
    highlights: [
      "Algorithms & Data Structures",
      "C Programming",
      "Python & SQL",
      "Web Technologies",
    ],
    icon: "📜",
    color: "#22d3ee",
  },
  {
    type: "certificate",
    title: "Data Structures & Algorithms",
    institution: "GeeksforGeeks (GFG)",
    period: "Currently Pursuing",
    status: "ongoing",
    description:
      "Intensive certificate program focusing on problem-solving, competitive programming patterns, and algorithmic thinking using C++ and Python.",
    highlights: [
      "Advanced DSA",
      "Problem Solving",
      "Competitive Programming",
      "C++ & Python",
    ],
    icon: "🏅",
    color: "#818cf8",
  },
];

const achievements = [
  {
    title: "Smart India Hackathon (SIH)",
    description:
      "Participated in India's biggest hackathon, collaborating with a team to build innovative solutions for real-world problems posed by government organizations and industries.",
    icon: "🏆",
    color: "#f59e0b",
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      className="relative py-32 overflow-hidden"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(99,102,241,0.04)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-sm font-mono text-[#818cf8] tracking-wider uppercase">
            03 / Education
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mt-4 tracking-tight">
            Education &{" "}
            <span className="gradient-text">Certificates</span>
          </h2>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-sm font-mono text-white/40 uppercase tracking-wider mb-8 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-white/20" />
            Academic Degree
          </h3>

          {education.map((item) => (
            <div
              key={item.title}
              className="glass-card p-8 sm:p-10 relative overflow-hidden gradient-border"
            >
              {/* Decorative glow */}
              <div
                className="absolute top-0 right-0 w-64 h-64 opacity-20"
                style={{
                  background: `radial-gradient(circle, ${item.color}30, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                <div className="flex flex-wrap items-start gap-4 mb-6">
                  <span className="text-4xl">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-2xl sm:text-3xl font-bold text-white/95 tracking-tight">
                      {item.title}
                    </h4>
                    <p
                      className="text-base font-medium mt-1"
                      style={{ color: item.color }}
                    >
                      {item.institution}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {item.period}
                  </span>
                </div>

                <p className="text-white/50 leading-relaxed mb-6 max-w-2xl">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/[0.04] border border-white/[0.08] text-white/60"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-sm font-mono text-white/40 uppercase tracking-wider mb-8 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-white/20" />
            Certificates & Programs
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                className="glass-card p-6 sm:p-8 relative overflow-hidden group"
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle, ${cert.color}, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-3xl">{cert.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-bold text-white/90 leading-snug">
                        {cert.title}
                      </h4>
                      <p
                        className="text-sm font-medium mt-1"
                        style={{ color: cert.color }}
                      >
                        {cert.institution}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-4 ${
                      cert.status === "completed"
                        ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                        : "bg-amber-500/10 border border-amber-500/20 text-amber-400"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        cert.status === "completed"
                          ? "bg-emerald-400"
                          : "bg-amber-400 animate-pulse"
                      }`}
                    />
                    {cert.period}
                  </span>

                  <p className="text-white/40 text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {cert.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-2.5 py-1 text-xs rounded-md bg-white/[0.03] text-white/50"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-sm font-mono text-white/40 uppercase tracking-wider mb-8 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-white/20" />
            Achievements
          </h3>

          {achievements.map((ach) => (
            <div
              key={ach.title}
              className="glass-card p-6 sm:p-8 flex items-start gap-5"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{
                  background: `${ach.color}15`,
                  border: `1px solid ${ach.color}30`,
                }}
              >
                {ach.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold text-white/90 mb-2">
                  {ach.title}
                </h4>
                <p className="text-white/40 leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

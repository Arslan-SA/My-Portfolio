"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const techStack = [
  {
    name: "Python",
    icon: "🐍",
    level: 90,
    color: "#3776AB",
    category: "core",
    description: "Data analysis, ML pipelines, scripting",
  },
  {
    name: "Machine Learning",
    icon: "🧠",
    level: 80,
    color: "#6366f1",
    category: "core",
    description: "Supervised, unsupervised, deep learning",
  },
  {
    name: "Statistics",
    icon: "📊",
    level: 85,
    color: "#22d3ee",
    category: "core",
    description: "Hypothesis testing, regression, probability",
  },
  {
    name: "C++",
    icon: "⚡",
    level: 70,
    color: "#00599C",
    category: "additional",
    description: "DSA, competitive programming, OOP",
  },
  {
    name: "NumPy",
    icon: "🔢",
    level: 85,
    color: "#013243",
    category: "tools",
    description: "Numerical computing, array operations",
  },
  {
    name: "Pandas",
    icon: "🐼",
    level: 85,
    color: "#150458",
    category: "tools",
    description: "Data manipulation, cleaning, analysis",
  },
  {
    name: "Scikit-Learn",
    icon: "⚙️",
    level: 78,
    color: "#F7931E",
    category: "tools",
    description: "Classification, clustering, preprocessing",
  },
  {
    name: "Matplotlib",
    icon: "📈",
    level: 80,
    color: "#11557c",
    category: "tools",
    description: "Data visualization, plotting",
  },
  {
    name: "SQL",
    icon: "🗃️",
    level: 75,
    color: "#4479A1",
    category: "additional",
    description: "Database queries, data extraction",
  },
  {
    name: "Git",
    icon: "🔀",
    level: 75,
    color: "#F05032",
    category: "additional",
    description: "Version control, collaboration",
  },
];

const categories = [
  { key: "all", label: "All" },
  { key: "core", label: "Core" },
  { key: "tools", label: "Tools & Libraries" },
  { key: "additional", label: "Additional" },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? techStack
      : techStack.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(34,211,238,0.04)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-[#22d3ee] tracking-wider uppercase">
            02 / Tech Stack
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mt-4 tracking-tight">
            Skills &{" "}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg text-lg">
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-[#6366f1] text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                  : "bg-white/[0.04] text-white/50 border border-white/[0.08] hover:bg-white/[0.08] hover:text-white/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card p-6 group cursor-default"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <div>
                    <h3 className="font-semibold text-white/90">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-white/30 mt-0.5">
                      {skill.description}
                    </p>
                  </div>
                </div>
                <span
                  className="text-sm font-mono font-bold"
                  style={{ color: skill.color }}
                >
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{
                    duration: 1.2,
                    delay: 0.3 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                    boxShadow: `0 0 10px ${skill.color}40`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 overflow-hidden"
        >
          <div className="flex marquee-track">
            {[...techStack, ...techStack].map((skill, i) => (
              <span
                key={`${skill.name}-${i}`}
                className="flex items-center gap-2 px-8 text-2xl font-bold text-white/[0.04] whitespace-nowrap"
              >
                {skill.icon} {skill.name}
                <span className="text-white/[0.08]">•</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

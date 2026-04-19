"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "ML Sentiment Analyzer",
    description:
      "NLP-based sentiment analysis tool built with Python and scikit-learn. Processes text data to classify sentiment with high accuracy using TF-IDF and logistic regression.",
    tags: ["Python", "Scikit-Learn", "NLP", "Machine Learning"],
    color: "#6366f1",
    category: "ml",
    icon: "🧠",
    link: "#",
  },
  {
    title: "Statistical Dashboard",
    description:
      "Interactive data visualization dashboard for exploratory data analysis, featuring dynamic charts, hypothesis testing tools, and statistical summaries using Pandas and Matplotlib.",
    tags: ["Python", "Pandas", "Matplotlib", "Statistics"],
    color: "#22d3ee",
    category: "data",
    icon: "📊",
    link: "#",
  },
  {
    title: "SIH Hackathon Project",
    description:
      "Collaborative hackathon solution developed during Smart India Hackathon. Built an innovative problem-solving application addressing real-world challenges with data-driven approaches.",
    tags: ["Python", "Team Project", "Problem Solving", "SIH"],
    color: "#f59e0b",
    category: "hackathon",
    icon: "🏆",
    link: "#",
  },
  {
    title: "CS50x Final Project",
    description:
      "Capstone project for Harvard's CS50x course. Full-stack web application demonstrating mastery of algorithms, data structures, and modern web development practices.",
    tags: ["C", "Python", "SQL", "Web Dev"],
    color: "#ef4444",
    category: "web",
    icon: "🎓",
    link: "#",
  },
  {
    title: "Predictive Model Pipeline",
    description:
      "End-to-end ML pipeline for regression and classification tasks. Includes data preprocessing, feature engineering, model selection, cross-validation, and hyperparameter tuning.",
    tags: ["Python", "ML", "NumPy", "Scikit-Learn"],
    color: "#818cf8",
    category: "ml",
    icon: "⚙️",
    link: "#",
  },
  {
    title: "DSA Problem Solver",
    description:
      "Collection of optimized solutions for competitive programming problems. Covers arrays, trees, graphs, dynamic programming, and advanced data structures in C++.",
    tags: ["C++", "DSA", "Algorithms", "GFG"],
    color: "#10b981",
    category: "dsa",
    icon: "💡",
    link: "#",
  },
];

const filterOptions = [
  { key: "all", label: "All" },
  { key: "ml", label: "Machine Learning" },
  { key: "data", label: "Data Science" },
  { key: "web", label: "Web Dev" },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("all");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="relative py-32 overflow-hidden"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(99,102,241,0.05)_0%,transparent_70%)]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(34,211,238,0.04)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-emerald-400 tracking-wider uppercase">
            04 / Projects
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mt-4 tracking-tight">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg text-lg">
            A selection of projects showcasing my skills in data science,
            machine learning, and software development.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setFilter(opt.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === opt.key
                  ? "bg-[#6366f1] text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                  : "bg-white/[0.04] text-white/50 border border-white/[0.08] hover:bg-white/[0.08]"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="project-card glass-card p-6 sm:p-8 relative overflow-hidden group cursor-pointer flex flex-col"
            >
              {/* Top color bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(90deg, ${project.color}, transparent)`,
                }}
              />

              {/* Background glow on hover */}
              <div
                className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${project.color}08, transparent 70%)`,
                }}
              />

              <div className="relative z-10 flex flex-col flex-1">
                {/* Icon & title */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${project.color}15`,
                      border: `1px solid ${project.color}30`,
                    }}
                  >
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white/90 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/40 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-md bg-white/[0.04] border border-white/[0.06] text-white/50 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="flex items-center gap-2 text-sm font-medium group-hover:text-white/80 text-white/30 transition-colors">
                  <span>View Project</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

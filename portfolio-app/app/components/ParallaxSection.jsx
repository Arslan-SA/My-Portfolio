"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);
  const x3 = useTransform(scrollYProgress, [0, 1], ["-10%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative py-40 overflow-hidden" style={{ position: "relative" }}>
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(99,102,241,0.08)_0%,transparent_70%)]" />
      </div>

      <motion.div style={{ opacity }} className="space-y-4 select-none">
        <motion.div
          style={{ x: x1 }}
          className="flex items-center justify-center"
        >
          <span className="text-[clamp(2.5rem,8vw,7rem)] font-black tracking-tighter text-white/[0.03] whitespace-nowrap">
            DATA SCIENCE • MACHINE LEARNING
          </span>
        </motion.div>

        <motion.div
          style={{ x: x2 }}
          className="flex items-center justify-center"
        >
          <span className="text-[clamp(2.5rem,8vw,7rem)] font-black tracking-tighter whitespace-nowrap gradient-text" style={{ opacity: 0.12 }}>
            PYTHON • STATISTICS • ANALYSIS
          </span>
        </motion.div>

        <motion.div
          style={{ x: x3 }}
          className="flex items-center justify-center"
        >
          <span className="text-[clamp(2.5rem,8vw,7rem)] font-black tracking-tighter text-white/[0.03] whitespace-nowrap">
            INNOVATION • PROBLEM SOLVING
          </span>
        </motion.div>
      </motion.div>

      {/* Center accent text */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-sm font-mono text-[#6366f1] tracking-widest uppercase mb-3"
          >
            Driven by curiosity
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white/90 tracking-tight"
          >
            Building with{" "}
            <span className="gradient-text">Purpose</span>
          </motion.h3>
        </div>
      </motion.div>
    </section>
  );
}

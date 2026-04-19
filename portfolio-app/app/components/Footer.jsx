"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Link href="/" className="group">
              <span className="text-xl font-bold tracking-tight">
                <span className="gradient-text">A</span>
                <span className="text-white/60">rslan</span>
              </span>
            </Link>
            <span className="text-white/20">•</span>
            <span className="text-sm text-white/30">
              Data Science &amp; ML
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-white/30">
            <Link
              href="#about"
              className="hover:text-white/60 transition-colors"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="hover:text-white/60 transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="hover:text-white/60 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="hover:text-white/60 transition-colors"
            >
              Contact
            </Link>
          </div>

          <p className="text-xs text-white/20 font-mono">
            © {new Date().getFullYear()} Arslan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// ─── Add portfolio works here ─────────────────────────────────────────────────
// Featured 6 should be listed first — their array order controls the masonry layout.
// For 3-col grid reading order (left→right): array order = [pos1, pos4, pos2, pos5, pos3, pos6]
// All other works follow, grouped by category.
const works: {
  id: number;
  src: string;
  category: "black-and-grey";
  w: number;
  h: number;
}[] = [
  { id: 1, src: "/portfolio/1.png", category: "black-and-grey", w: 1350, h: 1920 },
  { id: 3, src: "/portfolio/3.png", category: "black-and-grey", w: 1350, h: 1920 },
  { id: 2, src: "/portfolio/2.png", category: "black-and-grey", w: 1350, h: 1920 },
  { id: 5, src: "/portfolio/5.png", category: "black-and-grey", w: 1350, h: 1920 },
  { id: 4, src: "/portfolio/4.png", category: "black-and-grey", w: 1350, h: 1920 },
  { id: 7, src: "/portfolio/7.png", category: "black-and-grey", w: 1350, h: 1920 },
  { id: 6, src: "/portfolio/6.png", category: "black-and-grey", w: 1350, h: 1920 },
  { id: 8, src: "/portfolio/8.png", category: "black-and-grey", w: 1350, h: 1920 },
  { id: 9, src: "/portfolio/9.png", category: "black-and-grey", w: 1350, h: 1920 },
  { id: 10, src: "/portfolio/10.png", category: "black-and-grey", w: 1350, h: 1920 },
  { id: 11, src: "/portfolio/11.png", category: "black-and-grey", w: 1350, h: 1920 },
  { id: 12, src: "/portfolio/12.png", category: "black-and-grey", w: 1350, h: 1920 },
  { id: 13, src: "/portfolio/13.png", category: "black-and-grey", w: 1350, h: 1920 },
  { id: 14, src: "/portfolio/14.png", category: "black-and-grey", w: 1350, h: 1920 },
  { id: 15, src: "/portfolio/15.png", category: "black-and-grey", w: 1350, h: 1920 },
  { id: 16, src: "/portfolio/16.png", category: "black-and-grey", w: 1350, h: 1920 },
  { id: 18, src: "/portfolio/18.png", category: "black-and-grey", w: 1350, h: 1920 },
  { id: 20, src: "/portfolio/20.png", category: "black-and-grey", w: 1350, h: 1920 },
  { id: 21, src: "/portfolio/21.png", category: "black-and-grey", w: 1350, h: 1920 },
  { id: 22, src: "/portfolio/22.png", category: "black-and-grey", w: 1350, h: 1920 },
  { id: 24, src: "/portfolio/24.png", category: "black-and-grey", w: 1350, h: 1920 },
  { id: 25, src: "/portfolio/25.png", category: "black-and-grey", w: 1350, h: 1920 },
  { id: 26, src: "/portfolio/26.png", category: "black-and-grey", w: 1350, h: 1920 },
];

const CATEGORY_LABELS: Record<string, string> = {
  all:              "All",
  "black-and-grey": "Black & Grey",
};

const categories = Object.keys(CATEGORY_LABELS);

export default function Portfolio() {
  const [active, setActive] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const filtered = active === "all"
    ? works
    : works.filter((w) => w.category === active);

  const limit = isMobile ? 4 : 6;
  const isTruncated = active === "all" && !showAll && filtered.length > limit;
  const displayed = isTruncated ? filtered.slice(0, limit) : filtered;

  const handleCategoryChange = (cat: string) => {
    setActive(cat);
    setShowAll(false);
  };

  return (
    <section id="portfolio" className="py-16 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-[var(--gold)] mb-4">
              Selected Works
            </p>
            <h2
              className="text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-[var(--text)]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.03em" }}
            >
              THE ART
            </h2>
          </div>

          {/* Filter */}
          <div className="flex items-center gap-6 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className="text-[10px] tracking-[0.2em] uppercase transition-colors duration-200 cursor-pointer pb-0.5"
                style={{
                  color: active === cat ? "var(--gold)" : "var(--muted)",
                  borderBottom: active === cat ? "1px solid var(--gold)" : "1px solid transparent",
                }}
              >
                {CATEGORY_LABELS[cat]}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
          <AnimatePresence mode="popLayout">
            {displayed.map((work, i) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                className="relative group overflow-hidden break-inside-avoid cursor-pointer"
                style={{ aspectRatio: `${work.w} / ${work.h}` }}
              >
                <Image
                  src={work.src}
                  alt="Tattoo by Momo"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[var(--bg)] opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-[9px] tracking-[0.25em] uppercase text-[var(--gold)]">
                    {CATEGORY_LABELS[work.category]}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More */}
        {isTruncated && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-10 text-center"
          >
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-[var(--muted)] hover:text-[var(--gold)] transition-colors duration-300 cursor-pointer border border-current px-6 py-3"
            >
              Show More
            </button>
          </motion.div>
        )}

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <a
            href="https://www.instagram.com/gunes.ink/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-[var(--muted)] hover:text-[var(--gold)] transition-colors duration-300 cursor-pointer"
          >
            <span className="block w-8 h-px bg-current" />
            View Full Portfolio on Instagram
            <span className="block w-8 h-px bg-current" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

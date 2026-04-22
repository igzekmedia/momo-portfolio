"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Add award entries here ───────────────────────────────────────────────────
// Each entry supports multiple images and multiple conventions.
// For a single convention, use: convention, year, location, awards
// For multiple conventions, use: conventions array (see Serdar's site for reference)
const entries: {
  images: { src: string; w: number; h: number }[];
  piece?: string;
  convention?: string;
  year?: string;
  location?: string;
  awards?: { placement: string; category: string }[];
  conventions?: {
    convention: string;
    year: string;
    location: string;
    awards: { placement: string; category: string }[];
  }[];
}[] = [
  {
    images: [{ src: "/awards/Villain Arts Chicago Tattoo Arts Festival 2026/24.png", w: 1350, h: 1920 }],
    piece: "Warrior Woman",
    convention: "Villain Arts 15th Chicago Tattoo Arts Festival",
    year: "2026",
    location: "Chicago, IL",
    awards: [
      { placement: "2nd Place", category: "Black & Gray" },
    ],
  },
  {
    images: [{ src: "/awards/Colorado Tattoo Convention 2025/14.png", w: 1350, h: 1920 }],
    piece: "Wolverine",
    convention: "10th Annual Colorado Tattoo Convention & Expo",
    year: "2025",
    location: "National Western Complex · Denver, CO",
    awards: [
      { placement: "1st Place", category: "Best Portrait" },
      { placement: "1st Place", category: "Black & Gray" },
      { placement: "1st Place", category: "Best Realism" },
      { placement: "1st Place", category: "Comicbook" },
      { placement: "2nd Place", category: "Overall Female" },
    ],
  },
  {
    images: [{ src: "/awards/Colorado Tattoo Convention 2025.1/20.png", w: 1350, h: 1920 }],
    piece: "Horror Concept Sleeve",
    convention: "10th Annual Colorado Tattoo Convention & Expo",
    year: "2025",
    location: "National Western Complex · Denver, CO",
    awards: [
      { placement: "3rd Place", category: "Overall Male" },
      { placement: "3rd Place", category: "Black & Gray" },
      { placement: "3rd Place", category: "Best Realism" },
      { placement: "3rd Place", category: "Best Skull" },
    ],
  },
  {
    images: [{ src: "/awards/Villain Arts Tattoo Arts Festival 2025/21.png", w: 1350, h: 1920 }],
    piece: "Baby Girl",
    convention: "8th Villain Arts Denver Tattoo Arts Festival",
    year: "2025",
    location: "Colorado Convention Center · Denver, CO",
    awards: [
      { placement: "1st Place", category: "Best of Day" },
      { placement: "1st Place", category: "Best Realism" },
    ],
  },
  {
    images: [{ src: "/awards/Villain Arts Tattoo Arts Festival 2025.1/11.png", w: 1350, h: 1920 }],
    piece: "Warrior Goddess",
    conventions: [
      {
        convention: "8th Villain Arts Denver Tattoo Arts Festival",
        year: "2025",
        location: "Colorado Convention Center · Denver, CO",
        awards: [
          { placement: "TBA", category: "TBA" },
        ],
      },
      {
        convention: "10th Annual Colorado Tattoo Convention & Expo",
        year: "2025",
        location: "National Western Complex · Denver, CO",
        awards: [
          { placement: "3rd Place", category: "Overall Female" },
        ],
      },
    ],
  },
  {
    images: [{ src: "/awards/Villain Arts Tattoo Arts Festival 2025.2/12.png", w: 1350, h: 1920 }],
    piece: "Jesus",
    convention: "8th Villain Arts Denver Tattoo Arts Festival",
    year: "2025",
    location: "Colorado Convention Center · Denver, CO",
    awards: [
      { placement: "1st Place", category: "Best Portrait" },
      { placement: "2nd Place", category: "Medium Black & Gray Large" },
      { placement: "3rd Place", category: "Best Realism" },
    ],
  },
  {
    images: [{ src: "/awards/Villain Arts Tattoo Arts Festival 2024/6.png", w: 1350, h: 1920 }],
    piece: "Dracula",
    convention: "7th Villain Arts Denver Tattoo Arts Festival",
    year: "2024",
    location: "Colorado Convention Center · Denver, CO",
    awards: [
      { placement: "2nd Place", category: "Black & Gray" },
    ],
  },
];

const totalAwards = "40+";

function EntryGallery({ images }: { images: { src: string; w: number; h: number }[] }) {
  const [index, setIndex] = useState(0);
  if (images.length === 0) return null;
  const current = images[index];

  return (
    <div className="relative overflow-hidden w-full h-full" style={{ minHeight: "620px" }}>
      <AnimatePresence mode="wait">
        <motion.img
          key={current.src}
          src={current.src}
          alt="Award winning tattoo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/50 text-white hover:bg-black/75 transition-colors duration-200 cursor-pointer"
            aria-label="Previous photo"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % images.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/50 text-white hover:bg-black/75 transition-colors duration-200 cursor-pointer"
            aria-label="Next photo"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className="w-1.5 h-1.5 rounded-full transition-colors duration-200 cursor-pointer"
                style={{ background: i === index ? "var(--gold)" : "rgba(255,255,255,0.4)" }}
                aria-label={`Photo ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Awards() {
  return (
    <section id="awards" className="py-16 md:py-32 px-6 md:px-12 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-[var(--gold)] mb-4">
              International Recognition
            </p>
            <h2
              className="text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-[var(--text)]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.03em" }}
            >
              AWARD WINNING
              <br />
              <span style={{ color: "var(--gold)", fontWeight: 400 }}>WORK</span>
            </h2>
          </div>
          <p className="text-sm text-[var(--muted)] max-w-xs leading-relaxed">
            Over 40 international awards across competitions worldwide —
            each piece judged in open competition against the world&apos;s finest artists.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-px">
          {entries.map((entry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.07 }}
              className="group grid grid-cols-1 md:grid-cols-[1fr_2fr] border border-[var(--border)] hover:border-[var(--gold-dim)] transition-colors duration-500 overflow-hidden"
            >
              <EntryGallery images={entry.images} />

              <div className="flex flex-col p-8 md:p-12 bg-[var(--surface)] group-hover:bg-[var(--surface-2)] transition-colors duration-500">
                <h3
                  className="text-[clamp(1.4rem,2.8vw,2.2rem)] leading-tight text-[var(--text)] mb-6"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: "-0.02em" }}
                >
                  {entry.piece || entry.convention}
                </h3>

                {(() => {
                  const convs = entry.conventions ?? [{ convention: entry.convention!, year: entry.year!, location: entry.location!, awards: entry.awards! }];
                  const allAwards = convs.flatMap((conv) => conv.awards);
                  return (
                    <>
                      <div className="space-y-2 mb-4">
                        {convs.map((conv, ci) => (
                          <div key={ci} className="flex items-center justify-between gap-3">
                            <span className="inline-flex items-center px-2 py-0.5 border border-[var(--gold-dim)] text-[9px] tracking-[0.2em] uppercase text-[var(--gold)]">
                              {conv.convention}
                            </span>
                            <span className="text-sm text-[var(--muted)] tabular-nums shrink-0">
                              {conv.year}
                            </span>
                          </div>
                        ))}
                      </div>
                      <p className="mb-4 text-sm text-[var(--muted)]">{convs[0].location}</p>
                      <div className="w-full h-px bg-[var(--border)] mb-4" />
                      <div>
                        <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-5">
                          {allAwards.length === 1 ? 'Award' : 'Awards'}
                        </p>
                        <ul className="space-y-4">
                          {allAwards.map((award, j) => (
                            <li key={j} className="flex items-center gap-4">
                              <span className="shrink-0 px-3 py-1 border border-[var(--gold-dim)] text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] whitespace-nowrap">
                                {award.placement}
                              </span>
                              <span className="text-sm text-[var(--text)]">
                                {award.category}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  );
                })()}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 flex items-center justify-between border-t border-[var(--border)] pt-8 pb-4"
        >
          <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--muted)]">
            Total Awards Won
          </p>
          <p
            className="text-[clamp(1.2rem,2.5vw,2rem)] leading-none text-[var(--gold)]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            {totalAwards}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

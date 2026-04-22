"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "5+",  label: "Years of Practice" },
  { value: "40+", label: "International Awards" },
  { value: "5K+", label: "Clients Served" },
  { value: "CO",  label: "Based in Denver" },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="w-full h-px bg-[var(--border)] mb-24" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left — Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-[10px] tracking-[0.35em] uppercase text-[var(--gold)] mb-6"
            >
              The Artist
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-[clamp(2.5rem,4.5vw,4rem)] leading-tight text-[var(--text)] mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              LIFE IN
              <br />
              <span className="gold-gradient-text" style={{ fontWeight: 400 }}>DETAIL</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[11px] tracking-[0.2em] uppercase text-[var(--gold)] mb-10"
            >
              Realism · Black &amp; Grey · Portraits
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5 text-sm leading-relaxed text-[var(--muted)]"
              style={{ maxWidth: "480px" }}
            >
              <p>
                Momo is one of Colorado's most awarded tattoo artists, with over 40 international awards earned in just a few years. Originally from Turkey, he built his reputation in the United States entirely from scratch — through the quality of the work alone.
              </p>
              <p>
                He specializes in black and grey realism: sleeves, back pieces, and portrait work executed with the kind of precision that makes people stop and ask who did that. Every piece gets the same level of care, from the first design conversation to the final session.
              </p>
              <p>
                Based in Denver, Colorado. Booking is limited — inquire early.
              </p>
            </motion.div>

            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              href="https://www.instagram.com/gunes.ink/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-10 text-[11px] tracking-[0.2em] uppercase text-[var(--gold)] hover:text-[var(--text)] transition-colors duration-300 cursor-pointer"
            >
              Follow the Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </motion.a>
          </div>

          {/* Right — Photo + Stats */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "1/1" }}
            >
              <Image
                src="/About-Momo.png"
                alt="Momo Hamza Güneş"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-px bg-[var(--border)]"
            >
              {stats.map((s) => (
                <div key={s.label} className="bg-[var(--bg)] px-5 py-5">
                  <p className="text-2xl text-[var(--text)] mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}>
                    {s.value}
                  </p>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--muted)]">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

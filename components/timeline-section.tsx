"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    period: "2024 - Present",
    title: "Senior Software Engineer",
    description:
      "Lead cloud modernization, observability, and delivery improvements across backend services and platform tooling.",
  },
  {
    period: "2021 - 2024",
    title: "DevOps / Backend Engineer",
    description:
      "Built resilient services, automated infrastructure, and tightened deployment reliability for high-growth teams.",
  },
  {
    period: "2018 - 2021",
    title: "Software Engineer",
    description:
      "Shipped APIs, background workers, and internal systems while learning how to keep systems calm under load.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 },
};

export default function TimelineSection() {
  return (
    <section id="experience" data-cinematic-section className="border-b border-white/5 px-6 py-24 sm:px-10 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.4em] text-[#64748B]">Experience timeline</p>
          <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.05em] text-[#F8FAFC] sm:text-5xl">
            Career moves shaped by shipping, scaling, and stabilizing systems.
          </h2>
        </div>

        <motion.div
          className="relative grid gap-6 pl-6 sm:pl-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
            data-timeline-line
            className="absolute left-2 top-2 h-full w-px origin-top bg-gradient-to-b from-[#E2E8F0] via-[#94A3B8] to-[#475569] sm:left-4"
          />

          <ol className="grid gap-6" aria-label="Experience timeline">
            {timeline.map((entry) => (
              <li key={entry.period}>
                <motion.article variants={itemVariants} className="relative glass-panel rounded-[1.5rem] p-6">
                  <span className="absolute -left-[0.95rem] top-7 h-4 w-4 rounded-full border border-slate-400/40 bg-[#E2E8F0] shadow-[0_0_25px_rgba(148,163,184,0.4)] sm:-left-[1.15rem]" />
                  <p className="text-xs uppercase tracking-[0.35em] text-[#64748B]">{entry.period}</p>
                  <h3 className="mt-3 font-display text-2xl font-black tracking-[-0.04em] text-[#F8FAFC]">
                    {entry.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-[#CBD5E1]">{entry.description}</p>
                </motion.article>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";

const proofItems = [
  {
    title: "Cloud & DevOps Internship",
    source: "Covenda AI",
    detail:
      "Configured AWS Cognito + Amplify Auth, shipped docs for authentication and ML architecture, and cleaned up idle resources.",
    impact: "Security workflows improved and cloud waste reduced.",
    period: "Aug 2025 - Sep 2025",
  },
  {
    title: "Cybersecurity Simulation",
    source: "Deloitte Australia via Forage",
    detail:
      "Investigated suspicious web activity from server logs and applied remediation recommendations using standard security frameworks.",
    impact: "Structured incident triage and practical remediation planning.",
    period: "Mar 2025",
  },
  {
    title: "Shipped Personal Engineering Projects",
    source: "Cloud, web, and ML portfolio",
    detail:
      "Built and deployed work across AWS serverless, VPC networking, full-stack apps, and applied machine learning projects.",
    impact: "10+ end-to-end builds with delivery-focused engineering practice.",
    period: "2023 - Present",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ProofSection() {
  return (
    <section id="proof" data-cinematic-section className="border-b border-white/5 px-6 py-20 sm:px-10 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.4em] text-[#64748B]">Proof</p>
          <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.05em] text-[#F8FAFC] sm:text-5xl">
            Evidence of execution, not just claims.
          </h2>
        </div>

        <motion.div
          className="grid gap-6 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {proofItems.map((item) => (
            <motion.article key={item.title} variants={cardVariants} className="glass-panel rounded-[1.5rem] p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#64748B]">{item.period}</p>
              <h3 className="mt-3 font-display text-2xl font-black tracking-[-0.04em] text-[#F8FAFC]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm font-semibold text-[#94A3B8]">{item.source}</p>
              <p className="mt-4 text-sm leading-7 text-[#CBD5E1]">{item.detail}</p>
              <p className="mt-3 text-sm font-semibold text-[#E2E8F0]">Impact: {item.impact}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
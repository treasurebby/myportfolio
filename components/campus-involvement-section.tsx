"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

const involvements = [
  {
    organization: "Hebron Startup Lab",
    role: "Member",
    period: "2024 - Present",
  },
  {
    organization: "Google Developers' Group",
    role: "Member",
    period: "2025 - Present",
  },
  {
    organization: "Enactus",
    role: "Member",
    period: "2024 - Present",
  },
  {
    organization: "AWS Skill Builder CU",
    role: "Director of Marketing",
    period: "2025 - Present",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
  rest: { y: 0 },
  hover: { y: -4 },
};

export default function CampusInvolvementSection() {
  return (
    <section id="involvement" data-cinematic-section className="border-b border-white/5 px-6 py-16 sm:px-10 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.4em] text-[#64748B]">Campus Involvement</p>
          <h2 className="mt-3 font-display text-3xl font-black tracking-[-0.05em] text-[#F8FAFC] sm:text-4xl">
            Active inside and outside the classroom.
          </h2>
        </div>

        <motion.div
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {involvements.map((item) => (
            <motion.article
              key={item.organization}
              variants={cardVariants}
              whileHover="hover"
              className="glass-panel rounded-xl p-4 transition-colors hover:border-slate-400/30"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-500/30 bg-slate-900/70 text-[#E2E8F0]">
                <Users className="h-4 w-4" />
              </div>
              <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-[#64748B]">{item.period}</p>
              <h3 className="mt-1 font-display text-sm font-black tracking-[-0.02em] text-[#F8FAFC]">
                {item.organization}
              </h3>
              <p className="mt-1 text-xs text-[#94A3B8]">{item.role}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

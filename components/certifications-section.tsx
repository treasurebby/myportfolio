"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    provider: "Amazon Web Services",
    status: "In Progress",
  },
  {
    name: "Huawei ICT Security Certification",
    provider: "Huawei",
    status: "Completed",
  },
  {
    name: "OpenBinacle Prompt Engineering Certification",
    provider: "OpenBinacle",
    status: "Completed",
  },
  {
    name: "Introduction to Backend Architecture",
    provider: "Frontend Masters",
    status: "Completed",
  },
  {
    name: "Introduction to DevOps",
    provider: "Frontend Masters",
    status: "Completed",
  },
  {
    name: "Introduction & Intermediate Python for Developers",
    provider: "DataCamp",
    status: "Completed",
  },
  {
    name: "Deloitte Cybersecurity Job Simulation",
    provider: "Forage",
    status: "Completed",
  },
  {
    name: "Introduction to Linux",
    provider: "Linux Foundation",
    status: "Completed",
  },
  {
    name: "Introduction to Kubernetes",
    provider: "Linux Foundation",
    status: "Completed",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
  rest: { y: 0 },
  hover: { y: -4 },
};

export default function CertificationsSection() {
  return (
    <section id="certifications" data-cinematic-section className="border-b border-white/5 px-6 py-16 sm:px-10 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.4em] text-[#64748B]">Certifications & Continuous Learning</p>
          <h2 className="mt-3 font-display text-3xl font-black tracking-[-0.05em] text-[#F8FAFC] sm:text-4xl">
            Always learning, always shipping.
          </h2>
        </div>

        <motion.div
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {certifications.map((cert) => (
            <motion.article
              key={cert.name}
              variants={cardVariants}
              whileHover="hover"
              className="glass-panel flex items-start gap-3 rounded-xl p-4 transition-colors hover:border-slate-400/30"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-500/30 bg-slate-900/70 text-[#E2E8F0]">
                <Award className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-sm font-black tracking-[-0.02em] leading-5 text-[#F8FAFC]">
                  {cert.name}
                </h3>
                <p className="mt-1 text-xs text-[#94A3B8]">{cert.provider}</p>
                <span className="mt-2 inline-block rounded-full border border-slate-500/35 bg-slate-900/70 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-[#E2E8F0]">
                  {cert.status}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

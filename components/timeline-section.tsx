"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    period: "August 2025 - September 2025",
    title: "Cloud and DevOps Intern",
    organization: "Covenda AI",
    highlights: [
      "Configured AWS Cognito and integrated with Amplify Auth for secure authentication in a React application.",
      "Reduced cloud costs by auditing and removing unused AWS resources across multiple regions.",
      "Developed a Next.js platform homepage and wrote technical documentation for authentication workflows and ML architecture.",
    ],
  },
  {
    period: "March 2025",
    title: "Deloitte Australia Cyber Job Simulation",
    organization: "Forage Platform",
    highlights: [
      "Analyzed web server logs, investigated suspicious activity, and applied cybersecurity frameworks to recommend remediation steps.",
    ],
  },
];

const education = {
  period: "2023 - 2027",
  degree: "Bachelor's Degree in Computer Science",
  school: "Covenant University",
  cgpa: "4.90/5.00",
};

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
          <p className="text-sm uppercase tracking-[0.4em] text-[#64748B]">Professional Experience</p>
          <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.05em] text-[#F8FAFC] sm:text-5xl">
            Hands-on cloud, DevOps, and cybersecurity experience.
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

          <ol className="grid gap-6" aria-label="Professional experience timeline">
            {timeline.map((entry) => (
              <li key={`${entry.period}-${entry.title}`}>
                <motion.article variants={itemVariants} className="relative glass-panel rounded-[1.5rem] p-6">
                  <span className="absolute -left-[0.95rem] top-7 h-4 w-4 rounded-full border border-slate-400/40 bg-[#E2E8F0] shadow-[0_0_25px_rgba(148,163,184,0.4)] sm:-left-[1.15rem]" />
                  <p className="text-xs uppercase tracking-[0.35em] text-[#64748B]">{entry.period}</p>
                  <h3 className="mt-3 font-display text-2xl font-black tracking-[-0.04em] text-[#F8FAFC]">
                    {entry.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[#94A3B8]">{entry.organization}</p>
                  <ul className="mt-3 grid gap-2 text-sm leading-7 text-[#CBD5E1]">
                    {entry.highlights.map((highlight) => (
                      <li key={highlight}>- {highlight}</li>
                    ))}
                  </ul>
                </motion.article>
              </li>
            ))}
          </ol>

          <motion.article variants={itemVariants} className="glass-panel rounded-[1.5rem] p-6">
            <p className="text-sm uppercase tracking-[0.4em] text-[#64748B]">Education</p>
            <h3 className="mt-3 font-display text-2xl font-black tracking-[-0.04em] text-[#F8FAFC]">
              {education.degree}
            </h3>
            <p className="mt-2 text-sm font-semibold text-[#94A3B8]">{education.school}</p>
            <p className="mt-3 text-sm leading-7 text-[#CBD5E1]">
              Period: {education.period} | CGPA: {education.cgpa}
            </p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
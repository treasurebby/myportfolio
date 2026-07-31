"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "Customer Complaint System",
    summary: "Serverless complaint intake with Lambda, DynamoDB, API Gateway, CloudWatch, and basic IaC.",
    stack: ["AWS Lambda", "DynamoDB", "API Gateway", "CloudWatch"],
    github: "https://github.com/treasurebby",
    status: "Completed",
  },
  {
    name: "Secure 2-Tier Web App",
    summary: "AWS VPC with public/private subnets, EC2, RDS, security groups, route tables, and NACLs.",
    stack: ["AWS VPC", "EC2", "RDS", "Security Groups"],
    github: "https://github.com/treasurebby",
    status: "Completed",
  },
  {
    name: "Food Delivery App",
    summary: "React Native browse-to-order flow with reusable UI components and mock API rendering.",
    stack: ["React Native", "Mobile UI", "Mock APIs"],
    github: "https://github.com/treasurebby",
    status: "Completed",
  },
  {
    name: "Mood Detector",
    summary: "Computer-vision model trained on Kaggle data for image and live-camera emotion classification.",
    stack: ["Python", "ML", "Computer Vision", "Kaggle"],
    github: "https://github.com/treasurebby",
    status: "Completed",
  },
  {
    name: "Clario",
    summary: "Platform helping secondary school students discover opportunities and plan ahead of JAMB.",
    stack: ["Web App", "EdTech"],
    github: "https://github.com/treasurebby",
    status: "Completed",
  },
  {
    name: "Rota",
    summary: "Rotating savings group API for managing contributions, rounds, and payouts.",
    stack: ["API", "Fintech", "Backend"],
    github: "https://github.com/treasurebby",
    status: "Completed",
  },
  {
    name: "Nuru AI",
    summary: "Engineering intelligence platform for the energy transition sector.",
    stack: ["Web App", "Energy Tech", "AI"],
    github: "https://github.com/treasurebby",
    status: "In Progress",
  },
  {
    name: "Q&A App",
    summary: "Real-time question-answer app integrated with the Gemini API.",
    stack: ["Gemini API", "Real-time Responses"],
    github: "https://github.com/treasurebby",
    status: "Completed",
  },
  {
    name: "GetBetter",
    summary: "Personal goal-tracking platform with time-based logging for continuous self-improvement.",
    stack: ["Web App", "Goal Tracking"],
    github: "https://github.com/treasurebby",
    status: "In Progress",
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
  hidden: { opacity: 0, y: 20, rotateX: 6 },
  visible: { opacity: 1, y: 0, rotateX: 0 },
  hover: { y: -6, rotateX: 4, scale: 1.01 },
};

export default function ProjectsSection() {
  return (
    <section id="projects" data-cinematic-section className="border-b border-white/5 px-6 py-16 sm:px-10 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.4em] text-[#64748B]">Projects</p>
          <h2 className="mt-3 font-display text-3xl font-black tracking-[-0.05em] text-[#F8FAFC] sm:text-4xl">
            Built to solve real delivery, reliability, and scale problems.
          </h2>
        </div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.name}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
              className="glass-panel flex flex-col rounded-2xl p-5 transition-colors hover:border-slate-400/30"
            >
              <h3 className="font-display text-lg font-black tracking-[-0.03em] text-[#F8FAFC]">
                {project.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-[#CBD5E1]">{project.summary}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-500/35 bg-slate-900/70 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-[#E2E8F0]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                  className="inline-flex items-center justify-center rounded-full border border-slate-500/35 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-[#E2E8F0] transition hover:border-slate-300/50 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2E8F0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0F1E]"
                >
                  GitHub
                </a>
                <span className="inline-flex items-center justify-center rounded-full border border-slate-500/35 bg-slate-900/70 px-3 py-1.5 text-xs font-semibold text-[#E2E8F0]">
                  {project.status}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

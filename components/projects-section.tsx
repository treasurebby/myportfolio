"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "Customer Complaint System (AWS Serverless)",
    period: "2023 - 2027",
    description:
      "Built a serverless app using Lambda, DynamoDB, and API Gateway with CloudWatch logs, REST APIs, and basic IaC.",
    stack: ["AWS Lambda", "DynamoDB", "API Gateway", "CloudWatch"],
    github: "https://github.com/treasurebby",
    status: "Completed",
  },
  {
    name: "Secure 2-Tier Web App (AWS VPC)",
    period: "Project",
    description:
      "Configured VPC with public/private subnets, deployed EC2 and RDS, and implemented security groups, route tables, and NACLs.",
    stack: ["AWS VPC", "EC2", "RDS", "Security Groups"],
    github: "https://github.com/treasurebby",
    status: "Completed",
  },
  {
    name: "Food Delivery App (React Native)",
    period: "Project",
    description:
      "Designed a functional mobile UI with categories, restaurant lists, and mock API integration.",
    stack: ["React Native", "Mobile UI", "Mock APIs"],
    github: "https://github.com/treasurebby",
    status: "Completed",
  },
  {
    name: "Mood Detector (ML + CV)",
    period: "Project",
    description:
      "Trained a model on Kaggle data to classify emotions from images and live camera input.",
    stack: ["Python", "Machine Learning", "Computer Vision", "Kaggle"],
    github: "https://github.com/treasurebby",
    status: "Completed",
  },
  {
    name: "Q&A App (Gemini API)",
    period: "Project",
    description:
      "Integrated Gemini API to answer user questions in real time.",
    stack: ["Gemini API", "Real-time Responses"],
    github: "https://github.com/treasurebby",
    status: "Completed",
  },
  {
    name: "GetBetter - Self-Improvement Platform",
    period: "In Progress",
    description:
      "Building a personal goal-tracking platform with time-based logging and self-improvement workflows.",
    stack: ["Web App", "Goal Tracking", "Time Logging"],
    github: "https://github.com/treasurebby",
    status: "In Progress",
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
  hidden: { opacity: 0, y: 30, rotateX: 8 },
  visible: { opacity: 1, y: 0, rotateX: 0 },
  hover: { y: -10, rotateX: 10, rotateY: -6, scale: 1.01 },
};

export default function ProjectsSection() {
  return (
    <section id="projects" data-cinematic-section className="border-b border-white/5 px-6 py-24 sm:px-10 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.4em] text-[#64748B]">Projects</p>
          <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.05em] text-[#F8FAFC] sm:text-5xl">
            Real projects across cloud, web applications, and machine learning.
          </h2>
        </div>

        <motion.div
          className="grid gap-6 lg:grid-cols-2"
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
              className="glass-panel rounded-[1.75rem] p-6 [transform-style:preserve-3d] [perspective:1200px]"
            >
              <div className="flex h-full flex-col gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#64748B]">{project.period}</p>
                  <h3 className="mt-3 font-display text-2xl font-black tracking-[-0.04em] text-[#F8FAFC]">
                    {project.name}
                  </h3>
                </div>

                <p className="text-sm leading-7 text-[#CBD5E1]">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-500/35 bg-slate-900/70 px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#E2E8F0]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} on GitHub`}
                    className="inline-flex items-center justify-center rounded-full border border-slate-500/35 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-[#E2E8F0] transition hover:border-slate-300/50 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2E8F0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0F1E]"
                  >
                    GitHub
                  </a>
                  <span className="inline-flex items-center justify-center rounded-full border border-slate-500/35 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-[#E2E8F0]">
                    {project.status}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
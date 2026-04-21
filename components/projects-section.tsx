"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "Aurora Control Plane",
    description:
      "A cloud orchestration dashboard for provisioning services, managing release gates, and tracing runtime health.",
    stack: ["Next.js", "AWS", "Terraform", "Go"],
    github: "https://github.com/your-handle",
    live: "https://example.com",
  },
  {
    name: "Nebula Delivery Hub",
    description:
      "A CI/CD coordination layer that turns release steps into auditable, reusable deployment journeys.",
    stack: ["Node.js", "Docker", "Kubernetes", "GitHub Actions"],
    github: "https://github.com/your-handle",
    live: "https://example.com",
  },
  {
    name: "Pulse Metrics API",
    description:
      "A low-latency backend service for aggregating platform telemetry and surfacing actionable alerts.",
    stack: ["Python", "PostgreSQL", "Azure", "OpenTelemetry"],
    github: "https://github.com/your-handle",
    live: "https://example.com",
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
          <p className="text-sm uppercase tracking-[0.4em] text-white/[0.45]">Selected projects</p>
          <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
            Engineering work with product polish and operational depth.
          </h2>
        </div>

        <motion.div
          className="grid gap-6 lg:grid-cols-3"
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
                  <p className="text-xs uppercase tracking-[0.35em] text-white/[0.40]">Project</p>
                  <h3 className="mt-3 font-display text-2xl font-black tracking-[-0.04em] text-white">
                    {project.name}
                  </h3>
                </div>

                <p className="text-sm leading-7 text-white/[0.68]">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/[0.60]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/[0.85] transition hover:border-white/20 hover:bg-white/10"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-hotPink to-electricPurple px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
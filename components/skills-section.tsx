"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Cloud,
  Code2,
  Container,
  GitBranch,
  ServerCog,
  ShieldCheck,
  TerminalSquare,
  Workflow,
  Database,
  Braces,
  Layers,
  Wrench,
  Lightbulb,
  MonitorCog,
  Palette,
  Smartphone,
} from "lucide-react";

const skillGroups = [
  {
    heading: "Cloud & DevOps",
    items: [
      { label: "AWS", icon: Cloud },
      { label: "Docker", icon: Container },
      { label: "Kubernetes", icon: Boxes },
      { label: "CI/CD", icon: Workflow },
      { label: "Terraform", icon: ServerCog },
      { label: "Git / GitHub", icon: GitBranch },
    ],
  },
  {
    heading: "Programming & Web",
    items: [
      { label: "Python", icon: Braces },
      { label: "SQL", icon: Database },
      { label: "HTML & CSS", icon: Palette },
      { label: "React Native", icon: Smartphone },
      { label: "Java Spring Boot", icon: Code2 },
      { label: "System Design", icon: Layers },
    ],
  },
  {
    heading: "Tools & Practices",
    items: [
      { label: "VS Code", icon: TerminalSquare },
      { label: "AWS Console & CLI", icon: MonitorCog },
      { label: "TDD", icon: ShieldCheck },
      { label: "Prompt Engineering", icon: Lightbulb },
      { label: "Problem Solving", icon: Workflow },
      { label: "Product Management", icon: Wrench },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
  rest: { y: 0, scale: 1 },
  hover: { y: -4, scale: 1.02 },
};

export default function SkillsSection() {
  return (
    <section id="skills" data-cinematic-section className="border-b border-white/5 px-6 py-16 sm:px-10 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.4em] text-[#64748B]">Skills & Tech Stack</p>
          <h2 className="mt-3 font-display text-3xl font-black tracking-[-0.05em] text-[#F8FAFC] sm:text-4xl">
            Tools and competencies for real software delivery.
          </h2>
        </div>

        <div className="grid gap-10">
          {skillGroups.map((group) => (
            <div key={group.heading}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#94A3B8]">
                {group.heading}
              </h3>
              <motion.div
                className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {group.items.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.label}
                      variants={cardVariants}
                      whileHover="hover"
                      className="glass-panel group flex items-center gap-3 rounded-xl px-4 py-3"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-500/30 bg-slate-900/70 text-[#E2E8F0] transition-transform duration-300 group-hover:scale-105">
                        <Icon className="h-4 w-4" />
                      </div>
                      <p className="text-sm font-medium text-[#F8FAFC]">{skill.label}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

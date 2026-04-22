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
} from "lucide-react";

const skills = [
  { label: "Go", icon: Code2 },
  { label: "Node.js", icon: TerminalSquare },
  { label: "Python", icon: Braces },
  { label: "AWS", icon: Cloud },
  { label: "GCP", icon: Cloud },
  { label: "Azure", icon: Cloud },
  { label: "Docker", icon: Container },
  { label: "Kubernetes", icon: Boxes },
  { label: "Terraform", icon: ServerCog },
  { label: "CI/CD", icon: Workflow },
  { label: "Git", icon: GitBranch },
  { label: "Security", icon: ShieldCheck },
  { label: "Databases", icon: Database },
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
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  rest: { y: 0, rotate: 0, scale: 1 },
  hover: { y: -8, rotate: -1, scale: 1.02 },
};

export default function SkillsSection() {
  return (
    <section id="skills" data-cinematic-section className="border-b border-white/5 px-6 py-24 sm:px-10 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.4em] text-white/[0.45]">Skills & Tech Stack</p>
          <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
            Practical tools for building and operating serious software.
          </h2>
        </div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.label}
                variants={cardVariants}
                whileHover="hover"
                className="glass-panel group rounded-[1.5rem] p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-white/[0.16] to-white/[0.04] text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{skill.label}</p>
                    <p className="mt-1 text-sm text-white/[0.48]">Production-grade workflows</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 36, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const buttonVariants = {
  rest: { y: 0, scale: 1 },
  hover: { y: -4, scale: 1.02 },
  tap: { scale: 0.98 },
};

const indicatorVariants = {
  float: {
    y: [0, 8, 0],
    transition: {
      duration: 1.8,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
};

type HeroSectionProps = {
  particleBackground: ReactNode;
};

export default function HeroSection({ particleBackground }: HeroSectionProps) {
  return (
    <section
      id="home"
      data-cinematic-section
      className="relative flex min-h-screen items-center overflow-hidden border-b border-white/5"
    >
      <div className="absolute inset-0">{particleBackground}</div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.2),_transparent_38%),radial-gradient(circle_at_bottom_left,_rgba(124,58,237,0.22),_transparent_32%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,22,0.1),rgba(5,8,22,0.78)_80%,rgba(5,8,22,0.98))]" />

      <motion.div
        className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-28 sm:px-10 lg:px-12"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-md"
        >
          <span className="h-2 w-2 rounded-full bg-hotPink shadow-[0_0_24px_rgba(236,72,153,0.75)]" />
          Cloud-native systems. DevOps precision. Backend scale.
        </motion.div>

        <motion.div variants={itemVariants} className="max-w-5xl">
          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-white/[0.45]">
            Software Engineer
          </p>
          <h1 className="font-display text-6xl font-black leading-[0.9] tracking-[-0.06em] text-white sm:text-7xl lg:text-[8.2rem]">
            <span className="gradient-text bg-clip-text text-transparent">Your Name</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.72] sm:text-xl">
            I design and ship resilient cloud platforms, DevOps pipelines, and backend systems that
            feel fast, operate cleanly, and scale without drama.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-4 sm:flex-row sm:flex-wrap"
        >
          {[
            { label: "GitHub", href: "https://github.com/your-handle" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" },
            { label: "Twitter", href: "https://x.com/your-handle" },
            { label: "Download CV", href: "/cv-placeholder.pdf", download: true },
          ].map((button) => (
            <motion.a
              key={button.label}
              href={button.href}
              download={button.download}
              target={button.download ? undefined : "_blank"}
              rel={button.download ? undefined : "noreferrer"}
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 text-sm font-semibold text-white/[0.9] transition-colors hover:border-white/20 hover:bg-white/10"
            >
              {button.label}
            </motion.a>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-6 flex items-center gap-4 text-white/[0.55]">
          <a href="#about" className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.3em]">
            <span className="h-px w-12 bg-gradient-to-r from-hotPink to-electricPurple transition-all duration-300 group-hover:w-16" />
            Scroll
          </a>
          <motion.div
            aria-hidden="true"
            variants={indicatorVariants}
            initial="float"
            animate="float"
            className="h-10 w-6 rounded-full border border-white/20"
          >
            <div className="mx-auto mt-2 h-2 w-1 rounded-full bg-white/70" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
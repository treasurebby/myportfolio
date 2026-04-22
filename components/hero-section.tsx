"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
        className="relative mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-28 sm:px-10 lg:px-12"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="flex flex-col gap-10">
          <motion.div
            variants={itemVariants}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-hotPink shadow-[0_0_24px_rgba(236,72,153,0.75)]" />
            Cloud and web systems. DevOps precision. Backend scale.
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-5xl">
            <p className="mb-4 text-sm uppercase tracking-[0.45em] text-white/[0.45]">
              Cloud and Web Engineer
            </p>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
              <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_16px_40px_rgba(8,12,40,0.35)] sm:h-20 sm:w-20">
                <Image
                  src="/portrait.jpg"
                  alt="Portrait of Ehiomhen Treasure"
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>
              <h1 className="max-w-4xl font-display text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-5xl lg:text-[4.6rem]">
                <span className="gradient-text bg-clip-text text-transparent">Ehiomhen Treasure</span>
              </h1>
            </div>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.72] sm:text-xl">
              I design and ship resilient cloud infrastructure and web platforms with smooth user
              experiences, strong reliability, and room to scale.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.4em] text-white/[0.45]">About me</p>
              <h2 className="mt-4 font-display text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">
                Building systems that stay calm when traffic does not.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/[0.72] sm:text-lg">
                I help teams design web applications and delivery pipelines that are measurable,
                reliable, and ready for growth. My work lives where application logic meets platform
                engineering, with a bias toward clarity, automation, and repeatability.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { value: "1+", label: "Years coding" },
                { value: "10+", label: "Projects built" },
                { value: "100+", label: "Coffees" },
              ].map((stat) => (
                <div key={stat.label} className="glass-panel rounded-2xl p-5">
                  <p className="font-display text-3xl font-black tracking-[-0.05em] text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-white/[0.55]">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 sm:flex-row sm:flex-wrap"
          >
            {[
              { label: "GitHub", href: "https://github.com/treasurebby" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/ehiomhen-treasure-889a4b298" },
              { label: "Email", href: "mailto:ehiomhentreasureruth@gmail.com" },
              { label: "Download CV", href: "/ehiomhen-treasure-cv.pdf.pdf", download: true },
            ].map((button) => (
              <motion.a
                key={button.label}
                href={button.href}
                download={button.download}
                target={button.download ? undefined : "_blank"}
                rel={button.download ? undefined : "noopener noreferrer"}
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
            <a href="#skills" className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.3em]">
              <span className="h-px w-12 bg-gradient-to-r from-hotPink to-electricPurple transition-all duration-300 group-hover:w-16" />
              Continue
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
        </div>
      </motion.div>
    </section>
  );
}
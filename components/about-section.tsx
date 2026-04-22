"use client";

import { motion } from "framer-motion";

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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const statVariants = {
  rest: { y: 0, scale: 1 },
  hover: { y: -6, scale: 1.02 },
};

const stats = [
  { value: "7+", label: "Years coding" },
  { value: "30+", label: "Projects built" },
  { value: "900+", label: "Cups of coffee" },
];

export default function AboutSection() {
  return (
    <section id="about" data-cinematic-section className="border-b border-white/5 px-6 py-24 sm:px-10 lg:px-12">
      <motion.div
        className="mx-auto w-full max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants} className="flex flex-col justify-center gap-8">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-white/[0.45]">About me</p>
            <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
              Building systems that stay calm when traffic does not.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-white/[0.72] sm:text-lg">
            I help teams design backend platforms and delivery pipelines that are measurable,
            reliable, and ready for growth. My work lives where application logic meets platform
            engineering, with a bias toward clarity, automation, and repeatability.
          </p>

          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/[0.55]">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Cloud</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">DevOps</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Backend</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={statVariants}
                whileHover="hover"
                className="glass-panel rounded-2xl p-5"
              >
                <p className="font-display text-3xl font-black tracking-[-0.05em] text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-white/[0.55]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
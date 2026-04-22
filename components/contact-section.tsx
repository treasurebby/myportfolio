"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const formVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};

export default function ContactSection() {
  const [message, setMessage] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  return (
    <section id="contact" data-cinematic-section className="px-6 py-24 sm:px-10 lg:px-12">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.4em] text-[#64748B]">Contact</p>
          <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.05em] text-[#F8FAFC] sm:text-5xl">
            Let&apos;s build the next platform, service, or delivery pipeline.
          </h2>
          <p className="mt-6 text-base leading-8 text-[#CBD5E1] sm:text-lg">
            Share the problem, the constraints, and the timeline. I&apos;ll respond with a practical plan
            and the shortest path to a reliable result.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-[#94A3B8]">
            <a className="transition hover:text-[#E2E8F0]" href="https://github.com/treasurebby" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a className="transition hover:text-[#E2E8F0]" href="https://www.linkedin.com/in/ehiomhen-treasure-889a4b298" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="transition hover:text-[#E2E8F0]" href="mailto:ehiomhentreasureruth@gmail.com">
              Email
            </a>
          </div>
        </div>

        <motion.form
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          onSubmit={(event) => {
            event.preventDefault();
            setHasSubmitted(true);
          }}
          className="glass-panel rounded-[1.75rem] p-6"
        >
          <div className="grid gap-4">
            <label className="grid gap-2 text-sm text-[#CBD5E1]">
              Name
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                required
                className="rounded-2xl border border-slate-500/30 bg-slate-900/70 px-4 py-3 text-[#F8FAFC] outline-none transition placeholder:text-slate-400 focus:border-slate-300/50 focus:bg-slate-900/90"
              />
            </label>
            <label className="grid gap-2 text-sm text-[#CBD5E1]">
              Email
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                className="rounded-2xl border border-slate-500/30 bg-slate-900/70 px-4 py-3 text-[#F8FAFC] outline-none transition placeholder:text-slate-400 focus:border-slate-300/50 focus:bg-slate-900/90"
              />
            </label>
            <label className="grid gap-2 text-sm text-[#CBD5E1]">
              Message
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tell me what you&apos;re building..."
                rows={5}
                required
                className="rounded-2xl border border-slate-500/30 bg-slate-900/70 px-4 py-3 text-[#F8FAFC] outline-none transition placeholder:text-slate-400 focus:border-slate-300/50 focus:bg-slate-900/90"
              />
            </label>
          </div>

          <motion.button
            type="submit"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#E2E8F0] to-[#94A3B8] px-5 py-3 text-sm font-semibold text-[#0A0F1E] shadow-glow transition hover:brightness-110"
          >
            Send message
          </motion.button>

          {hasSubmitted ? (
            <p className="mt-4 text-sm text-[#94A3B8]">
              Thanks for reaching out. For a faster response, email me directly at ehiomhentreasureruth@gmail.com.
            </p>
          ) : null}
        </motion.form>
      </div>
    </section>
  );
}
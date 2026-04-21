"use client";

import { motion } from "framer-motion";

const posts = [
  {
    title: "How I design release pipelines that are boring in production",
    date: "April 2026",
    readTime: "6 min read",
    href: "#",
  },
  {
    title: "The small observability decisions that save big incidents",
    date: "March 2026",
    readTime: "8 min read",
    href: "#",
  },
  {
    title: "Backend performance work that starts long before profiling",
    date: "February 2026",
    readTime: "5 min read",
    href: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  rest: { y: 0 },
  hover: { y: -8 },
};

export default function BlogSection() {
  return (
    <section id="blog" data-cinematic-section className="border-b border-white/5 px-6 py-24 sm:px-10 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.4em] text-white/[0.45]">Blog / Articles</p>
          <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
            Notes on engineering, delivery, and the craft of systems work.
          </h2>
        </div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {posts.map((post) => (
            <motion.article
              key={post.title}
              variants={cardVariants}
              whileHover="hover"
              className="glass-panel rounded-[1.5rem] p-6 transition-colors hover:border-white/20"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-white/[0.40]">{post.date}</p>
              <h3 className="mt-4 font-display text-2xl font-black tracking-[-0.04em] text-white">
                {post.title}
              </h3>
              <p className="mt-4 text-sm text-white/[0.55]">{post.readTime}</p>
              <a
                href={post.href}
                className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/[0.9] transition hover:border-white/20 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hotPink focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]"
                aria-label={`Read article: ${post.title}`}
              >
                Read article
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
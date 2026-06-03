"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Tag } from "lucide-react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

const blogs = [
  {
    title: "Voice AI for Enterprise Support: Architecture, Latency, and Scale",
    summary:
      "A practical guide to building production-ready Voice AI agents with low-latency pipelines, interruption handling, and context-aware responses.",
    category: "Voice AI",
    date: "May 2026",
  },
  {
    title: "From RAG to Reliable Decisions: Designing Trustworthy AI Workflows",
    summary:
      "How to combine retrieval, evaluation, and guardrails so enterprise AI systems produce grounded outputs and measurable business outcomes.",
    category: "RAG & Automation",
    date: "Apr 2026",
  },
  {
    title: "Agentic AI + MLOps: The Fastest Path from Prototype to Production",
    summary:
      "A deployment playbook for teams shipping agentic systems with observability, versioning, rollback safety, and scalable infrastructure.",
    category: "MLOps",
    date: "Mar 2026",
  },
];

export default function BlogsSection() {
  return (
    <section id="blogs" aria-label="Blogs" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-medium text-purple-400 uppercase tracking-widest mb-3"
          >
            Insights & Blog
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-semibold tracking-tight">
            <span className="text-gradient-subtle">AI strategy, engineering, and </span>
            <span className="text-gradient">real-world implementation</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-muted leading-relaxed">
            Learn how Morph AI designs adaptive AI systems across Voice AI, agentic workflows,
            and production-grade deployment.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid gap-4 md:grid-cols-3"
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.title}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="glass card-glow rounded-2xl p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 text-xs text-muted mb-4">
                <span className="inline-flex items-center gap-1">
                  <Tag className="h-3.5 w-3.5 text-cyan-400" />
                  {blog.category}
                </span>
                <span className="inline-flex items-center gap-1">
                  <CalendarDays className="h-3.5 w-3.5 text-purple-400" />
                  {blog.date}
                </span>
              </div>
              <h3 className="text-lg font-semibold leading-snug">{blog.title}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed flex-grow">{blog.summary}</p>
              <a
                href="#"
                className="mt-5 inline-flex items-center gap-1 text-sm text-purple-300 hover:text-purple-200 transition-colors"
              >
                Read article <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

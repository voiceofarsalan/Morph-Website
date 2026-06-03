"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Rocket, LineChart } from "lucide-react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    description: "Map workflows, data sources, and latency requirements with your team.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design",
    description: "Architect RAG pipelines, voice stacks, and agent guardrails tailored to your stack.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Deploy",
    description: "Ship production-grade systems with observability, CI/CD, and rollback safety.",
  },
  {
    icon: LineChart,
    step: "04",
    title: "Evolve",
    description: "Continuous tuning, A/B evals, and model upgrades as your needs morph.",
  },
];

export default function Process() {
  return (
    <section id="process" aria-label="Process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.p variants={fadeInUp} className="text-sm font-medium text-emerald-400 uppercase tracking-widest mb-3">
            Process
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-semibold tracking-tight text-gradient-subtle">
            From idea to intelligent autonomy
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              variants={fadeInUp}
              className="relative card-glow glass rounded-2xl p-6 group"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-purple-500/50 to-transparent" />
              )}
              <span className="text-xs font-mono text-purple-400/80">{item.step}</span>
              <div className="mt-4 mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                <item.icon className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

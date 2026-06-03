"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import MorphVisual from "./MorphVisual";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-xs font-medium text-muted tracking-wide uppercase">
              Adaptive AI systems for real operations
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-semibold leading-[1.08] tracking-tight max-w-4xl mx-auto"
          >
            <span className="text-gradient-subtle">Morphing Complex Workflows into </span>
            <span className="text-gradient">Intelligent Autonomy.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed"
          >
            We design and deliver adaptive AI solutions that simplify complexity and solve
            operational challenges. From agentic workflows and generative AI to full-stack
            delivery with MLOps, Morph AI helps businesses evolve with intelligence.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-violet-500 px-8 py-3.5 text-sm font-semibold text-white glow-purple"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              href="#products"
              whileHover={{ scale: 1.02, borderColor: "rgba(34, 211, 238, 0.5)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-8 py-3.5 text-sm font-medium text-foreground hover:bg-white/[0.05] transition-colors"
            >
              <Play className="h-4 w-4 text-cyan-400" />
              View Sandbox
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted"
          >
            {[
              { value: "10+", label: "Client projects delivered" },
              { value: "End-to-End", label: "AI + Full Stack + MLOps" },
              { value: "Live", label: "Product: Evolutica Suite" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-lg font-semibold text-foreground">{stat.value}</p>
                <p className="text-xs">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-12 max-w-2xl mx-auto"
          >
            <MorphVisual />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

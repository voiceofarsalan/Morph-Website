"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Braces,
  BrainCircuit,
  Database,
  Languages,
  Mic,
  Users,
  Zap,
  Layers,
  Shield,
} from "lucide-react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

const capabilities = [
  {
    icon: Mic,
    title: "Voice AI Agents",
    description:
      "Human-like Voice AI systems for inbound and outbound workflows, combining real-time orchestration with contextual reasoning for natural interactions.",
    tags: ["Conversational AI", "Low latency", "Voice automation"],
    span: "md:col-span-2 xl:col-span-2",
    accent: "from-cyan-500/20 to-purple-500/10",
  },
  {
    icon: Bot,
    title: "Agentic AI Systems",
    description:
      "We engineer dynamic agentic workflows that automate complex, multi-step processes and execute nuanced decisions with high reliability.",
    tags: ["Autonomous agents", "Workflow orchestration", "Operational autonomy"],
    span: "md:col-span-2 xl:col-span-1 xl:row-span-2",
    accent: "from-purple-500/20 to-cyan-500/10",
  },
  {
    icon: BrainCircuit,
    title: "Generative AI Solutions",
    description:
      "Enterprise-ready GenAI systems for intelligent content generation, proprietary code assistance, and personalized user experiences.",
    tags: ["LLMs", "Content generation", "Personalization"],
    span: "xl:col-span-1",
    accent: "from-cyan-500/15 to-emerald-500/10",
  },
  {
    icon: Braces,
    title: "Full Stack Development + MLOps",
    description:
      "End-to-end implementation across frontend, backend, model serving, and MLOps pipelines for rapid and scalable deployment.",
    tags: ["Frontend/Backend", "MLOps", "Scalable architecture"],
    span: "xl:col-span-1",
    accent: "from-emerald-500/15 to-purple-500/10",
  },
  {
    icon: Database,
    title: "AI/ML & Data Annotation",
    description:
      "Model development backed by high-quality data annotation and curation services to ensure accuracy, integrity, and strong model performance.",
    tags: ["Model training", "Data curation", "Evaluation"],
    span: "xl:col-span-1",
    accent: "from-purple-500/15 to-cyan-500/10",
  },
  {
    icon: Languages,
    title: "Natural Language Processing",
    description:
      "NLP systems tailored for domain-specific understanding, classification, extraction, and conversational intelligence.",
    tags: ["Text intelligence", "Entity extraction", "Domain adaptation"],
    span: "xl:col-span-1",
    accent: "from-cyan-500/15 to-purple-500/10",
  },
  {
    icon: Users,
    title: "Resource Outsourcing",
    description:
      "Top-tier AI and engineering experts deployed in your timezone as billable resources for immediate, flexible delivery capacity.",
    tags: ["Dedicated talent", "Timezone aligned", "Fast ramp-up"],
    span: "xl:col-span-1",
    accent: "from-emerald-500/15 to-purple-500/10",
  },
];

const miniFeatures = [
  { icon: Zap, label: "Edge-optimized inference" },
  { icon: Layers, label: "Multi-modal pipelines" },
  { icon: Shield, label: "Enterprise security" },
];

function MovingBorderLine({ delay = 0 }: { delay?: number }) {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10" />
      <svg
        className="service-border-svg pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <rect
          x="0.5"
          y="0.5"
          width="99"
          height="99"
          rx="7"
          ry="7"
          fill="none"
          stroke="rgba(168,85,247,0.92)"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
          shapeRendering="geometricPrecision"
          pathLength={100}
          strokeDasharray="12 88"
          strokeLinecap="butt"
          transform="rotate(180 50 50)"
          className="service-border-runner"
          style={{ animationDelay: `${delay}s` }}
        />
      </svg>
    </>
  );
}

export default function CapabilitiesBento() {
  return (
    <section id="services" aria-label="Services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.p variants={fadeInUp} className="text-sm font-medium text-purple-400 uppercase tracking-widest mb-3">
            Services
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-semibold tracking-tight">
            <span className="text-gradient-subtle">Services engineered for </span>
            <span className="text-gradient">production scale</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-muted leading-relaxed">
            Morph AI services are designed around practical transformation: adaptive AI
            systems, full-stack execution, and reliable delivery that reduces complexity and
            improves business outcomes.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 auto-rows-[minmax(220px,auto)]"
        >
          {capabilities.map((cap, index) => (
            <motion.article
              key={cap.title}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className={`card-glow service-card-surface rounded-2xl p-6 sm:p-8 relative overflow-hidden group ${cap.span}`}
            >
              <MovingBorderLine delay={index * 0.35} />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cap.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 mb-5 group-hover:border-purple-500/30 transition-colors">
                  <cap.icon className="h-6 w-6 text-purple-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{cap.title}</h3>
                <p className="text-muted text-sm leading-relaxed flex-grow">{cap.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {cap.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {index === 0 && (
                  <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {miniFeatures.map((f) => (
                      <div key={f.label} className="flex items-center gap-2 text-xs text-muted">
                        <f.icon className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                        {f.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

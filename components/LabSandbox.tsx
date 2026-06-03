"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Play,
  FileJson,
  Sparkles,
  ChevronRight,
  Circle,
} from "lucide-react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

const rawInput = `{
  "role": "Senior AI Engineer",
  "job_description": "Design and deploy scalable AI systems",
  "candidate_pool": 842,
  "resume_batch": [
    {"id": "cv_01", "skills": ["NLP", "MLOps", "Python"]},
    {"id": "cv_02", "skills": ["LLMs", "RAG", "FastAPI"]},
    {"id": "cv_03", "skills": ["Data Science", "Evaluation", "Prompting"]}
  ],
  "meta": {"source": "evolutica.intake", "pipeline": "recruitment"}
}`;

const structuredOutput = `{
  "evolutica_insights": {
    "auto_generated_jd": true,
    "top_candidates_shortlisted": 14,
    "interview_ready": 6,
    "ranking_confidence": 0.94
  },
  "actions": [
    {"type": "schedule_interview", "owner": "hiring_manager"},
    {"type": "request_assessment", "owner": "talent_ops"}
  ],
  "status": "hiring intelligence ready ✓"
}`;

const logLines = [
  "> Initializing Evolutica pipeline...",
  "> Parsing candidate profiles...",
  "> Running AI scoring and ranking...",
  "> Generating interview recommendations...",
  "> Recruitment intelligence ready.",
];

export default function LabSandbox() {
  const [activeTab, setActiveTab] = useState<"input" | "output">("input");
  const [isRunning, setIsRunning] = useState(false);
  const [logIndex, setLogIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isRunning) return;

    const logTimer = setInterval(() => {
      setLogIndex((i) => Math.min(i + 1, logLines.length - 1));
    }, 600);

    const progressTimer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressTimer);
          setActiveTab("output");
          setIsRunning(false);
          return 100;
        }
        return p + 4;
      });
    }, 120);

    return () => {
      clearInterval(logTimer);
      clearInterval(progressTimer);
    };
  }, [isRunning]);

  const handleRun = () => {
    setIsRunning(true);
    setLogIndex(0);
    setProgress(0);
    setActiveTab("input");
    setTimeout(() => setActiveTab("output"), 2800);
  };

  return (
    <section id="products" aria-label="Products" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <motion.p variants={fadeInUp} className="text-sm font-medium text-cyan-400 uppercase tracking-widest mb-3">
            Products
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-semibold tracking-tight">
            <span className="text-gradient">Sandbox</span>
            <span className="text-gradient-subtle"> — see the morph in action</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-muted leading-relaxed">
            Live demo of how our product, Evolutica, transforms recruitment input into
            structured hiring intelligence with automated scoring and interview-ready outputs.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass-strong rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-950/30"
        >
          {/* Title bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/40">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <Circle className="h-3 w-3 fill-red-500/80 text-red-500/80" />
                <Circle className="h-3 w-3 fill-amber-500/80 text-amber-500/80" />
                <Circle className="h-3 w-3 fill-emerald-500/80 text-emerald-500/80" />
              </div>
              <span className="text-xs text-muted font-mono">evolutica.lab — recruitment.preview</span>
            </div>
            <motion.button
              type="button"
              onClick={handleRun}
              disabled={isRunning}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600/80 px-4 py-1.5 text-xs font-medium text-white disabled:opacity-60"
            >
              <Play className="h-3 w-3" />
              {isRunning ? "Running..." : "Run Transform"}
            </motion.button>
          </div>

          <div className="grid lg:grid-cols-[220px_1fr] min-h-[420px]">
            {/* Sidebar */}
            <aside className="hidden lg:flex flex-col border-r border-white/10 bg-black/30 p-4 gap-1">
              <p className="text-[10px] uppercase tracking-widest text-muted mb-3 px-2">Explorer</p>
              {["role_intake.json", "evolutica.config", "candidate_insights.out"].map((file, i) => (
                <button
                  key={file}
                  type="button"
                  className={`flex items-center gap-2 text-left text-xs px-2 py-2 rounded-lg transition-colors ${
                    i === 0 ? "bg-white/10 text-foreground" : "text-muted hover:bg-white/5"
                  }`}
                >
                  <FileJson className="h-3.5 w-3.5 shrink-0" />
                  {file}
                </button>
              ))}
              <div className="mt-auto pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs text-emerald-400">
                  <Sparkles className="h-3.5 w-3.5" />
                  Evolutica Engine v1
                </div>
              </div>
            </aside>

            {/* Main editor area */}
            <div className="flex flex-col">
              <div className="flex border-b border-white/10">
                {(["input", "output"] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2.5 text-xs font-medium capitalize transition-colors ${
                      activeTab === tab
                        ? "text-foreground border-b-2 border-purple-500"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {tab === "input" ? "Raw Data" : "Structured Insights"}
                  </button>
                ))}
              </div>

              <div className="flex-1 grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
                <div className="p-4 font-mono text-[11px] sm:text-xs leading-relaxed overflow-auto max-h-[280px] lg:max-h-none">
                  <AnimatePresence mode="wait">
                    <motion.pre
                      key={activeTab}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      transition={{ duration: 0.25 }}
                      className="text-muted whitespace-pre-wrap"
                    >
                      {activeTab === "input" ? rawInput : structuredOutput}
                    </motion.pre>
                  </AnimatePresence>
                </div>

                <div className="p-4 bg-black/50 flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-muted mb-3">
                    <Terminal className="h-3.5 w-3.5" />
                    Console
                  </div>
                  <div className="flex-1 font-mono text-[11px] space-y-1.5">
                    {logLines.slice(0, logIndex + 1).map((line, i) => (
                      <motion.p
                        key={line}
                        initial={{ opacity: 0, x: -4 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={i === logIndex && isRunning ? "text-cyan-400" : "text-muted"}
                      >
                        {line}
                      </motion.p>
                    ))}
                  </div>
                  {(isRunning || progress === 100) && (
                    <div className="mt-4">
                      <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-purple-500 to-cyan-400"
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.1 }}
                        />
                      </div>
                      <p className="text-[10px] text-muted mt-2">{progress}% complete</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-3 border-t border-white/10 bg-black/40 flex items-center justify-between text-xs text-muted">
            <span className="flex items-center gap-1">
              <ChevronRight className="h-3 w-3 text-purple-400" />
              Preview mode — connect your ATS and candidate data in production
            </span>
            <a href="#footer" className="text-purple-400 hover:text-purple-300 transition-colors">
              Request full sandbox access →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

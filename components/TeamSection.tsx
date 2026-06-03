"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

const team = [
  {
    name: "Arsalan Ahmed",
    role: "Co-Founder",
    src: "/team/arsalan.jpg",
    ring: "from-purple-500 via-cyan-400 to-purple-600",
    glow: "group-hover:shadow-purple-500/25",
  },
  {
    name: "Muneeza Zaki",
    role: "Co-Founder",
    src: "/team/muneeza.jpg",
    ring: "from-rose-400 via-fuchsia-500 to-cyan-400",
    glow: "group-hover:shadow-fuchsia-500/25",
  },
];

export default function TeamSection() {
  return (
    <section id="team" aria-label="Team" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[520px] h-[320px] bg-purple-600/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-[380px] h-[260px] bg-cyan-500/8 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-medium text-cyan-400 uppercase tracking-widest mb-3"
          >
            Meet the Team
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-semibold tracking-tight">
            <span className="text-gradient-subtle">Collaborate with our </span>
            <span className="text-gradient">core leadership team</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-muted leading-relaxed">
            Morph AI blends strategy, engineering, and execution to build adaptive AI systems
            that drive practical transformation for businesses.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto"
        >
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className={`group relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] overflow-hidden shadow-2xl shadow-black/40 ${member.glow} hover:border-white/20 transition-shadow duration-500`}
            >
              <div
                className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${member.ring} opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-500`}
                aria-hidden
              />

              <div className="relative p-3 sm:p-3.5">
                <div
                  className={`relative rounded-2xl p-[2px] bg-gradient-to-br ${member.ring} shadow-lg shadow-black/30`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[14px] bg-[#0a0a0a]">
                    <Image
                      src={member.src}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 320px"
                      priority={index === 0}
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/25 to-transparent opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-cyan-500/10 mix-blend-soft-light" />

                    <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5">
                      <span
                        className={`inline-flex items-center rounded-full border border-white/15 bg-black/50 backdrop-blur-md px-3 py-1 text-[10px] sm:text-xs font-medium uppercase tracking-[0.18em] ${
                          member.role === "Founder"
                            ? "text-cyan-200/95"
                            : "text-purple-200/95"
                        }`}
                      >
                        {member.role}
                      </span>
                      <h3 className="mt-3 text-xl sm:text-2xl font-semibold tracking-tight text-white">
                        {member.name}
                      </h3>
                      <p className="mt-1.5 text-xs text-cyan-300/70 uppercase tracking-[0.22em]">
                        Morph AI
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 px-1 pb-1">
                  <p className="text-sm text-muted leading-relaxed">
                    {member.role === "Founder"
                      ? "Leading product vision, AI strategy, and client transformation across enterprise engagements."
                      : "Driving operations, partnerships, and delivery excellence for scalable AI outcomes."}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-10"
        >
          <a
            href="#footer"
            className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-muted hover:text-foreground hover:border-purple-500/30 transition-colors"
          >
            Work with us →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

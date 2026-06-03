"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const blobVariants = {
  animate: (i: number) => ({
    scale: [1, 1.08 + i * 0.02, 0.95, 1],
    rotate: [0, 90 + i * 30, 180 + i * 20, 360],
    borderRadius: [
      "60% 40% 30% 70% / 60% 30% 70% 40%",
      "30% 60% 70% 40% / 50% 60% 30% 60%",
      "50% 40% 50% 60% / 40% 50% 60% 50%",
      "60% 40% 30% 70% / 60% 30% 70% 40%",
    ],
    transition: {
      duration: 14 + i * 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

const clients = [
  {
    name: "Blutech Consulting",
    src: "/clients/blutech.jpg",
    surface: "light" as const,
  },
  {
    name: "Vantage Plus Analytics",
    src: "/clients/vantage-plus.jpg",
    surface: "dark" as const,
  },
  {
    name: "PEX Contracting",
    src: "/clients/pex.png",
    surface: "dark" as const,
  },
];

const desktopPositions = [
  { top: "12%", left: "62%" },
  { top: "20%", left: "14%" },
  { top: "66%", left: "14%" },
  { top: "76%", left: "54%" },
  { top: "24%", left: "72%" },
  { top: "60%", left: "74%" },
];

/** Tighter inset so cards stay inside the viewport when centered on anchor */
const mobilePositions = [
  { top: "11%", left: "50%" },
  { top: "24%", left: "28%" },
  { top: "24%", left: "72%" },
  { top: "70%", left: "30%" },
  { top: "70%", left: "70%" },
  { top: "84%", left: "50%" },
];

function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}

export default function MorphVisual() {
  const isMobile = useIsMobile();
  const [activeClient, setActiveClient] = useState(0);
  const [activePosition, setActivePosition] = useState(0);

  const outerPositions = useMemo(
    () => (isMobile ? mobilePositions : desktopPositions),
    [isMobile]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveClient((prev) => (prev + 1) % clients.length);
      setActivePosition((prev) => (prev + 1) % outerPositions.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [outerPositions.length]);

  useEffect(() => {
    setActivePosition((prev) => prev % outerPositions.length);
  }, [outerPositions.length]);

  const client = clients[activeClient];
  const position = outerPositions[activePosition];

  return (
    <div className="relative w-full max-w-[min(520px,calc(100vw-2.5rem))] mx-auto pt-6 pb-10">
      <div className="relative w-full aspect-square">
        <div className="absolute inset-0 grid-pattern rounded-full opacity-60" />

        <motion.div
          className="absolute inset-[2%] rounded-full border border-white/10"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-[10%] rounded-full border border-cyan-300/15"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute inset-[8%] rounded-full blur-3xl opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.5) 0%, rgba(34,211,238,0.2) 50%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            custom={i}
            variants={blobVariants}
            animate="animate"
            className="absolute inset-0 m-auto"
            style={{
              width: `${72 - i * 12}%`,
              height: `${72 - i * 12}%`,
              background: [
                "linear-gradient(135deg, rgba(168,85,247,0.55) 0%, rgba(139,92,246,0.2) 50%, transparent 100%)",
                "linear-gradient(225deg, rgba(34,211,238,0.4) 0%, rgba(52,211,153,0.15) 60%, transparent 100%)",
                "linear-gradient(315deg, rgba(192,132,252,0.25) 0%, rgba(255,255,255,0.05) 40%, transparent 100%)",
              ][i],
              filter: `blur(${i === 0 ? 0 : 1}px)`,
              mixBlendMode: i === 0 ? "normal" : "screen",
            }}
          />
        ))}

        <motion.div
          className="absolute inset-[22%] rounded-full border border-white/10 glass-strong flex items-center justify-center overflow-hidden"
          animate={{
            boxShadow: [
              "0 0 60px rgba(168,85,247,0.2)",
              "0 0 100px rgba(34,211,238,0.25)",
              "0 0 60px rgba(168,85,247,0.2)",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="absolute inset-0 opacity-80"
            style={{
              background:
                "conic-gradient(from 180deg at 50% 50%, #a855f7, #22d3ee, #34d399, #c084fc, #a855f7)",
            }}
          />
          <div className="absolute inset-[2px] rounded-full bg-[#0a0a0a]/90 backdrop-blur-sm" />
          <motion.div
            className="relative z-10 text-center px-6"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-200/80 mb-1.5 font-medium">
              Live
            </p>
            <p className="text-base sm:text-lg font-semibold text-gradient leading-none">Morphing</p>
            <p className="text-[10px] sm:text-xs text-purple-200/75 mt-2 tracking-wide">
              Adaptive AI in motion
            </p>
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${client.name}-${activePosition}-${isMobile ? "m" : "d"}`}
            initial={{ opacity: 0, scale: 0.9, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="absolute z-20 -translate-x-1/2 -translate-y-1/2 max-w-[calc(100%-1rem)]"
            style={position}
          >
            <div className="glass-strong rounded-xl px-2.5 py-2 sm:px-3.5 sm:py-2.5 border border-cyan-300/30 shadow-xl shadow-cyan-500/15 backdrop-blur-xl">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <span
                  className={`inline-flex h-7 w-9 sm:h-9 sm:w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border ${
                    client.surface === "light"
                      ? "border-white/20 bg-white"
                      : "border-white/10 bg-[#0b0b0f]"
                  }`}
                >
                  <Image
                    src={client.src}
                    alt={`${client.name} logo`}
                    width={44}
                    height={32}
                    className="max-h-5 sm:max-h-7 w-auto object-contain px-0.5"
                  />
                </span>
                <span className="text-[10px] sm:text-xs font-medium text-foreground/95 tracking-wide leading-tight sm:whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 translate-y-1/2">
          <div className="rounded-full border border-white/10 bg-black/45 backdrop-blur-md px-3 sm:px-4 py-1.5 shadow-lg shadow-purple-500/10">
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-cyan-100/70 whitespace-nowrap font-medium">
              Trusted by innovative teams
            </p>
          </div>
        </div>

        {[...Array(10)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-cyan-400/80"
            style={{
              width: `${i % 3 === 0 ? 8 : 6}px`,
              height: `${i % 3 === 0 ? 8 : 6}px`,
              top: `${20 + (i * 13) % 60}%`,
              left: `${10 + (i * 17) % 80}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.7, 1.25, 0.7],
              y: [0, -8, 0],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </div>
  );
}

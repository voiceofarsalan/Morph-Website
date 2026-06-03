"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { CALENDLY_SCRIPT, CALENDLY_URL } from "@/lib/calendly";

type CalendlyModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function CalendlyModal({ open, onClose }: CalendlyModalProps) {
  const embedRef = useRef<HTMLDivElement>(null);
  const scriptReadyRef = useRef(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open || !embedRef.current) return;

    const mountWidget = () => {
      if (!embedRef.current || !window.Calendly) return;
      embedRef.current.innerHTML = "";
      window.Calendly.initInlineWidget({
        url: CALENDLY_URL,
        parentElement: embedRef.current,
      });
    };

    if (scriptReadyRef.current && window.Calendly) {
      mountWidget();
      return;
    }

    const interval = window.setInterval(() => {
      if (window.Calendly) {
        scriptReadyRef.current = true;
        mountWidget();
        window.clearInterval(interval);
      }
    }, 100);

    return () => window.clearInterval(interval);
  }, [open]);

  return (
    <>
      <Script
        src={CALENDLY_SCRIPT}
        strategy="lazyOnload"
        onLoad={() => {
          scriptReadyRef.current = true;
          if (open && embedRef.current && window.Calendly) {
            embedRef.current.innerHTML = "";
            window.Calendly.initInlineWidget({
              url: CALENDLY_URL,
              parentElement: embedRef.current,
            });
          }
        }}
      />

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
            <motion.button
              type="button"
              aria-label="Close booking"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/75 backdrop-blur-sm"
              onClick={onClose}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="calendly-dialog-title"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-3xl rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl shadow-purple-950/40 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
                <div>
                  <p
                    id="calendly-dialog-title"
                    className="text-lg font-semibold text-foreground"
                  >
                    Book a demo
                  </p>
                  <p className="text-sm text-muted mt-0.5">
                    Pick a time that works for you — 30 minute session
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-muted hover:text-foreground hover:border-white/20 transition-colors"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="calendly-modal-body max-h-[min(700px,calc(100vh-8rem))] overflow-y-auto bg-white">
                <div
                  ref={embedRef}
                  className="calendly-inline-widget min-h-[700px] w-full"
                  data-url={CALENDLY_URL}
                  style={{ minWidth: 320, height: 700 }}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { fadeInUp, viewportOnce } from "@/lib/motion";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/wemorphai", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/wemorphai", label: "GitHub" },
  { icon: Mail, href: "mailto:morphaiofficial@gmail.com", label: "Email" },
];

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Blogs", href: "#blogs" },
  { label: "Team", href: "#team" },
];

export default function Footer() {
  return (
    <footer id="footer" className="relative border-t border-white/10 pt-20 pb-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="glass-strong rounded-2xl p-8 sm:p-12 mb-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-cyan-600/10 pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
              Stay ahead of the <span className="text-gradient">morph</span>
            </h3>
            <p className="text-muted text-sm max-w-md mx-auto mb-8">
              Get product updates, engineering insights, and early access to our sandbox.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="you@company.com"
                aria-label="Email for newsletter"
                className="flex-1 rounded-full border border-white/10 bg-black/40 px-5 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full bg-gradient-to-r from-purple-600 to-purple-500 px-6 py-3 text-sm font-medium text-white glow-purple shrink-0"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-3 mb-4 group">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                <Image
                  src="/morph-logo.png"
                  alt="Morph AI logo"
                  width={36}
                  height={36}
                  className="h-7 w-7 object-contain"
                />
              </span>
              <span>
                <span className="block font-semibold">Morph AI</span>
                <span className="block text-xs text-cyan-300/80 mt-0.5">Shape Shifting Intelligence</span>
              </span>
            </a>
            <p className="text-sm text-muted max-w-sm leading-relaxed">
              Morphing complex workflows into intelligent autonomy with adaptive AI
              solutions, agentic systems, and production-grade product engineering.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-4">Navigate</p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-4">Connect</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl glass text-muted hover:text-foreground hover:border-purple-500/30 transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
            <div className="mt-4 space-y-1 text-xs text-muted">
              <p>morphaiofficial@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs text-muted">
          <p>© {new Date().getFullYear()} Morph AI. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with precision
            <span className="text-purple-400">◆</span>
            for the autonomous future
          </p>
        </div>
      </div>
    </footer>
  );
}

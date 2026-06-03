"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Blogs", href: "#blogs" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
        scrolled ? "pt-3 pb-2" : "pt-5 pb-3"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 sm:px-6 transition-all duration-500 ${
          scrolled
            ? "glass-strong border-white/[0.12] shadow-lg shadow-purple-950/25 py-3"
            : "glass border-white/[0.08] py-3.5"
        }`}
        aria-label="Main navigation"
      >
        <a href="#" className="group flex items-center gap-3 pl-1 sm:pl-2">
          <span className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] group-hover:border-purple-500/35 transition-colors">
            <Image
              src="/morph-logo.png"
              alt="Morph AI logo"
              width={44}
              height={44}
              className="h-8 w-8 sm:h-9 sm:w-9 object-contain transition-transform duration-300 group-hover:scale-[1.04]"
              priority
            />
            <span className="absolute inset-0 rounded-xl bg-gradient-to-tr from-purple-500/10 via-transparent to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </span>
          <span className="text-base sm:text-lg font-semibold tracking-tight">
            Morph<span className="text-purple-400">AI</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-purple-400 after:to-cyan-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2 pr-1 sm:pr-2">
          <a
            href="#footer"
            className="text-sm text-muted hover:text-foreground transition-colors px-3 py-2"
          >
            Contact
          </a>
          <motion.a
            href="#footer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 px-5 py-2.5 text-sm font-medium text-white glow-purple overflow-hidden"
          >
            <span className="relative z-10">Book a Demo</span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-400/20 to-cyan-500/0 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700" />
          </motion.a>
        </div>

        <button
          type="button"
          className="md:hidden p-2 rounded-lg border border-white/10 text-muted hover:text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 glass-strong border border-white/10 rounded-2xl overflow-hidden shadow-lg shadow-purple-950/20"
          >
            <ul className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 px-4 rounded-xl text-muted hover:text-foreground hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10 mt-2">
                <a
                  href="#footer"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full justify-center rounded-full bg-gradient-to-r from-purple-600 to-purple-500 py-3 text-sm font-medium text-white"
                >
                  Book a Demo
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

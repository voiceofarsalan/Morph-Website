"use client";

import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { useCalendly } from "./CalendlyProvider";

type BookDemoButtonProps = HTMLMotionProps<"button"> & {
  children?: ReactNode;
  onBook?: () => void;
};

export default function BookDemoButton({
  children = "Book a Demo",
  className = "",
  onBook,
  ...props
}: BookDemoButtonProps) {
  const { openCalendly } = useCalendly();

  return (
    <motion.button
      type="button"
      onClick={() => {
        onBook?.();
        openCalendly();
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
}

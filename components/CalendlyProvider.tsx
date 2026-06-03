"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import CalendlyModal from "./CalendlyModal";

type CalendlyContextValue = {
  openCalendly: () => void;
  closeCalendly: () => void;
};

const CalendlyContext = createContext<CalendlyContextValue | null>(null);

export function useCalendly() {
  const ctx = useContext(CalendlyContext);
  if (!ctx) {
    throw new Error("useCalendly must be used within CalendlyProvider");
  }
  return ctx;
}

export function CalendlyProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openCalendly = useCallback(() => setOpen(true), []);
  const closeCalendly = useCallback(() => setOpen(false), []);

  return (
    <CalendlyContext.Provider value={{ openCalendly, closeCalendly }}>
      {children}
      <CalendlyModal open={open} onClose={closeCalendly} />
    </CalendlyContext.Provider>
  );
}

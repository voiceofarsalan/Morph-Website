"use client";

import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const updateMouse = (event: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
    };

    window.addEventListener("mousemove", updateMouse, { passive: true });
    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  return <div className="cursor-glow" aria-hidden />;
}

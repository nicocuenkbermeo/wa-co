"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

export default function CustomCursor() {
  const reduced = useReducedMotion();
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isCoarse, setIsCoarse] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(pointer: coarse)");
    setIsCoarse(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setIsCoarse(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced || isCoarse) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX - 18}px, ${ringY - 18}px, 0)`;
      rafId = requestAnimationFrame(loop);
    };

    const interactiveSelector = 'a, button, [data-cursor="hover"], input, textarea, select, [role="button"]';
    const onOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest(interactiveSelector)) setIsHovering(true);
    };
    const onOut = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest(interactiveSelector)) setIsHovering(false);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    rafId = requestAnimationFrame(loop);

    document.documentElement.style.cursor = "none";

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.documentElement.style.cursor = "";
    };
  }, [reduced, isCoarse]);

  if (reduced || isCoarse) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full"
        style={{
          background: "#0A330A",
          mixBlendMode: "difference",
          willChange: "transform",
        }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[99] rounded-full border transition-[width,height,border-color,background] duration-200"
        style={{
          width: isHovering ? 60 : 36,
          height: isHovering ? 60 : 36,
          borderColor: isHovering ? "#FFE800" : "#0A330A",
          background: isHovering ? "#0A330A22" : "transparent",
          mixBlendMode: "difference",
          willChange: "transform",
        }}
      />
    </>
  );
}

"use client";

import { useEffect } from "react";
import { V4 } from "../tokens";

export default function CustomCursor() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;

    const cursor = document.querySelector<HTMLDivElement>(".v4-cursor");
    const ring = document.querySelector<HTMLDivElement>(".v4-cursor-ring");
    if (!cursor || !ring) return;

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0,
      raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    };
    const anim = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(anim);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(anim);

    const hoverables = document.querySelectorAll<HTMLElement>(
      "a, button, [data-hover], .cap4, .plan4, .caso4"
    );
    const enter = () => cursor.classList.add("hover");
    const leave = () => cursor.classList.remove("hover");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    // magnetic CTAs
    const magnetic = document.querySelectorAll<HTMLElement>(".btn4, .nav4-cta");
    const onMagMove = (ev: Event) => {
      const e = ev as MouseEvent;
      const btn = ev.currentTarget as HTMLElement;
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
    };
    const onMagLeave = (ev: Event) => {
      (ev.currentTarget as HTMLElement).style.transform = "";
    };
    magnetic.forEach((b) => {
      b.addEventListener("mousemove", onMagMove);
      b.addEventListener("mouseleave", onMagLeave);
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
      magnetic.forEach((b) => {
        b.removeEventListener("mousemove", onMagMove);
        b.removeEventListener("mouseleave", onMagLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="v4-cursor" aria-hidden />
      <div className="v4-cursor-ring" aria-hidden />
      <style>{`
        @media (hover: none) { .v4-cursor, .v4-cursor-ring { display: none !important; } }
        .v4-cursor {
          position: fixed; top: 0; left: 0;
          width: 12px; height: 12px; border-radius: 50%;
          background: ${V4.gold};
          pointer-events: none; z-index: 9999;
          transform: translate(-50%, -50%);
          transition: width .25s cubic-bezier(.22,1,.36,1), height .25s cubic-bezier(.22,1,.36,1), background .2s, opacity .2s;
          mix-blend-mode: multiply;
        }
        .v4-cursor.hover { width: 64px; height: 64px; background: ${V4.gold}; opacity: .45; }
        .v4-cursor-ring {
          position: fixed; top: 0; left: 0;
          width: 40px; height: 40px; border-radius: 50%;
          border: 1px solid ${V4.gold};
          pointer-events: none; z-index: 9998;
          transform: translate(-50%, -50%);
          opacity: .5;
        }
      `}</style>
    </>
  );
}

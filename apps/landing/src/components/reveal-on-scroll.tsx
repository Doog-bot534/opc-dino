"use client";

import { useEffect } from "react";

/**
 * Mounts an IntersectionObserver that adds `.in` to any `.reveal` element
 * when it enters the viewport (one-shot — unobserve after revealed).
 *
 * Drop a single <RevealOnScroll /> in the root layout / page.
 */
export function RevealOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));

    // Failsafe: any element still hidden after 1.8s (e.g. screenshot tools that
    // bypass scroll, browsers without IO timing) gets revealed unconditionally.
    const failsafe = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.in)")
        .forEach((el) => el.classList.add("in"));
    }, 1800);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);
  return null;
}

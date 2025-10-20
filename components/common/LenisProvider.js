"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 0.8,
      smoothTouch: true,
      touchMultiplier: 1.5,
      infinite: false,
      normalizeWheel: true,
      wheelMultiplier: 1,
    });

    // Expose for smooth anchor navigation
    if (typeof window !== "undefined") {
      window.__lenis = lenis;
    }

    // Intercept in-page anchor links and smooth scroll via Lenis
    const handleAnchorClick = (event) => {
      const target = event.target.closest('a[href^="#"]');
      if (!target) return;
      const hash = target.getAttribute("href");
      if (!hash || hash === "#") return;
      const el = document.querySelector(hash);
      if (!el) return;
      event.preventDefault();
      lenis.scrollTo(el, { offset: -20, duration: 1 });
    };

    document.addEventListener("click", handleAnchorClick, true);

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      document.removeEventListener("click", handleAnchorClick, true);
      lenis.destroy();
    };
  }, []);

  return children;
}

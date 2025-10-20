"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { martianMono } from "../../app/layout";

export default function Dock() {
  const [page, setPage] = useState("edtech");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  // Mark as client-side after hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Sync dock state with current route on mount to prevent selection on refresh
  useEffect(() => {
    if (pathname === "/") {
      setPage("edtech");
    } else if (pathname === "/it-services") {
      setPage("it-service");
    }
  }, [pathname]);

  // Scroll behavior for dock visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show dock when at top or scrolling down, hide when scrolling up
      if (currentScrollY <= 0) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show dock
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide dock (but only after scrolling down more than 100px)
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavigation = (route) => {
    setPage(route);
  };

  // Don't render during SSR to prevent hydration mismatch
  if (!isClient) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-3 left-1/2 transform -translate-x-1/2 z-100 transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-neutral-600/30 backdrop-blur-lg rounded-2xl px-1 py-1 border-2 border-neutral-800/80 backdrop-grayscale-25 relative overflow-hidden flex gap-2">
        {/* Sliding background */}
        <div
          className={`absolute top-1 bottom-1 rounded-xl bg-neutral-500/30 shadow-lg transition-all duration-300 ease-out ${
            page === "edtech"
              ? "left-1.5 w-[calc(46%-0.125rem)]"
              : "left-[calc(48%-0.125rem)] w-[calc(51%-0.125rem)]"
          }`}
        />

        <div className="flex items-center gap-4 relative z-10 w-full justify-center tracking-wide">
          <Link
            href="/"
            onClick={() => handleNavigation("edtech")}
            className={`px-4 py-2 rounded-xl transition-all duration-300 text-sm relative left-2  ${
              martianMono.className
            } ${
              page === "edtech"
                ? "text-white"
                : "text-neutral-300 hover:text-neutral-500"
            }`}
            prefetch={true}
          >
            Ed-Tech
          </Link>
          <Link
            href="/it-services"
            onClick={() => handleNavigation("it-service")}
            className={`px-4 py-2 rounded-xl transition-all duration-300 text-sm  relative left-0.5 ${
              martianMono.className
            } ${
              page === "it-service"
                ? "text-white"
                : "text-neutral-300 hover:text-neutral-500"
            }`}
            prefetch={true}
          >
            IT-Service
          </Link>
        </div>
      </div>
    </div>
  );
}

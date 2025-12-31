"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { martianMono } from "../../app/fonts";

export default function Dock() {
  const [page, setPage] = useState("edtech");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (pathname === "/") {
      setPage("edtech");
    } else if (pathname === "/it-services") {
      setPage("it-service");
    } else if (pathname === "/dq-kids") {
      setPage("dq-kids");
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen) {
        // Check if click is outside the mobile menu
        const mobileMenu = document.querySelector(".mobile-menu-container");
        const mobileButton = document.querySelector(".mobile-menu-button");

        if (
          mobileMenu &&
          mobileButton &&
          !mobileMenu.contains(event.target) &&
          !mobileButton.contains(event.target)
        ) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const handleNavigation = (route) => {
    setPage(route);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (!isClient) {
    return null;
  }

  return (
    <>
      <div
        className={`hidden lg:block fixed bottom-6 left-1/2 transform -translate-x-1/2 z-100 transition-all duration-300 ease-in-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div
          className={`backdrop-blur-lg rounded-2xl px-1 py-1 border-2 backdrop-grayscale-25 relative overflow-hidden transition-colors duration-300 ${
            page === "it-service"
              ? "bg-white/40 border-neutral-200/50 "
              : "bg-neutral-700/20 border-neutral-800/30"
          }`}
        >
          <div
            className={`absolute top-1 bottom-1 rounded-lg transition-all duration-300 ease-out ${
              page === "edtech"
                ? "left-1.5 w-[calc(30%-0.125rem)] bg-neutral-500/10"
                : page === "it-service"
                ? "left-[calc(36%-0.125rem)] w-[calc(32%-0.125rem)] bg-black/5"
                : "left-[calc(68%-0.125rem)] w-[calc(32%-0.125rem)] bg-neutral-500/10"
            }`}
          />

          <div className="flex items-center gap-1 relative z-10 w-108 justify-center tracking-wide ">
            <Link
              href="/"
              onClick={() => handleNavigation("edtech")}
              className={`px-2 py-2 rounded-xl transition-all duration-300 text-sm text-center tracking-wide w-1/3 ${
                martianMono.className
              } ${
                page === "edtech"
                  ? page === "it-service"
                    ? "text-black"
                    : "text-white"
                  : page === "it-service"
                  ? "text-neutral-500 hover:text-black"
                  : "text-neutral-300 hover:text-neutral-500"
              }`}
              prefetch={true}
            >
              Ed-Tech
            </Link>
            <Link
              href="/it-services"
              onClick={() => handleNavigation("it-service")}
              className={`px-4 py-2 rounded-xl transition-all duration-300 text-sm text-center tracking-wide w-1/3  relative left-2 ${
                martianMono.className
              } ${
                page === "it-service"
                  ? "text-black"
                  : "text-neutral-300 hover:text-neutral-500"
              }`}
              prefetch={true}
            >
              IT-Service
            </Link>
            <Link
              href="/dq-kids"
              onClick={() => handleNavigation("dq-kids")}
              className={`px-4 py-2 rounded-xl transition-all duration-300 text-sm text-center tracking-wide w-1/3 ${
                martianMono.className
              } ${
                page === "dq-kids"
                  ? page === "it-service"
                    ? "text-black"
                    : "text-white"
                  : page === "it-service"
                  ? "text-neutral-500 hover:text-black"
                  : "text-neutral-300 hover:text-neutral-500"
              }`}
              prefetch={true}
            >
              DQ Kids
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-100 transition-all duration-300 ease-in-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div
          className={`backdrop-blur-lg rounded px-4 py-2 border-2 backdrop-grayscale-25 relative transition-colors duration-300 ${
            page === "it-service"
              ? "bg-white/40 border-neutral-200/50"
              : "bg-neutral-700/20 border-neutral-800/30"
          }`}
        >
          <button
            onClick={toggleMobileMenu}
            className={`mobile-menu-button flex items-center gap-6 ${
              page === "it-service" ? "text-black/70" : "text-white/70"
            }`}
          >
            <span className={`text-xs ${martianMono.className}`}>
              {page === "edtech"
                ? "Ed-Tech"
                : page === "it-service"
                ? "IT-Service"
                : "DQ Kids"}
            </span>
            <div className="flex flex-col gap-1">
              <span
                className={`block w-4 h-0.5 transition-all duration-300 ${
                  page === "it-service" ? "bg-black/35" : "bg-white/35"
                } ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              ></span>
              <span
                className={`block w-4 h-0.5 transition-all duration-300 ${
                  page === "it-service" ? "bg-black/35" : "bg-white/35"
                } ${isMobileMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`block w-4 h-0.5 transition-all duration-300 ${
                  page === "it-service" ? "bg-black/35" : "bg-white/35"
                } ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed bottom-16 left-1/2 transform -translate-x-1/2 z-100">
          <div
            className={`backdrop-blur-lg rounded px-2 py-1 border-2 backdrop-grayscale-25 ${
              page === "it-service"
                ? "bg-white/80 border-neutral-200/80"
                : "bg-neutral-800/30 border-neutral-800/80"
            }`}
          >
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => handleNavigation("edtech")}
                className={`px-2 py-1 rounded transition-all duration-300 text-xs text-center ${
                  martianMono.className
                } ${
                  page === "edtech"
                    ? page === "it-service"
                      ? "text-black bg-black/5"
                      : "text-white/70 bg-neutral-500/30"
                    : page === "it-service"
                    ? "text-neutral-500 hover:text-black hover:bg-black/5"
                    : "text-neutral-300 hover:text-white hover:bg-neutral-500/20"
                }`}
                prefetch={true}
              >
                Ed-Tech
              </Link>
              <Link
                href="/it-services"
                onClick={() => handleNavigation("it-service")}
                className={`px-2 py-1 rounded transition-all duration-300 text-xs text-center ${
                  martianMono.className
                } ${
                  page === "it-service"
                    ? "text-black bg-black/5"
                    : "text-neutral-300 hover:text-white hover:bg-neutral-500/20"
                }`}
                prefetch={true}
              >
                IT-Service
              </Link>
              <Link
                href="/dq-kids"
                onClick={() => handleNavigation("dq-kids")}
                className={`px-2 py-1 rounded transition-all duration-300 text-xs text-center ${
                  martianMono.className
                } ${
                  page === "dq-kids"
                    ? page === "it-service"
                      ? "text-black bg-black/5"
                      : "text-white/70 bg-neutral-500/30"
                    : page === "it-service"
                    ? "text-neutral-500 hover:text-black hover:bg-black/5"
                    : "text-neutral-300 hover:text-white hover:bg-neutral-500/20"
                }`}
                prefetch={true}
              >
                DQ Kids
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

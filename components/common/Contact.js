"use client";

import { hostGrotesk, martianMono } from "@/app/layout";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    // Add a small delay to ensure the iframe loads properly
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="contact"
      className="h-200 flex justify-center items-center pt-45 bg-black"
    >
      <div className="w-full max-w-4xl">
        <div className="text-center pb-9">
          <h1
            className={`text-4xl font-bold text-neutral-100 ${martianMono.className} `}
          >
            Still Confused?{" "}
          </h1>
          <p className={`text-neutral-500 ${hostGrotesk.className} `}>
            Connect with us - we&apos;ll help you to figure it out.
          </p>
        </div>

        <div className="relative" onMouseLeave={() => setIsInteractive(false)}>
          {!isLoaded && (
            <div className="flex justify-center items-center h-96  rounded-lg">
              <div className="text-white">Loading form...</div>
            </div>
          )}

          {/* Click-to-activate overlay to avoid scroll trap over iframe */}
          {!isInteractive && (
            <div
              className="absolute inset-0 z-10 cursor-pointer"
              role="button"
              aria-label="Activate form"
              onClick={() => setIsInteractive(true)}
            >
              
            </div>
          )}

          {isInteractive && (
            <button
              type="button"
              onClick={() => setIsInteractive(false)}
              className="absolute z-10 bottom-3 right-3 text-xs text-neutral-300   px-3 py-1 rounded hover:bg-neutral-800"
              aria-label="Exit form interaction"
            >
              
            </button>
          )}

          <iframe
            src="https://tally.so/embed/mOWyNg?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            width="100%"
            height="700"
            frameBorder="0"
            allow="fullscreen"
            title="Contact Form"
            className={`w-full rounded-lg shadow-lg bg-transparent transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setIsLoaded(true)}
            onBlur={() => setIsInteractive(false)}
            style={{
              minHeight: "600px",
              border: "none",
              outline: "none",
              pointerEvents: isInteractive ? "auto" : "none",
            }}
          />
        </div>
      </div>
    </div>
  );
}

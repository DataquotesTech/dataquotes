"use client";

import { hostGrotesk, martianMono } from "@/app/fonts";
import Link from "next/link"; // 1. Import Link component

export default function DQKids() {
  return (
    <>
      <style jsx>{`
        @keyframes cleanGrow {
          from {
            transform: scale(0.92);
          }
          to {
            transform: scale(1);
          }
        }

        .word {
          display: inline-block;
          transform: scale(0.92);
          animation: cleanGrow 0.35s ease-out forwards;
          will-change: transform;
        }
      `}</style>

      <div className="fixed h-screen w-screen z-90 flex items-center justify-center overflow-hidden text-neutral-300">
        <div className="relative h-full w-full bg-black">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(140%_145%_at_45%_10%,rgba(0,0,0,0)_40%,rgba(90,30,255,1)_100%)]">
            <div className="w-screen h-screen flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 px-4">
              
              {/* Badge */}
              <p
                className={`${martianMono.className} text-lg sm:text-xl font-bold text-center bg-white/10 px-3 sm:px-4 py-1 rounded-full border border-white/5 backdrop-blur-sm`}
              >
                <span className="text-blue-500">*</span> coming soon
              </p>

              {/* Title */}
              <h1
                className={`${martianMono.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center text-white`}
              >
                DataQuotes Juniors
              </h1>

              {/* Description */}
              <p
                className={`${hostGrotesk.className} text-sm sm:text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-loose text-center max-w-3xl text-neutral-400`}
              >
                After successfully guiding{" "}
                <span className="text-blue-400 font-semibold">Students</span>{" "}
                toward their{" "}
                <span className="text-blue-400 font-semibold">Dream jobs</span>,
                we are taking our next step introducing{" "}
                <span className="text-blue-400 font-semibold">
                  Digital Literacy for kids
                </span>
                .
              </p>

              {/* --- NEW BUTTON SECTION START --- */}
              {/* <div className="mt-4 sm:mt-6 animate-fade-in-up">
                <Link
                  href = "/kids-home" // Change this to your target URL (e.g., "/home" or "https://...")
                  className={`
                    group relative inline-flex items-center justify-center 
                    px-8 py-4 sm:px-10 sm:py-5 
                    font-bold text-white transition-all duration-200 
                    bg-blue-600 rounded-full 
                    hover:bg-blue-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 focus:ring-offset-gray-900
                    shadow-[0_0_20px_-5px_rgba(37,99,235,0.7)] hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.9)]
                    ${martianMono.className}
                  `}
                > */}
                  {/* <span className="mr-2 text-lg sm:text-xl">Launch</span> */}
        
                {/* </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

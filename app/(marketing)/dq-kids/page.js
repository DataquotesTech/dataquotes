"use client";

import { hostGrotesk, martianMono } from "@/app/fonts";

const quote =
  "We teach kids coding and programming. We are a team of experienced teaching educators who are dedicated to providing the best possible service to our clients.";

export default function DQKids() {
  const words = quote.split(" ");

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
          <div className="absolute inset-0 bg-[radial-gradient(140%_145%_at_45%_10%,rgba(0,0,0,0)_40%,rgba(90,30,255,1)_100%)]">
            <div className="w-screen h-screen flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 px-4">

              <p
                className={`${martianMono.className} text-lg sm:text-xl font-bold text-center bg-white/10 px-3 sm:px-4 py-1 rounded-full`}
              >
                <span className="text-blue-500">*</span> coming soon
              </p>

              <h1
                className={`${martianMono.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center`}
              >
                DQ Kids
              </h1>

              
              <p className={`${hostGrotesk.className} text-sm sm:text-lg md:text-xl lg:text-2xl leading-relaxed sm:leading-relaxed md:leading-loose text-center max-w-3xl`}>
                After successfully guiding <span className="text-blue-400 font-semibold">Students</span> toward their {" "} <span className="text-blue-400 font-semibold">Dream jobs</span> , We are taking our next step introducing <span className="text-blue-400 font-semibold">Digital Literacy for kids </span>{" "}.
              </p>



            </div>
          </div>
        </div>
      </div>
    </>
  );
}

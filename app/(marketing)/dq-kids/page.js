"use client";

import { useState, useEffect } from "react";
import { hostGrotesk, martianMono } from "@/app/fonts";
import { useRouter } from "next/navigation";
import { Rocket, Sparkles } from "lucide-react"; 
import confetti from "canvas-confetti"; 
import { motion } from "framer-motion";

export default function DQKids() {
  const router = useRouter();
  const [isOpening, setIsOpening] = useState(false);

  const handleLaunch = () => {
    setIsOpening(true);
    setTimeout(() => triggerConfetti(), 1500);
    setTimeout(() => router.push("/kids-home"), 4750);
  };

  const triggerConfetti = () => {
    const duration = 2000;
    const animationEnd = Date.now() + duration;
    const colors = ['#22d3ee', '#a855f7', '#3b82f6']; 

    (function frame() {
      confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors, zIndex: 9999 });
      confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors, zIndex: 9999 });
      if (Date.now() < animationEnd) requestAnimationFrame(frame);
    }());
    
    setTimeout(() => {
       confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 }, colors, zIndex: 9999, disableForReducedMotion: true });
    }, 200);
  };

  const heavyFabricEase = [0.16, 1, 0.3, 1];

  return (
    <div className="fixed inset-0 z-[999] overflow-hidden bg-black text-white">
      
      {/* --- GLITTER ANIMATION STYLES --- */}
      <style jsx global>{`
        @keyframes lensFlare {
            0% { opacity: 0; transform: scale(0) rotate(0deg); }
            50% { opacity: 1; transform: scale(1.5) rotate(45deg); filter: drop-shadow(0 0 10px rgba(255, 220, 100, 0.9)); }
            100% { opacity: 0; transform: scale(0) rotate(90deg); }
        }
        .animate-lens-flare {
            animation: lensFlare ease-in-out infinite;
        }
      `}</style>

      {/* ========================================================= */}
      {/* LAYER 1: THE "NEW WORLD" (Background)                     */}
      {/* ========================================================= */}
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center bg-[#05010d]">
         <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/60 via-black to-black transition-opacity duration-1000 ${isOpening ? 'opacity-100' : 'opacity-0'}`} />
         
         {/* Extra Glitters in background */}
         <ShiningGlitters count={30} className={isOpening ? 'opacity-100' : 'opacity-0'} />

         <motion.div 
           initial={{ opacity: 0, scale: 0.8 }}
           animate={isOpening ? { opacity: 1, scale: 1 } : {}}
           transition={{ delay: 1.2, duration: 1 }}
           className="relative z-10 flex flex-col items-center"
         >
            <Sparkles className="w-24 h-24 text-yellow-400 mb-8 animate-pulse" />
            <h2 className={`${martianMono.className} text-3xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 drop-shadow-2xl px-4 py-4 leading-normal`}>
              A HEARTFELT <br /> THANK YOU
            </h2>
            <p className={`${hostGrotesk.className} text-slate-300 text-lg md:text-2xl mt-4 max-w-3xl text-center px-4 leading-relaxed`}>
              For launching <strong className="text-white">Tirupati&apos;s First</strong> Digital Literacy Institute.
            </p>
         </motion.div>
      </div>

      {/* ========================================================= */}
      {/* LAYER 2: THE CURTAINS                                     */}
      {/* ========================================================= */}
      
      {/* LEFT CURTAIN */}
      <motion.div 
        initial={{ x: "0%" }}
        animate={isOpening ? { x: "-100%" } : { x: "0%" }}
        transition={{ duration: 3, ease: heavyFabricEase }}
        className="absolute top-0 left-0 w-[50vw] h-full z-20 overflow-hidden bg-[#1a0505] border-r-2 border-black/50"
      >
        <img src="/curtain.jpg" alt="Left Curtain" className="w-full h-full object-cover" style={{ objectPosition: 'left center', width: '100vw', maxWidth: 'none' }} />
        {/* Shadow & Highlight Overlays */}
        <div className="absolute inset-0 z-10 pointer-events-none mix-blend-multiply opacity-90" style={{ background: `repeating-linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 10%, transparent 30%, transparent 70%, rgba(0,0,0,0.6) 90%, rgba(0,0,0,0.9) 100%)`, backgroundSize: '120px 100%' }} />
        <div className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay opacity-40" style={{ background: `repeating-linear-gradient(90deg, transparent 0%, transparent 35%, rgba(255,255,255,0.7) 50%, transparent 65%, transparent 100%)`, backgroundSize: '120px 100%' }} />
      </motion.div>

      {/* RIGHT CURTAIN */}
      <motion.div 
        initial={{ x: "0%" }}
        animate={isOpening ? { x: "100%" } : { x: "0%" }}
        transition={{ duration: 3, ease: heavyFabricEase }}
        className="absolute top-0 right-0 w-[50vw] h-full z-20 overflow-hidden bg-[#1a0505] border-l-2 border-black/50"
      >
        <img src="/curtain.jpg" alt="Right Curtain" className="w-full h-full object-cover" style={{ objectPosition: 'right center', width: '100vw', maxWidth: 'none', marginLeft: '-50vw' }} />
        {/* Shadow & Highlight Overlays */}
        <div className="absolute inset-0 z-10 pointer-events-none mix-blend-multiply opacity-90" style={{ background: `repeating-linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 10%, transparent 30%, transparent 70%, rgba(0,0,0,0.6) 90%, rgba(0,0,0,0.9) 100%)`, backgroundSize: '120px 100%' }} />
        <div className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay opacity-40" style={{ background: `repeating-linear-gradient(90deg, transparent 0%, transparent 35%, rgba(255,255,255,0.7) 50%, transparent 65%, transparent 100%)`, backgroundSize: '120px 100%' }} />
      </motion.div>


      {/* ========================================================= */}
      {/* LAYER 2.5: SHINING LENS FLARES (Foreground)               */}
      {/* ========================================================= */}
      <ShiningGlitters count={40} className={`z-25 transition-opacity duration-500 ${isOpening ? 'opacity-0' : 'opacity-100'}`} />


      {/* ========================================================= */}
      {/* LAYER 3: THE UI (Text & Button)                           */}
      {/* ========================================================= */}
      <motion.div 
        className="absolute inset-0 z-30 flex flex-col items-center justify-center"
        animate={isOpening ? { opacity: 0, scale: 1.1, filter: "blur(10px)", pointerEvents: "none" } : { opacity: 1, scale: 1, filter: "blur(0px)", pointerEvents: "auto" }}
        transition={{ duration: 0.8 }}
      >
         <div className="flex flex-col items-center px-4 max-w-4xl">
            {/* Badge */}
            {/* <div className="mb-8">
               <span className={`${martianMono.className} text-lg sm:text-xl font-bold text-center bg-black/60 px-4 py-1 rounded-full border border-white/10 backdrop-blur-md text-blue-400 shadow-xl`}>
                 <span className="text-white">*</span> coming soon
               </span>
            </div> */}

            {/* Title */}
            <h1 className={`${martianMono.className} text-5xl md:text-8xl font-black text-center text-white mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,1)]`}>
              DataQuotes <br /> Juniors
            </h1>

            {/* Description */}
            <p className={`${hostGrotesk.className} text-sm sm:text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-loose text-center text-gray-200 mt-6 mb-10 font-medium drop-shadow-md`}>
              After successfully guiding <span className="text-blue-400 font-semibold">Students</span> toward their <span className="text-blue-400 font-semibold">Dream jobs</span>, we are taking our next step introducing <span className="text-blue-400 font-semibold">Digital Literacy for kids</span>.
            </p>

            {/* Launch Button */}
            <button
              onClick={handleLaunch}
              className={`
                group relative inline-flex items-center justify-center 
                px-10 py-5 
                font-bold text-white transition-all duration-300 
                bg-blue-600 rounded-full 
                hover:bg-blue-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.6)]
                focus:outline-none focus:ring-4 focus:ring-blue-600/30
                ${martianMono.className}
              `}
            >
              <span className="mr-3 text-xl">Launch</span>
              <Rocket className="w-6 h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </button>
         </div>
      </motion.div>

    </div>
  );
}

// --- UPDATED COMPONENT: LENS FLARE / SHINING STARS ---
function ShiningGlitters({ count = 10, className = "" }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 15, // Larger size (10px to 25px)
      delay: `${Math.random() * 3}s`, // Random start times
      duration: `${Math.random() * 2 + 5}s`, // Fast pulse (2-4s)
    }));
    setParticles(newParticles);
  }, [count]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute animate-lens-flare"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        >
          {/* CUSTOM SVG: 4-Point Lens Flare Shape */}
          <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-[0_0_8px_rgba(255,200,0,0.8)]">
             <path 
               d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" 
               fill="#FCD34D" // Gold color
             />
             <circle cx="12" cy="12" r="4" fill="white" opacity="0.8" /> {/* Hot white center */}
          </svg>
        </div>
      ))}
    </div>
  );
}
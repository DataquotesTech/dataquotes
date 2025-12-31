"use client";
import { motion } from "motion/react";
import { hostGrotesk } from "@/app/fonts";

export default function Hero() {
  return (
    <section className={`${hostGrotesk.className} min-h-screen flex flex-col justify-center px-6 pt-32 pb-0 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] relative`}>
      <div className="md:px-10 mx-auto w-full relative">
        <motion.h1 
          className="text-[8.5vw] md:text-[8vw] leading-[0.9] font-black tracking-tighter uppercase"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Lets Bring Your <br />
          <span className="flex items-center gap-4">
            Idea to Live
            <motion.span 
              className="inline-block text-red-500"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <svg width="0.8em" height="0.8em" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 0L60 40L100 50L60 60L50 100L40 60L0 50L40 40Z" />
              </svg>
            </motion.span>
          </span>
        </motion.h1>
        
        
      </div>


      <motion.div 
        className="absolute bottom-8 right-6 md:right-10 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs font-medium uppercase tracking-widest text-neutral-400">Scroll</span>
        <motion.div
            
        >
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-neutral-400">
                <path d="M7 13l5 5 5-5M12 4v14" />
             </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

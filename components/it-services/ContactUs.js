"use client";
import { hostGrotesk } from "@/app/fonts";
import { LuArrowRight } from "react-icons/lu";
import { motion } from "motion/react";

export default function ContactUs() {
  return (
    <section id="contact" className={`${hostGrotesk.className} px-6 pb-20 bg-white`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[10vw] md:text-[6vw] font-black tracking-tighter uppercase leading-none border-b border-black pb-4 mb-20">Contact Us</h2>
        
        <div className="flex flex-col md:flex-col gap-10 items-start">
          {/* Left Column - Info */}
          <div className="flex-1">
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-tight mb-2">
              Let&apos;s build reasonable software together.
            </h3>
            <p className="text-lg md:text-lg text-neutral-500 font-medium leading-relaxed mb-12 ">
              Whether you have a clear roadmap or just a rough idea, we&apos;re here to help you turn it into a scalable, secure reality.
            </p>
            
            <div className="space-y-6">
              <div>
                <p className="text-sm font-black uppercase tracking-widest text-neutral-400 mb-2">Email</p>
                <a href="mailto:hello@dataquotes.net" className="text-2xl font-bold hover:text-red-500 transition-colors">
                  hello@dataquotes.net
                </a>
              </div>
             
            </div>
          </div>

          {/* Right Column - Action */}
          <div className="flex-1 flex flex-col justify-center h-full pt-10 md:pt-20">
            <a 
              href="mailto:koushikyerraguntla@gmail.com?subject=New%20Inquiry&body=Hi%20DataQuotes%20Team%2C%0D%0A%0D%0AI%27d%20like%20to%20discuss%20a%20project..."
              className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
            >
              <span className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight hover:text-red-500 transition-colors underline decoration-4 underline-offset-8">
                Start a Project
              </span>
              <motion.span 
                initial={{ x: 0 }}
                whileHover={{ x: 20 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-4xl sm:text-5xl md:text-6xl md:ml-2"
              >
                <LuArrowRight />
              </motion.span>
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
}

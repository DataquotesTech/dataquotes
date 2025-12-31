"use client";
import { hostGrotesk } from "@/app/fonts";
import Image from "next/image";
export default function AboutUs() {
  return (
    <section id="about" className={`${hostGrotesk.className} px-6 pb-20 bg-white`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[10vw] md:text-[6vw] font-black tracking-tighter uppercase leading-none border-b border-black pb-4 mb-20">About Us</h2>
        
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="flex-1 space-y-8">
            <p className="text-2xl md:text-xl lg:text-2xl xl:text-3xl font- leading-tight">
              At Dataquotes, we don’t just deliver technology—we focus on solving real business problems. We take time to understand how your business works, then design solutions that are practical, scalable, and easy to adopt.
            </p>
            <p className="text-2xl md:text-xl lg:text-2xl xl:text-3xl font- leading-tight">
              Our approach is simple: clear communication, honest guidance, and solutions that create measurable impact. Whether it’s AI, software, or analytics, we build with purpose—so technology supports your growth, not complicates it.
            </p>
          </div>
          <div className="w-full md:w-[40%] aspect-[5/4] bg-neutral-200 rounded-3xl">
            {/* Visual element here */}
            <Image src="/mission.webp" alt="About Us" width={500} height={500} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

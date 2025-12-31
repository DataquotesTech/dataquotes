"use client";
import { motion } from "motion/react";
import { hostGrotesk } from "@/app/fonts";
import { LuArrowDown } from "react-icons/lu";
import Image from "next/image";

export default function Work() {
  const projects = [
    { title: "FMCG Influencers, 2025", image: "/fmcg.png", color: "bg-blue-500" },
    { title: "PrepGrid, 2025", image: "/prepgrid.png", color: "bg-orange-500" },
  ];

  return (
    <section id="work" className={`${hostGrotesk.className} px-6 pb-20 bg-white`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end border-b border-black pb-4 mb-20">
          <h2 className="text-[10vw] md:text-[6vw] font-black tracking-tighter uppercase leading-none">Work</h2>
          <LuArrowDown className="text-[6vw] md:text-[4vw]" />
        </div>
        
        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className={`aspect-[4/3] md:aspect-[16/7] w-full rounded-lg overflow-hidden mb-6 ${project.color} bg-opacity-10 relative`}>
                <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center text-neutral-400">
                  <Image src={project.image} alt={project.title} width={1000} height={562} className="w-full h-full object-cover"/>
                  <p className="text-xl md:text-2xl font-bold absolute bottom-4 left-4 text-white">{project.title}</p>
                </div>
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

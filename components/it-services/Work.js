import { motion, useMotionValue, animate } from "motion/react";
import { useState, useEffect } from "react";
import { hostGrotesk } from "@/app/fonts";
import { LuArrowDown, LuArrowUpLeft, LuArrowUpRight } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  const projects = [
    { title: "FMCG Influencers, 2025", image: "/fmcg.png", color: "bg-blue-500", url: "https://www.fmcginfluencers.com/" },
    { title: "PrepGrid, 2025", image: "/prepgrid.png", color: "bg-orange-500", url: "https://prepgrid.vercel.app/" },
    { title: "Shrimpr Realty, 2024", image: "/shri.png", color: "bg-green-500", url: "https://shrimprrealty.com/" }, 
  ];

  return (
    <section id="work" className={`${hostGrotesk.className} py-20 bg-white overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end border-b border-black pb-2">
          <h2 className="text-[10vw] md:text-[6vw] font-black tracking-tighter uppercase leading-none">Work</h2>
          <LuArrowDown className="text-[6vw] md:text-[4vw]" />
        </div>
      </div>
        
      <div className="w-full overflow-hidden">
        <StepSlider projects={projects} />
      </div>
    </section>
  );
}

function StepSlider({ projects }) {
  // 1. Duplicate projects: [Original, Clone]
  const duplicatedProjects = [...projects, ...projects]; 
  const totalItems = duplicatedProjects.length;
  
  const [index, setIndex] = useState(0);
  const [isResetting, setIsResetting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isResetting || isHovered) return; // Stop timer if resetting or hovered

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 2000); // Wait 2 seconds

    return () => clearTimeout(timer);
  }, [index, isResetting, isHovered]);

  // Handle Loop Reset
  const handleAnimationComplete = () => {
    if (index >= projects.length) {
      setIsResetting(true);
      setIndex(0); 
      // We need to clear reset flag quickly to allow next move
      setTimeout(() => setIsResetting(false), 50);
    }
  };
  
  const nextSlide = () => {
    if (index >= totalItems - 1) return; // Prevent overshooting before reset logic kicks in
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
     if (index <= 0) {
        // If we are at real 0, we can jump to the end of the first set (equivalent position)
        // But doing this smoothly backwards is tricky with this simple "forward reset" logic.
        // Simple hack: prevent going back past 0 for now or implement backward infinite loop?
        // Infinite backward loop requires "pre-clones" or complex index math.
        // Let's stick to simple prev that stops at 0 or wraps to end (jump).
        // Let's wrap to end of first set (projects.length - 1) *if* we have cloned set.
        // actually index 0 == index projects.length.
        // So jumping to projects.length - 1 is the item before "start".
        
        setIsResetting(true);
        setIndex(projects.length - 1);
        setTimeout(() => setIsResetting(false), 50);
     } else {
        setIndex((prev) => prev - 1);
     }
  };

  return (
    <div 
        className="relative group" 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        <motion.div 
          className="flex"
          animate={{ x: `-${index * (100 / totalItems)}%` }} 
          transition={{ 
            duration: isResetting ? 0 : 1.0, 
            ease: [0.25, 1, 0.5, 1] 
          }}
          onAnimationComplete={handleAnimationComplete}
          style={{ width: "fit-content" }} 
        >
          {duplicatedProjects.map((project, idx) => (
            <div 
              key={idx}
              className="w-[100vw] relative border-r border-white/10 flex flex-col items-center justify-center py-10" 
            >
              <Link href={project.url} target="_blank" className={`aspect-video w-full overflow-hidden ${project.color} bg-opacity-10 relative max-w-7xl mx-auto shadow-2xl rounded-xl h-132 cursor-pointer block hover:scale-[1.01] transition-transform duration-500`}> 
                <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center text-neutral-400 ">
                    <Image src={project.image} alt={project.title} width={1000} height={562} className="w-full h-full object-cover"/>
                </div>
              </Link>
              <div className="px-6 mt-8 pb-4 max-w-7xl flex items-center justify-center gap-2">
                  <Link href={project.url} target="_blank" className="text-2xl md:text-3xl font-bold text-black flex items-center gap-2 hover:underline decoration-black/50 underline-offset-4">
                    {project.title}
                    <LuArrowUpRight className="text-xl md:text-2xl" />
                  </Link>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Navigation Buttons */}
        <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-black/10 text-black p-4 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10 cursor-pointer"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-black/10 text-black p-4 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10 cursor-pointer"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
    </div>
  );
}

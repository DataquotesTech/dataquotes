"use client";

import { martianMono } from "@/app/fonts";
import {
  Si1Dot1Dot1Dot1,
  Si30Secondsofcode,
  Si99Designs,
  SiAbbott,
  SiAbbrobotstudio,
  SiAccenture,
  SiAmazon,
  SiAnswer,
  SiCognizant,
  SiGoogle,
  SiGooglecampaignmanager360,
  SiInfosys,
  SiMicrobit,
  SiPopos,
  SiTcs,
} from "react-icons/si";
import { SiWipro } from "react-icons/si";
import { AnimatedGradientText } from "../Ui/animated-gradient-text";

const Compaines = () => {
  return (
    <div
      className={`w-full py-25 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 text-neutral-300 min-h-150 text-2xl sm:text-3xl ${martianMono.className}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 sm:gap-8 md:gap-10 flex-col">
        <h1 className="pb-6 sm:pb-8 md:pb-10 text-center">
          <AnimatedGradientText>Our Students got hired at</AnimatedGradientText>
        </h1>
        <div className="flex flex-wrap gap-8 sm:gap-12 md:gap-15 items-center justify-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-neutral-500">
          <SiTcs />
          <SiWipro />
          <SiCognizant />
          
          <SiMicrobit />
         
          <SiAbbrobotstudio />
          <SiAbbott /> 
          <Si30Secondsofcode />
          <Si99Designs />
          <Si1Dot1Dot1Dot1 />
          <SiAnswer />
          <SiPopos />
          <SiAccenture/>
          <SiInfosys/>
          <p className="text-xs sm:text-sm">...many more</p>
        </div>
        
        <a
          href="#contact"
          className="text-neutral-900 bg-white/80 px-3 sm:px-4 py-2 sm:py-2.5 rounded hover:bg-neutral-500 hover:scale-102 text-sm md:text-xl sm:text-xl mt-6 sm:mt-8 md:mt-10"
        >
          Reach Out
        </a>
      </div>
    </div>
  );
};

export default Compaines;

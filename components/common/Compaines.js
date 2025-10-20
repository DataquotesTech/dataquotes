"use client";

import { martianMono } from "@/app/fonts";
import {
  Si1Dot1Dot1Dot1,
  Si30Secondsofcode,
  Si99Designs,
  SiAbbott,
  SiAbbrobotstudio,
  SiAmazon,
  SiAnswer,
  SiCognizant,
  SiGoogle,
  SiGooglecampaignmanager360,
  SiMicrobit,
  SiPopos,
  SiTcs,
} from "react-icons/si";
import { SiWipro } from "react-icons/si";
import { AnimatedGradientText } from "../Ui/animated-gradient-text";

const Compaines = () => {
  return (
    <div
      className={`w-full py-20 px-10 text-neutral-300 min-h-150 text-3xl ${martianMono.className}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-10 flex-col">
        <h1 className="pb-10">
          <AnimatedGradientText>Our Students got hired at</AnimatedGradientText>
        </h1>
        <div className="flex gap-15 items-center justify-center text-6xl text-neutral-500">
          <SiTcs />
          <SiWipro />
          <SiCognizant />
          <SiGooglecampaignmanager360 />
          <SiGoogle />
          <SiMicrobit />
          <SiAmazon />
          <SiAbbrobotstudio />
          <SiAbbott />
        </div>
        <div className="flex gap-15 items-center justify-center text-6xl text-neutral-500">
          <Si30Secondsofcode />
          <Si99Designs />
          <Si1Dot1Dot1Dot1 />
          <SiAnswer />
          <SiPopos />
          <p className="text-sm">...many more</p>
        </div>
        <a
          href="#contact"
          className="text-neutral-900 bg-white/80 px-3 py-2.5 rounded  hover:bg-neutral-500 hover:scale-102 text-xl mt-10 "
        >
          Reach Out
        </a>
      </div>
    </div>
  );
};

export default Compaines;

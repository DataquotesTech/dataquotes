"use client";

import { AnimatedGradientText } from "@/components/Ui/animated-gradient-text";
import { hostGrotesk, martianMono } from "@/app/fonts";
import SquishyCard from "@/components/common/CoursesCard";

import Compaines from "@/components/common/Compaines";
import Reviews from "@/components/common/Reviews";
import FAQs from "@/components/common/FAQs";

export default function Courses() {
  return (
    <div
      className={`${martianMono.className} min-h-screen w-full flex flex-col items-center justify-center text-neutral-300 bg-black px-2`}
    >
      <div className=" h-100 md:h-140 w-full flex flex-col justify-center px-4 sm:px-6 md:px-10 gap-2 pt-16 sm:pt-20 relative">
        <h2
          className={`${martianMono.className} font-bold text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-neutral-400 text-center `}
          
        >
          Skill Up. Stand Out.{" "}
        </h2>
        <h2
          className={`${martianMono.className} font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-neutral-400 text-center`}
          style={{ wordSpacing: "-3.5rem" }}
        >
          Succeed<AnimatedGradientText>.</AnimatedGradientText>
        </h2>
        <p className={`text-neutral-500 absolute bottom-2 text-xs sm:text-sm pr-2 md:px-4 ${hostGrotesk.className}`}>
          Explore all the Courses that we offer. Click on View Details to get
          overview of the Course.
        </p>
      </div>
      <SquishyCard />

      <Compaines />
      <div className="max-w-7xl w-full sm:px-6">
        <Reviews />
        <FAQs />
      </div>
    </div>
  );
}

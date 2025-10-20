"use client";

import { AnimatedGradientText } from "@/components/Ui/animated-gradient-text";
import { hostGrotesk, martianMono } from "../../fonts";
import SquishyCard from "@/components/common/CoursesCard";

import Compaines from "@/components/common/Compaines";
import Reviews from "@/components/common/Reviews";
import FAQs from "@/components/common/FAQs";

export default function Courses() {
  return (
    <div
      className={`${martianMono.className} min-h-screen w-full  flex flex-col items-center justify-center text-neutral-300 bg-black`}
    >
      <div className="min-h-140 w-full flex flex-col justify-center px-10 gap-2 pt-20 relative">
        <h2
          className={`${martianMono.className} font-bold text-7xl text-neutral-400`}
          style={{ wordSpacing: "-2.5rem" }}
        >
          Skill Up. Stand Out.{" "}
        </h2>
        <h2
          className={`${martianMono.className} font-bold text-8xl text-neutral-400`}
          style={{ wordSpacing: "-3.5rem" }}
        >
          Succeed<AnimatedGradientText>.</AnimatedGradientText>
        </h2>
        <p className="text-neutral-500 absolute bottom-2 text-xs">
          Explore all the Courses that we offer. Click on View Details to get
          overview of the Course.
        </p>
      </div>
      <SquishyCard />

      <Compaines />
      <div className="max-w-7xl">
        <Reviews />
        <FAQs />
      </div>
    </div>
  );
}

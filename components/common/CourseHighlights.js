"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { hostGrotesk, martianMono } from "@/app/fonts";

const CourseHighlights = () => {
  const benefits = [
    {
      id: 1,
      title: "Weekly Job Alerts",
      
    },
    {
      id: 2,
      title: "Interaction With Real-time Employees",
      
    },
    {
      id: 3,
      title: "Mini Projects + Capstone Project",
      
    },
    {
      id: 4,
      title: "Live Access for One Year",
      
    },
    {
      id: 5,
      title: "1:1 Mentorship",
    },
    {
      id: 6,
      title: "Completion Certificate + Internship Certificate",
     
    },
    {
      id: 7,
      title: "Afforablitiy & Finanical-Aid Support",
      
    },
    {
      id: 8,
      title: "Resume Preparation & Career Guidance",
     
    },
    {
      id: 9,
      title: "Limited Seats Per Batch",
     
    },
  ];

  return (
    <section
      className={`  py-12 sm:py-16 ${martianMono.className}`}
    >
      <div className="h-full lg:min-w-7xl mx-auto flex flex-col items-center justify-center text-neutral-200">
        <div className="h-full w-full  sm:p-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`${
                index === 8 ? "" : "border-b border-neutral-600"
              } w-full flex items-start gap-4 sm:gap-6 md:gap-10 p-2 py-4 sm:py-6`}
              style={{ willChange: "auto" }}
            >
              <p
                className={`${martianMono.className} text-2xl sm:text-4xl md:text-5xl text-neutral-500 font-bold`}
              >
                0{index + 1}
              </p>
              <div className="flex flex-col gap-2 sm:gap-3">
                <h2
                  className={`${hostGrotesk.className} text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-neutral-500 font-bold tracking-wide`}
                >
                  {benefit.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseHighlights;

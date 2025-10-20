"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { hostGrotesk, martianMono } from "@/app/fonts";

const CourseHighlights = () => {
  const benefits = [
    {
      id: 1,
      title: "Live One-on-One Interactions",
      description:
        "Personalized mentoring sessions with industry experts for focused learning and career guidance.",
      logo: "👥",
    },
    {
      id: 2,
      title: "Weekly Real-time Employees Meetup",
      description:
        "Connect with current industry professionals and get insights into real-world challenges.",
      logo: "💼",
    },
    {
      id: 3,
      title: "Mini Projects + Quizzes",
      description:
        "Hands-on learning through practical projects and regular assessments to track progress.",
      logo: "📚",
    },
    {
      id: 4,
      title: "Coding Exercises",
      description:
        "Daily coding challenges and exercises to strengthen your programming skills.",
      logo: "💻",
    },
    {
      id: 5,
      title: "One Year Live Access",
      description:
        "Extended access to all course materials and live sessions for continuous learning.",
      logo: "⏰",
    },
    {
      id: 6,
      title: "Completion Certificate",
      description:
        "Industry-recognized certificate upon successful completion of the course program.",
      logo: "🏆",
    },
    {
      id: 7,
      title: "Capstone Project",
      description:
        "Build a comprehensive final project that showcases your skills to potential employers.",
      logo: "🚀",
    },
    {
      id: 8,
      title: "Resume Preparation & Career Guidance",
      description:
        "Professional resume building and career counseling to help you land your dream job.",
      logo: "📝",
    },
  ];

  return (
    <section
      className={`min-h-screen w-full py-16 px-4 ${martianMono.className}`}
    >
      <div className="h-full min-w-7xl mx-auto flex flex-col items-center justify-center text-neutral-200">
        <div className="h-full w-full p-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`${
                index === 7 ? "" : "border-b border-neutral-600"
              } w-full flex items-center gap-10 p-2 py-6`}
              style={{ willChange: "auto" }}
            >
              <p
                className={`${hostGrotesk.className} text-5xl text-neutral-500 font-bold`}
              >
                0{index + 1}
              </p>
              <div className="flex flex-col gap-3">
                <h2
                  className={`${hostGrotesk.className} text-6xl text-neutral-500 font-bold tracking-wide`}
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

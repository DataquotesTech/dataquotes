"use client";

import { hostGrotesk, martianMono } from "@/app/fonts";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FAQs from "./FAQs";
import { RainbowButton } from "../Ui/rainbow-button";
import { ProfessionalIcons } from "./ProfessionalIcons";
import Reviews from "./Reviews";
import Compaines from "./Compaines";
import PhotoCard from "../common/PhotoCard";
import AnimatedText from "./AnimatedText";
import { AnimatedGradientText } from "../Ui/animated-gradient-text";

const CourseTemplate = ({
  title,
  description,
  tagline,
  duration,
  level,
  image,
  skills,
  syllabus,
  features,
  benefits,
  prerequisites,
  outcomes,
  schedule,
  support,
}) => {
  const [openSyllabus, setOpenSyllabus] = useState([]);

  const toggleSyllabus = (index) => {
    setOpenSyllabus((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div
      className={`${martianMono.className} min-h-screen w-full bg-black px-2`}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center  pt-30 lg:pt-5">
        <div className="flex flex-col lg:flex-row items-center gap-5 sm:gap-8 p-2 sm:p-6 md:p-10 w-full">
          <div className="text-white flex flex-col h-full justify-between w-full lg:w-7/12">
            <div className="flex flex-col gap-0">
              <h1
                className={`text-5xl lg:text-[6.7vw] font-semibold text-neutral-200 mb-4 sm:mb-6 ${martianMono.className}`}
              >
                {title}
              </h1>
              <p
                className={`text-sm sm:text-base text-neutral-500 mb-3  max-w-2xl ${hostGrotesk.className}`}
              >
                {description}
              </p>
              <div className="   flex items-center text-neutral-400 gap-2 sm:gap-4  text-xs mb-10">
                  <span className="text-xs">Duration:</span>
                  <p className="text-xs sm:text-sm">{duration}</p>
                </div>

              
              {/* What You Will Learn Section */}
              {skills && (
                <div className="mb-6 sm:mb-8">
                  <h3
                    className={`text-xl sm:text-2xl font-bold text-neutral-400 mb-3 sm:mb-4 ${hostGrotesk.className}`}
                  >
                    What You Will Learn
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-neutral-800/70 px-2 sm:px-3 py-1 rounded text-xs text-neutral-300 border border-neutral-800/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full items-center text-lg sm:text-xl">
              <Link
                href="#syllabus"
                className="text-neutral-300 border border-neutral-800/80 px-4 sm:px-5 py-2 sm:py-2.5 rounded bg-neutral-950 hover:bg-blue-500/10 hover:scale-102 text-center w-full sm:w-auto"
                prefetch={true}
              >
                View Syllabus
              </Link>
              <a
                href="#contact"
                className="text-neutral-900 bg-white/80 px-6 sm:px-8 py-2 sm:py-2.5 rounded hover:bg-neutral-500 hover:scale-102 text-center w-full sm:w-auto"
              >
                Reach Out
              </a>
            </div>
          </div>

          <div className="relative w-full lg:w-6/12 h-full">
            {image && (
              <Image
                src={image}
                alt={title}
                width={600}
                height={500}
                className="rounded-lg w-full h-80 sm:h-96 md:h-120 object-cover border-2 border-neutral-800"
              />
            )}
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      {tagline && (
        <section className="pb-8 px-4 h-150 flex items-center justify-center">
          <div className="max-w-7xl mx-auto text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <AnimatedText
              text={tagline}
              className={`text-neutral-200/90 italic ${hostGrotesk.className}`}
            />
          </div>
        </section>
      )}

      {/* Syllabus Section */}
      {syllabus && (
        <section className="py-12 sm:py-16 px-1" id="syllabus">
          <div className="max-w-7xl mx-auto">
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white/70 text-center mb-8 sm:mb-12 ${martianMono.className}`}
            >
              Course Syllabus
            </h2>

            <div className="space-y-0">
              {syllabus.map((subject, subjectIndex) => (
                <div
                  key={subjectIndex}
                  className="border-b border-neutral-800/90"
                >
                  <button
                    onClick={() => toggleSyllabus(subjectIndex)}
                    className="w-full px-1 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center hover:bg-neutral-800/60 transition-colors duration-200 rounded"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div
                        className={`w-9 h-10 sm:w-10 sm:h-12 rounded-lg flex items-center justify-center ${
                          subject.type === "project"
                            ? "bg-green-500/20"
                            : "bg-blue-500/20"
                        }`}
                      >
                        <span
                          className={`text-xl sm:text-2xl ${
                            subject.type === "project"
                              ? "text-green-400"
                              : "text-blue-400"
                          }`}
                        >
                          {ProfessionalIcons[subject.icon] || subject.icon}
                        </span>
                      </div>
                      <h3
                        className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-neutral-300/80 ${hostGrotesk.className}`}
                      >
                        {subject.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm text-neutral-400">
                        Expand
                      </span>
                      <div
                        className={`text-white transition-transform duration-200 ${
                          openSyllabus.includes(subjectIndex)
                            ? "rotate-180"
                            : "rotate-0"
                        }`}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>

                  {openSyllabus.includes(subjectIndex) && (
                    <div className="px-4 sm:px-6 pb-3 sm:pb-4 pt-2">
                      {subject.subtopics ? (
                        <div className="space-y-3 sm:space-y-4">
                          {subject.subtopics.map((subtopic, subtopicIndex) => (
                            <div
                              key={subtopicIndex}
                              className="bg-neutral-800/30 rounded-lg p-3 sm:p-4"
                            >
                              <h4
                                className={`text-base sm:text-lg font-semibold text-neutral-300/80 mb-2 sm:mb-3 ${martianMono.className}`}
                              >
                                {subtopic.title}
                              </h4>
                              <div className="grid grid-cols-1">
                                {subtopic.topics.map((topic, topicIndex) => (
                                  <div
                                    key={topicIndex}
                                    className="flex items-center text-neutral-400 p-1 rounded"
                                  >
                                    <span
                                      className={`text-sm sm:text-md ${hostGrotesk.className}`}
                                    >
                                      {topic}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="grid grid-cols-1">
                          {subject.topics.map((topic, topicIndex) => (
                            <div
                              key={topicIndex}
                              className="flex items-center text-neutral-400 p-1"
                            >
                              <span
                                className={`text-sm sm:text-md ${hostGrotesk.className}`}
                              >
                                {topic}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Highlights / Benefits Section rendered as PhotoCards */}
      {benefits && benefits.length > 0 && (
        <section className="py-10">
          <div className="lg:w-11/12 mx-auto">
            {benefits.map((benefit, index) => (
              <PhotoCard
                key={`${benefit.title}-${index}`}
                title={benefit.title}
                description={benefit.description}
                image={benefit.image || "/peter.jpg"}
                position={index % 2 === 0 ? "left" : "right"}
                border={index !== benefits.length - 1 ? "ok" : "no"}
              />
            ))}
          </div>
        </section>
      )}
      {/* Certification Section */}
      <section className="py-12 sm:py-16 px-4 min-h-screen flex items-center justify-center pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center">
          <div className="flex flex-col gap-6 sm:gap-10 justify-between">
            <div className="flex flex-col md:gap-4">
              <h2
                className={` sm:text-3xl font-extrabold mb-4 sm:mb-6 text-neutral-400 ${hostGrotesk.className}`}
              >
                Level Up with Completion certificate +
              </h2>
              <h2
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-pink-500 via-orange-400 to-red-500 bg-clip-text text-transparent ${hostGrotesk.className}`}
              >
                <AnimatedGradientText>
                  Internship Certification{" "}
                </AnimatedGradientText>
              </h2>
            </div>
            <div className="space-y-6 sm:space-y-8">
              <div className="flex gap-3 sm:gap-4 items-start">
                <span className="w-1 h-4 sm:h-6 bg-yellow-400 mt-1 rounded-sm" />
                <div>
                  <p className="uppercase tracking-wide text-xs sm:text-sm text-neutral-400">
                    Start today
                  </p>
                  <p
                    className={`text-neutral-300 mt-1 text-sm sm:text-base ${hostGrotesk.className} tracking-wide`}
                  >
                    Just months from now, your life could look completely
                    different.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4 items-start">
                <span className="w-1 h-4 sm:h-6 bg-yellow-400 mt-1 rounded-sm" />
                <div>
                  <p className="uppercase tracking-wide text-xs sm:text-sm text-neutral-400">
                    Believe in yourself
                  </p>
                  <p
                    className={`text-neutral-300 mt-1 text-sm sm:text-base ${hostGrotesk.className} tracking-wide`}
                  >
                    Consistency and the right guidance can take you from
                    beginner to placement ready.
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                className="inline-flex w-fit items-center justify-center rounded-md bg-neutral-300 px-4 sm:px-6 py-2 sm:py-3 text-black font-semibold hover:bg-neutral-100 transition-colors hover:scale-102 text-sm sm:text-base"
              >
                Reach Out
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full">
              <Image
                src="/certficate.png"
                alt="Course certificate preview"
                width={1000}
                height={700}
                className="rounded-xl border border-neutral-800 shadow-2xl w-full h-auto"
                priority={false}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="w-full flex items-center justify-center">
        <div className=" w-full xl:w-7xl flex flex-col items-center justify-center">
          <Reviews />
          <Compaines />
        </div>
      </div>

      {/* FAQs Section */}
      <FAQs />

      {/* CTA Section */}
    </div>
  );
};

export default CourseTemplate;

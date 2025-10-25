"use client";

import { hostGrotesk, martianMono } from "../fonts";
import { AnimatedGradientText } from "@/components/Ui/animated-gradient-text";
import AnimatedText from "@/components/common/AnimatedText";
import PhotoCard from "@/components/common/PhotoCard";
import Compaines from "@/components/common/Compaines";
import Reviews from "@/components/common/Reviews";
import { ProfessionalIcons } from "@/components/common/ProfessionalIcons";
import Link from "next/link";
import { ShinyButton } from "@/components/Ui/shiny-button";

export default function About() {
  return (
    <div className={`${martianMono.className} min-h-screen w-full bg-black`}>
      {/* Hero */}
      <section className="min-h-[70vh] w-full flex items-center justify-center px-2 sm:px-6">
        <div className="max-w-6xl w-full text-center flex flex-col items-center gap-3 sm:gap-4 h-screen justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold">
            <AnimatedGradientText>Why DataQuotes?</AnimatedGradientText>
          </h1>
          <p className={`${hostGrotesk.className} text-neutral-400 text-sm md:text-lg`}>
          We teach you what the company demands with mentorship, projects and relentless support.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-3 sm:gap-5 text-lg sm:text-xl items-center justify-center">
            <Link
              href="/edtech/courses"
              className="bg-neutral-900 p-2 sm:p-3 rounded text-neutral-300 border border-neutral-800 hover:scale-102 hover:bg-neutral-800 transition-all duration-300 text-center text-sm md:text-lg"
            >
              <span className="text-blue-700">*</span> Explore Courses
            </Link>
            <a
              href="#contact"
              className="inline-block bg-white/60 text-black px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-white transition hover:scale-102 duration-300 text-center text-sm md:text-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Story / Mission */}
      <section className="w-full py-12">
        <div className=" mx-auto">
          <PhotoCard
            position="left"
            title="Our Mission"
            description="Enable beginners to become job‑ready through structured learning, mini‑projects, and capstones guided by real industry mentors."
            image="/vision.webp"
            border="ok"
          />
          <PhotoCard
            position="right"
            title="Our Approach"
            description="Practical first. Every concept is paired with exercises, quizzes, and real use‑cases so that knowledge converts into demonstrable skill."
            image="/mission.webp"
            border="ok"
          />
          <PhotoCard
            position="left"
            title="Outcome Focused"
            description="From resume reviews to interview practice and portfolio building, we align everything to help you land meaningful roles."
            image="/core-vaules.png"
            border="no"
          />
        </div>
      </section>

      {/* Values */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 ${martianMono.className}`}
            >
              What sets us apart
            </h2>
            <p className={`text-neutral-400 text-base sm:text-lg ${hostGrotesk.className} max-w-2xl mx-auto`}>
              Three pillars that define our approach to education
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="group bg-neutral-900/30 border border-neutral-800/50 rounded-2xl p-6 sm:p-8 hover:bg-neutral-900/50 transition-all duration-300 hover:border-neutral-700/50">
              <div className="mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                <div className="inline-block transform scale-125 sm:scale-150 text-neutral-300">
                  {ProfessionalIcons.tools}
                </div>
              </div>
              <h3
                className={`${martianMono.className} text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 tracking-wide`}
              >
                Mentor‑led learning
              </h3>
              <p
                className={`text-neutral-300 leading-relaxed text-sm sm:text-base ${hostGrotesk.className}`}
              >
                One‑on‑one interactions, live meetups with employees, and
                constant feedback from industry professionals.
              </p>
            </div>
            <div className="group bg-neutral-900/30 border border-neutral-800/50 rounded-2xl p-6 sm:p-8 hover:bg-neutral-900/50 transition-all duration-300 hover:border-neutral-700/50">
              <div className="mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                <div className="inline-block transform scale-125 sm:scale-150 text-neutral-300">
                  {ProfessionalIcons.miniProject}
                </div>
              </div>
              <h3
                className={`${martianMono.className} text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 tracking-wide`}
              >
                Projects over theory
              </h3>
              <p
                className={`text-neutral-300 leading-relaxed text-sm sm:text-base ${hostGrotesk.className}`}
              >
                Mini projects, quizzes, coding exercises and a capstone to
                showcase your skills in real-world scenarios.
              </p>
            </div>
            <div className="group bg-neutral-900/30 border border-neutral-800/50 rounded-2xl p-6 sm:p-8 hover:bg-neutral-900/50 transition-all duration-300 hover:border-neutral-700/50 sm:col-span-2 lg:col-span-1">
              <div className="mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                <div className="inline-block transform scale-125 sm:scale-150 text-neutral-300">
                  {ProfessionalIcons.business}
                </div>
              </div>
              <h3
                className={`${martianMono.className} text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 tracking-wide`}
              >
                Career support
              </h3>
              <p
                className={`text-neutral-300 leading-relaxed text-sm sm:text-base ${hostGrotesk.className}`}
              >
                Resume preparation, career guidance and interview practice until
                you&apos;re ready to land your dream job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <div className="w-full flex items-center justify-center">
        <section className="py-8 pt-15 w-full md:w-7xl">
          <Compaines />
          <Reviews />
        </section>
      </div>
    </div>
  );
}

"use client";
import { ShinyButton } from "@/components/Ui/shiny-button";
import { charmonman, hostGrotesk, martianMono } from "@/app/fonts";
import { AnimatedGradientText } from "@/components/Ui/animated-gradient-text";
import { motion } from "motion/react";
import PhotoCard from "@/components/common/PhotoCard";
import { memo } from "react";

import AnimatedText from "@/components/common/AnimatedText";
import CourseHighlights from "@/components/common/CourseHighlights";
import Compaines from "@/components/common/Compaines";
import Reviews from "@/components/common/Reviews";
import Link from "next/link";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

import { RiMailUnreadFill } from "react-icons/ri";
import SquishyCard from "@/components/common/CoursesCard";

const HomePage = memo(function HomePage() {
  return (
    <div>
      <div
        className={`${martianMono.className} min-h-screen w-full relative overflow-hidden backdrop-blur-3xl homepage-bg`}
      >
        {/* Hero Section */}
        <div className="pb-16 sm:px-6">
          <div className="md:h-screen min-h-190 w-full flex flex-col relative justify-center items-center text-neutral-300 tracking-tight gap-3 sm:gap-5 px-4">
            <motion.div
              className="flex items-center justify-center flex-col text-2xl sm:text-4xl md:text-5xl lg:text-6xl "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
              style={{ willChange: "transform, opacity" }}
            >
              <motion.h1
                className="tracking-tight h-12 sm:h-14 md:h-16 text-center hero-line-1 relative top-3 md:top-1 lg:top-0"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.1,
                  ease: "easeOut",
                }}
              >
                We teach &nbsp;
                <motion.span
                  className={`${charmonman.className} relative bottom-2 sm:bottom-3 md:bottom-4`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.3,
                    ease: "easeOut",
                  }}
                >
                  you
                </motion.span>{" "}
                &nbsp;what
              </motion.h1>
              <motion.h1
                className="tracking-tight h-12 sm:h-14 md:h-16 text-center hero-line-2 "
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.2,
                  ease: "easeOut",
                }}
              >
                the <AnimatedGradientText>Company</AnimatedGradientText> demands
              </motion.h1>
              <motion.h1
                className="tracking-tight h-12 sm:h-14 md:h-16 text-center hero-line-3 relative bottom-3 md:bottom-1 lg:bottom-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.3,
                  ease: "easeOut",
                }}
              >
                for-Nothing less{" "}
                <span className=" relative right-2 sm:right-4 md:right-6">
                  .
                </span>
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.5,
                ease: "easeOut",
              }}
            >
              <Link href="/edtech/courses" prefetch={true} className="hidden md:block">
                <ShinyButton>
                  <span className="text-blue-700 font-bold ">*</span> Explore
                  Courses
                </ShinyButton>
              </Link>
              <Link href="/edtech/courses" prefetch={true} className=" md:hidden">
                <button className={`${hostGrotesk.className} text-sm bg-neutral-300/70 px-2 py-1.5 rounded text-black hover:scale-105`}>Explore Courses</button>
              </Link>
            </motion.div>

            <div
              className={`absolute h-32 w-64 sm:h-36 sm:w-72 md:h-40 md:w-80 right-2 sm:right-4 bottom-4 flex-col gap-1 hidden xl:flex`}
            >
              <h3 className=" w-full text-center py-1 bg-neutral-900/80 border-2 border-neutral-800/40 rounded-t-lg text-lg sm:text-xl gap-2">
                Shout-Out<span className="text-red-500">.</span>
              </h3>
              <p
                className={`text-xs sm:text-sm p-2 bg-neutral-900/30 border-2 border-neutral-800/40 rounded-b-lg text-neutral-500 ${hostGrotesk.className}`}
              >
                Each course is built in collabration which the industry experts
                to match current job market. Weekly current working employees
                meetup is provided.
              </p>
            </div>
            <div className="absolute h-16 w-32 sm:h-20 sm:w-40 left-1 bottom-1 text-2xl sm:text-3xl tracking-wider hidden lg:flex items-center justify-center gap-2 sm:gap-3">
              <a
                href="mailto:info@dataQuotes.net"
                className="relative  text-white/60 hover:text-white transition-colors duration-200 "
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiMailUnreadFill />
              </a>
              <a
                href="https://www.instagram.com/dq_edtech?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="relative  text-white/60 hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareInstagram />
              </a>
              <a
                href="https://in.linkedin.com/company/dqedutech"
                className="relative  text-white/60 hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoLinkedin />
              </a>
            </div>
          </div>
          <div className="min-h-screen w-full">
            <PhotoCard
              position="left"
              title="VISION"
              description="Smart Growth, Smarter Future
We help businesses grow through tech-driven strategies that are scalable and sustainable."
              image="/vision.webp"
              border="ok"
            />
            <PhotoCard
              position="right"
              title="MISSION"
              description="Simplifying Success
Our mission is to make business growth simple with the right mix of tech, design, and automation."
              image="/mission.webp"
              border="ok"
            />
            <PhotoCard
              position="left"
              title="CORE VALUES"
              description="Integrity, Excellence, Innovation, Collaboration, and Customer Focus. These are the values that guide our work and our relationships with our clients and partners. "
              image="/core-vaules.png"
              border="no"
            />
          </div>
          <div
            className="min-h-screen w-full bg-transparent flex flex-col items-center justify-center text-neutral-300 px-4 py-26"
            style={{ background: "transparent" }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mb-4 ">
              Courses Offered{" "}
            </h1>
            <p
              className={`text-center mb-6 sm:mb-8 text-sm sm:text-md text-neutral-400 ${hostGrotesk.className} max-w-2xl`}
            >
              Explore our comprehensive course offerings and enhance your
              skills.
            </p>
            <SquishyCard />
          </div>
        </div>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4 ">
        <div
          className={`flex flex-col max-w-6xl text-white text-center  sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl gap-4 sm:gap-6 py-6 pb-45`}
        >
          <AnimatedText
            text='"At DataQuotes, we help your business grow. Whether you’re a startup or an established brand, we make tech simple, guide your strategy, and help you move ahead with confidence. Choose us for a team that truly cares about your success."'
            className={`${hostGrotesk.className} text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl`}
          />
          <div className="w-full flex justify-end">
            <div className="flex flex-col">
              <h2
                className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl ${hostGrotesk.className}`}
              >
                - Harshad Basha
              </h2>
              <h3 className={`${hostGrotesk.className} text-xs sm:text-sm`}>
                {" "}
                ( ceo & founder of DataQuotes. )
              </h3>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col items-center justify-center ${martianMono.className} `}
        >
          <h1 className="text-neutral-300/70 font-bold text-2xl sm:text-3xl md:text-4xl text-center ">
            <AnimatedGradientText>Course Benifits</AnimatedGradientText>
          </h1>
          <CourseHighlights />
        </div>
        <div>
          <Compaines />
        </div>
        <div className="w-screen lg:w-6xl">
          <Reviews />
        </div>
      </div>
    </div>
  );
});

export default HomePage;

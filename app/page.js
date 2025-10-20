"use client";
import { ShinyButton } from "@/components/Ui/shiny-button";
import { charmonman, hostGrotesk, martianMono } from "./layout";
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
import { IoMail } from "react-icons/io5";
import { RiMailUnreadFill } from "react-icons/ri";
import SquishyCard from "@/components/common/CoursesCard";

const Home = memo(function Home() {
  return (
    <div>
      <div
        className={`${martianMono.className} min-h-screen w-full relative overflow-hidden backdrop-blur-3xl`}
        style={{
          background: `
          radial-gradient(circle at 30% 30%, rgba(23, 40, 80, 0.6) 0%, transparent 30%),
          radial-gradient(circle at 70% 70%, rgba(20, 50, 90, 0.15) 0%, transparent 40%),
          radial-gradient(circle at 50% 20%, rgba(18, 30, 60, 0.1) 0%, transparent 30%),
          linear-gradient(to bottom, #000000 0%, #0a0a0a 20%, #111111 60%, #000000 100%)
        `,
        }}
      >
        {/* Hero Section */}
        <div className="pb-16 sm:px-6">
          <div className="h-screen w-full flex flex-col relative justify-center items-center text-neutral-300 tracking-tight gap-5 px-4">
            <motion.div
              className="flex items-center justify-center flex-col text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
              style={{ willChange: "transform, opacity" }}
            >
              <motion.h1
                className="tracking-tight h-16"
                style={{ wordSpacing: "-1.7rem" }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.1,
                  ease: "easeOut",
                }}
              >
                We teach &nbsp;
                <motion.span
                  className={`${charmonman.className} relative bottom-4`}
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
                className="h-16"
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
                className="tracking-tight h-16"
                style={{ wordSpacing: "-1.7rem" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.3,
                  ease: "easeOut",
                }}
              >
                for-Nothing less.
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
              <Link href="/edtech/courses" prefetch={true}>
                <ShinyButton>
                  <span className="text-blue-700 font-bold ">*</span> Explore
                  Courses
                </ShinyButton>
              </Link>
            </motion.div>

            <div
              className={`absolute h-40 w-80 right-4 bottom-4 flex-col gap-1 hidden md:flex`}
            >
              <h3 className=" w-full text-center py-1 bg-neutral-900/80 border-2 border-neutral-800/40 rounded-t-lg text-xl gap-2">
                Shout-Out<span className="text-red-500">.</span>
              </h3>
              <p
                className={`text-sm p-2 bg-neutral-900/30 border-2 border-neutral-800/40 rounded-b-lg text-neutral-500 ${hostGrotesk.className}`}
              >
                Each course is built in collabration which the industry experts
                to match current job market. Weekly current working employees
                meetup is provided.
              </p>
            </div>
            <div className="absolute h-20 w-40 left-1 bottom-1 text-3xl tracking-wider hidden md:flex items-center justify-center gap-3">
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
              description="Our vision is to be a leading provider of education and training solutions, empowering professionals to achieve their career goals and excel in their fields."
              image="/peter.jpg"
              border="ok"
            />
            <PhotoCard
              position="right"
              title="MISSION"
              description="We empower professionals with the skills and confidence to excel in their careers. Our courses are designed to bridge the gap between education and industry needs, ensuring you are job-ready and market-competitive."
              image="/peter.jpg"
              border="ok"
            />
            <PhotoCard
              position="left"
              title="CORE VALUES"
              description="Integrity, Excellence, Innovation, Collaboration, and Customer Focus. These are the values that guide our work and our relationships with our clients and partners. "
              image="/peter.jpg"
              border="no"
            />
          </div>
          <div
            className="min-h-screen w-full bg-transparent flex flex-col items-center justify-center text-neutral-300"
            style={{ background: "transparent" }}
          >
            <h1 className="text-4xl text-center mb-4">Courses Offered </h1>
            <p
              className={`text-center mb-8 text-md text-neutral-400 ${hostGrotesk.className}`}
            >
              Explore our comprehensive course offerings and enhance your
              skills.
            </p>
            <SquishyCard />
          </div>
        </div>
      </div>
      <div className="min-h-screen  flex flex-col items-center justify-center bg-black">
        <div
          className={`flex flex-col max-w-6xl text-white text-center text-6xl  gap-6 py-6 pb-25`}
        >
          <AnimatedText
            text='"Lorem Est, enim reiciendis iure non commodi suscipit possimus libero odio doloremque consequatur quibusdam cumque excepturi fuga recusandae hic neque sit quisquam eius?"'
            className={`${hostGrotesk.className} text-6xl`}
          />
          <div className="w-full flex justify-end">
            <div className="flex flex-col">
              <h2 className={`text-4xl ${hostGrotesk.className}`}>
                - Harshad Basha
              </h2>
              <h3 className={`${hostGrotesk.className} text-sm`}>
                {" "}
                ( ceo & founder of DataQuotes. )
              </h3>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col items-center justify-center ${martianMono.className}`}
        >
          <h1 className="text-red-500/40 font-bold text-2xl">
            Course Benifits
          </h1>
          <CourseHighlights />
        </div>
        <div>
          <Compaines />
        </div>
        <div>
          <Reviews />
        </div>
      </div>
    </div>
  );
});

export default Home;

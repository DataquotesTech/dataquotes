"use client";

import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaSquareInstagram } from "react-icons/fa6";
import { hostGrotesk, martianMono } from "../../app/fonts";
import ContactPage from "../common/Contact";
import { IoLogoLinkedin } from "react-icons/io5";

export default function Footer() {
  return (
    <div className="h-165 lg:h-115 relative flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 w-full h-full bg-[#000000]">
        <div className="absolute inset-0 bg-[radial-gradient(175%_150%_at_50%_10%,rgba(255,255,255,0)_40%,rgba(10,51,238,0.6)_100%)] opacity-90">
          <div className="relative h-full w-full px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 flex flex-col  lg:gap-6  items-center justify-center">
            <div className="bg-black/45 backdrop-blur-3xl rounded-2xl sm:rounded-3xl md:rounded-4xl border-2 border-neutral-900 flex flex-col gap-2 sm:gap-4 items-center justify-center text-neutral-200 w-full">
              <div
                className={`flex flex-col lg:flex-row w-full min-h-4/5 ${martianMono.className} px-4 sm:px-6 md:px-8 lg:px-17 py-4 sm:py-5 gap-6 sm:gap-8`}
              >
                <div
                  className={`h-full w-full lg:w-2/5 ${hostGrotesk.className} mb-6 lg:mb-0`}
                >
                  <h2
                    className={`${martianMono.className} text-2xl sm:text-3xl md:text-4xl text-neutral-400 pb-2 sm:pb-3`}
                  >
                    DataQuotes
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base max-w-full lg:max-w-2/3 text-neutral-500 mb-4 sm:mb-6">
                    Learn what matters to get hired. We train you what the
                    company demands - Nothing less.
                  </p>
                  <div className="text-neutral-400 py-4 sm:py-6 md:py-8 lg:py-10 flex flex-col gap-2 sm:gap-3">
                    <p className="flex items-center justify-start gap-2 text-sm sm:text-base">
                      <FaPhoneAlt className="text-sm sm:text-base" />
                      +91 81428 21020
                    </p>
                    <p className="flex items-center justify-start gap-2 text-sm sm:text-base">
                      <MdEmail className="text-sm sm:text-base" />
                      info@dataquotes.net
                    </p>
                  </div>
                </div>
                <div
                  className={`h-full w-full sm:w-1/2 lg:w-1/5 hidden lg:flex flex-col items-start justify-start gap-3 sm:gap-4 ${hostGrotesk.className} mb-6 lg:mb-0`}
                >
                  <h3
                    className={`${martianMono.className} text-lg sm:text-xl text-neutral-400 pb-2`}
                  >
                    Services
                  </h3>
                  <div className="flex flex-col items-start justify-center gap-2 sm:gap-3">
                    <Link
                      href="/"
                      className="relative text-xs sm:text-sm text-white/60 hover:text-white transition-colors duration-200 group"
                      prefetch={true}
                    >
                      DataQuotes EduTech
                      <span className="absolute bottom-0 left-0 w-0 h-[0.3px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link
                      href="/it-services"
                      className="relative text-xs sm:text-sm text-white/60 hover:text-white transition-colors duration-200 group"
                      prefetch={true}
                    >
                      DataQuotes IT-Services
                      <span className="absolute bottom-0 left-0 w-0 h-[0.3px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link
                      href="/dq-kids"
                      className="relative text-xs sm:text-sm text-white/60 hover:text-white transition-colors duration-200 group"
                      prefetch={true}
                    >
                      DQ Kids
                      <span className="absolute bottom-0 left-0 w-0 h-[0.3px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </div>
                </div>

                <div
                  className={`h-full w-full sm:w-1/2 lg:w-1/5 hidden lg:flex flex-col items-start justify-start gap-3 sm:gap-4 ${hostGrotesk.className} mb-6 lg:mb-0`}
                >
                  <h3
                    className={`${martianMono.className} text-lg sm:text-xl text-neutral-400 pb-2`}
                  >
                    Quick Links
                  </h3>
                  <div className="flex flex-col items-start justify-center gap-2 sm:gap-3">
                    <Link
                      href="/"
                      className="relative text-xs sm:text-sm text-white/60 hover:text-white transition-colors duration-200 group"
                      prefetch={true}
                    >
                      Home
                      <span className="absolute bottom-0 left-0 w-0 h-[0.3px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link
                      href="/about"
                      className="relative text-xs sm:text-sm text-white/60 hover:text-white transition-colors duration-200 group"
                      prefetch={true}
                    >
                      About Us
                      <span className="absolute bottom-0 left-0 w-0 h-[0.3px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link
                      href="/edtech/courses"
                      className="relative text-xs sm:text-sm text-white/60 hover:text-white transition-colors duration-200 group"
                      prefetch={true}
                    >
                      Courses
                      <span className="absolute bottom-0 left-0 w-0 h-[0.3px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link
                      href="/it-services"
                      className="relative text-xs sm:text-sm text-white/60 hover:text-white transition-colors duration-200 group"
                      prefetch={true}
                    >
                      IT-Services
                      <span className="absolute bottom-0 left-0 w-0 h-[0.3px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </div>
                </div>
                <div
                  className={`h-full w-full lg:w-2/5 flex flex-col items-start justify-start gap-3 sm:gap-4 ${hostGrotesk.className}`}
                >
                  <h3
                    className={`${martianMono.className} text-lg sm:text-xl text-neutral-400`}
                  >
                    Locations
                  </h3>
                  <div className="flex flex-col items-start justify-start gap-2 sm:gap-3">
                    <h3 className="text-neutral-300 text-sm sm:text-base">
                      DataQuotes
                    </h3>
                    <p className="text-xs sm:text-sm flex items-start gap-2 justify-start text-neutral-400 leading-relaxed">
                      <span className="text-sm sm:text-base flex-shrink-0 mt-1">
                        <FaLocationDot />
                      </span>
                      3rd Floor, 14-40A, Vaikuntapuram Arch Rd, Dhanalakshmi
                      Nagar, Vk Puram, Tirupati, Andhra Pradesh 517502
                    </p>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-2 sm:gap-3 text-lg mt-2 sm:mt-4">
                    <a
                      href="https://www.instagram.com/dq_edtech?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      className="relative text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareInstagram className="text-sm sm:text-base" />
                      <span className="text-xs sm:text-sm">/dq_edtech</span>
                    </a>
                    <a
                      href="https://in.linkedin.com/company/dqedutech"
                      className="relative text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoLinkedin className="text-sm sm:text-base" />
                      <span className="text-xs sm:text-sm">/dqedutech</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 sm:px-6 md:px-8 lg:px-20 lg:pb-3">
                <div
                  className={`border-t-1 p-2 sm:p-3 flex flex-row items-center justify-between text-neutral-400 border-neutral-600 ${martianMono.className} text-xs sm:text-sm gap-2 sm:gap-0`}
                >
                  <h3>&copy;2025 DataQuotes</h3>
                  <h3 className="hidden lg:block">All Rights Reserved</h3>
                  <Link
                    href="/"
                    className="relative text-xs sm:text-sm text-white/80 hover:text-white transition-colors duration-200 group"
                    prefetch={true}
                  >
                    Terms & Conditions
                    <span className="absolute bottom-0 left-0 w-0 h-[0.3px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

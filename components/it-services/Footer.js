"use client";

import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaSquareInstagram } from "react-icons/fa6";
import { hostGrotesk, martianMono } from "../../app/fonts";
import ContactPage from "../common/Contact";
import { IoLogoLinkedin } from "react-icons/io5";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isITServices = pathname?.includes("/it-services");

  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-white border-t border-neutral-200">
      <div className="relative h-full max-w-7xl px-4 sm:px-6 md:px-8 py-10 sm:py-6 md:py-8 flex flex-col items-center justify-center">
        <div className="rounded-2xl sm:rounded-3xl md:rounded-4xl flex flex-col gap-2 sm:gap-4 items-center justify-center w-full">
          <div
            className={`flex flex-col lg:flex-row w-full min-h-4/5 ${martianMono.className} px-0 py-4 sm:py-5 gap-8 sm:gap-8`}
          >
            <div
              className={`h-full w-full lg:w-2/5 ${hostGrotesk.className} mb-6 lg:mb-0`}
            >
              <h2
                className={`${hostGrotesk.className} text-2xl sm:text-3xl md:text-4xl text-black pb-2 sm:pb-3 font-semibold`}
              >
                DataQuotes
              </h2>
              <p className="text-xs sm:text-sm md:text-base max-w-full lg:max-w-2/3 text-neutral-600 mb-4 sm:mb-6">
                {isITServices
                  ? "Transforming your business with cutting-edge IT solutions and digital innovation."
                  : "Learn what matters to get hired. We train you what the company demands - Nothing less."}
              </p>
              <div className="text-neutral-500 py-4 sm:py-6 md:py-8 lg:py-10 flex flex-col gap-2 sm:gap-3">
                <p className="flex items-center justify-start gap-2 text-sm sm:text-base">
                  <FaPhoneAlt className="text-sm sm:text-base" />
                  +91 81428 21020
                </p>
                <p className="flex items-center justify-start gap-2 text-sm sm:text-base">
                  <MdEmail className="text-sm sm:text-base" />
                  hello@dataquotes.net
                </p>
              </div>
            </div>
            <div
              className={`h-full w-full sm:w-1/2 lg:w-1/5 hidden lg:flex flex-col items-start justify-start gap-3 sm:gap-4 ${hostGrotesk.className} mb-6 lg:mb-0`}
            >
              <h3
                className={`${martianMono.className} text-lg sm:text-xl text-neutral-800 pb-2`}
              >
                Services
              </h3>
              <div className="flex flex-col items-start justify-center gap-2 sm:gap-3">
                <Link
                  href="/"
                  className="relative text-xs sm:text-sm text-neutral-500 hover:text-black transition-colors duration-200 group"
                  prefetch={true}
                >
                  DataQuotes EduTech
                  <span className="absolute bottom-0 left-0 w-0 h-[0.3px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/it-services"
                  className="relative text-xs sm:text-sm text-neutral-500 hover:text-black transition-colors duration-200 group"
                  prefetch={true}
                >
                  DataQuotes IT-Services
                  <span className="absolute bottom-0 left-0 w-0 h-[0.3px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/dq-kids"
                  className="relative text-xs sm:text-sm text-neutral-500 hover:text-black transition-colors duration-200 group"
                  prefetch={true}
                >
                  DQ Kids
                  <span className="absolute bottom-0 left-0 w-0 h-[0.3px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            </div>

            <div
              className={`h-full w-full sm:w-1/2 lg:w-1/5 hidden lg:flex flex-col items-start justify-start gap-3 sm:gap-4 ${hostGrotesk.className} mb-6 lg:mb-0`}
            >
              <h3
                className={`${martianMono.className} text-lg sm:text-xl text-neutral-800 pb-2`}
              >
                Quick Links
              </h3>
              <div className="flex flex-col items-start justify-center gap-2 sm:gap-3">
                <Link
                  href="/"
                  className="relative text-xs sm:text-sm text-neutral-500 hover:text-black transition-colors duration-200 group"
                  prefetch={true}
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-[0.3px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/about"
                  className="relative text-xs sm:text-sm text-neutral-500 hover:text-black transition-colors duration-200 group"
                  prefetch={true}
                >
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-[0.3px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/edtech/courses"
                  className="relative text-xs sm:text-sm text-neutral-500 hover:text-black transition-colors duration-200 group"
                  prefetch={true}
                >
                  Courses
                  <span className="absolute bottom-0 left-0 w-0 h-[0.3px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/it-services"
                  className="relative text-xs sm:text-sm text-neutral-500 hover:text-black transition-colors duration-200 group"
                  prefetch={true}
                >
                  IT-Services
                  <span className="absolute bottom-0 left-0 w-0 h-[0.3px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            </div>
            <div
              className={`h-full w-full lg:w-2/5 flex flex-col items-start justify-start gap-3 sm:gap-4 ${hostGrotesk.className}`}
            >
              <h3
                className={`${martianMono.className} text-lg sm:text-xl text-neutral-800`}
              >
                Locations
              </h3>
              <div className="flex flex-col items-start justify-start gap-2 sm:gap-3">
                <h3 className="text-neutral-700 text-sm sm:text-base">
                  DataQuotes
                </h3>
                <p className="text-xs sm:text-sm flex items-start gap-2 justify-start text-neutral-500 leading-relaxed">
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
                  className="relative text-neutral-500 hover:text-black transition-colors duration-200 flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareInstagram className="text-sm sm:text-base" />
                  <span className="text-xs sm:text-sm">/dq_edtech</span>
                </a>
                <a
                  href="https://www.instagram.com/dq_techglobal/"
                  className="relative text-neutral-500 hover:text-black transition-colors duration-200 flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareInstagram className="text-sm sm:text-base" />
                  <span className="text-xs sm:text-sm">/dq_techglobal</span>
                </a>
                <a
                  href="https://in.linkedin.com/company/dqedutech"
                  className="relative text-neutral-500 hover:text-black transition-colors duration-200 flex items-center gap-2"
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
              className={`border-t-1 p-2 sm:p-3 flex flex-row items-center justify-between text-neutral-500 border-neutral-200 ${martianMono.className} text-xs sm:text-sm gap-2 sm:gap-0`}
            >
              <h3>&copy;2026 DataQuotes</h3>
              <h3 className="hidden lg:block">All Rights Reserved</h3>
              <Link
                href="/"
                className="relative text-xs sm:text-sm text-neutral-500 hover:text-black transition-colors duration-200 group"
                prefetch={true}
              >
                Terms & Conditions
                <span className="absolute bottom-0 left-0 w-0 h-[0.3px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

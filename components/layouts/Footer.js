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
    <div className="h-100 relative flex items-center justify-center overflow-hidden">
      <div className="relative h-full w-full bg-[#000000]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(175%_150%_at_50%_10%,rgba(255,255,255,0)_40%,rgba(102,51,238,1)_100%)] ">
          <div className="px-10 py-2 h-full flex-col gap-8 items-center justify-center">
            <div className="bg-black/5 backdrop-blur-3xl rounded-4xl border-2 border-neutral-900 flex flex-col gap-2 items-center justify-center text-neutral-200 ">
              <div
                className={`flex w-full h-4/5 ${martianMono.className} px-17 py-5`}
              >
                <div className={`h-full w-2/5    ${hostGrotesk.className} `}>
                  <h2
                    className={`${martianMono.className} text-4xl text-neutral-400 pb-2`}
                  >
                    {" "}
                    DataQuotes
                  </h2>
                  <p className="text-xs max-w-2/3 text-neutral-500">
                    {" "}
                    Learn what matters to get hired. We train you what the
                    company demands - Nothing less.
                  </p>
                  <div className="text-neutral-400 py-10 flex flex-col gap-2">
                    <p className="flex items-center justify-start gap-2">
                      <FaPhoneAlt />
                      +91 78975 12765
                    </p>
                    <p className="flex items-center justify-start gap-2">
                      <MdEmail />
                      info@dataquotes.net
                    </p>
                  </div>
                </div>
                <div
                  className={`h-full w-1/5  flex flex-col items-start justify-start gap-4  ${hostGrotesk.className} `}
                >
                  <h3
                    className={`${martianMono.className} text-xl text-neutral-400 pb-2`}
                  >
                    {" "}
                    Services
                  </h3>
                  <div className="flex flex-col items-start justify-center gap-2">
                    <Link
                      href="/"
                      className="relative text-sm text-white/60 hover:text-white transition-colors duration-200 group"
                      prefetch={true}
                    >
                      DataQuotes EdTech
                      <span className="absolute bottom-0 left-0 w-0 h-[0.3px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link
                      href="/it-services"
                      className="relative text-sm text-white/60 hover:text-white transition-colors duration-200 group"
                      prefetch={true}
                    >
                      DataQuotes IT-Services
                      <span className="absolute bottom-0 left-0 w-0 h-[0.3px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link
                      href="/"
                      className="relative text-sm text-white/60 hover:text-white transition-colors duration-200 group"
                      prefetch={true}
                    >
                      Kids Academy (Soon)
                      <span className="absolute bottom-0 left-0 w-0 h-[0.3px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </div>
                </div>

                <div
                  className={`h-full w-1/5  flex flex-col items-start justify-start gap-4  ${hostGrotesk.className} `}
                >
                  <h3
                    className={`${martianMono.className} text-lg text-neutral-400 pb-2`}
                  >
                    {" "}
                    Quick Links
                  </h3>
                  <div className="flex flex-col items-start justify-center gap-2">
                    <Link
                      href="/"
                      className="relative text-sm text-white/60 hover:text-white transition-colors duration-200 group"
                      prefetch={true}
                    >
                      Home
                      <span className="absolute bottom-0 left-0 w-0 h-[0.3px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link
                      href="/about"
                      className="relative text-sm text-white/60 hover:text-white transition-colors duration-200 group"
                      prefetch={true}
                    >
                      About Us
                      <span className="absolute bottom-0 left-0 w-0 h-[0.3px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link
                      href="/edtech/courses"
                      className="relative text-sm text-white/60 hover:text-white transition-colors duration-200 group"
                      prefetch={true}
                    >
                      Courses
                      <span className="absolute bottom-0 left-0 w-0 h-[0.3px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link
                      href="/it-services"
                      className="relative text-sm text-white/60 hover:text-white transition-colors duration-200 group"
                      prefetch={true}
                    >
                      IT-Services
                      <span className="absolute bottom-0 left-0 w-0 h-[0.3px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </div>
                </div>
                <div
                  className={`h-full w-2/5  flex flex-col items-start justify-start gap-4  ${hostGrotesk.className} `}
                >
                  <h3
                    className={`${martianMono.className} text-lg text-neutral-400 `}
                  >
                    {" "}
                    Locations
                  </h3>
                  <div className="flex flex-col items-start justify-start gap-2">
                    <h3 className="text-neutral-300">
                      DataQuotes EdTech Pvt Ltd
                    </h3>
                    <p className="text-xs flex items-start gap-2 justify-start text-neutral-400">
                      <span className="text-md">
                        <FaLocationDot />
                      </span>
                      3rd Floor, 14-40A, Vaikuntapuram Arch Rd, Dhanalakshmi
                      Nagar, Vk Puram, Tirupati, Andhra Pradesh 517502
                    </p>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-2">
                    <h3 className="text-neutral-300">
                      DataQuotes EdTech Pvt Ltd
                    </h3>
                    <p className="text-xs flex items-start gap-2 justify-start text-neutral-400">
                      <span className="text-md">
                        <FaLocationDot />
                      </span>
                      2nd Floor, VSM Building, Destiny Tech Services, Renigunta
                      Rd, beside NEXA Showroom, Tirupati, Andhra Pradesh 517501
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-1/5 w-full px-20">
                <div
                  className={`border-t-1 p-2 flex items-center justify-between text-neutral-400 border-neutral-600 ${martianMono.className} text-sm`}
                >
                  <h3>&copy;2025 DataQuotes</h3>
                  <h3>All Rights Reserved</h3>
                  <Link
                    href="/"
                    className="relative text-sm text-white/80 hover:text-white transition-colors duration-200 group"
                    prefetch={true}
                  >
                    Terms & Conditions
                    <span className="absolute bottom-0 left-0 w-0 h-[0.3px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  <div className="flex gap-2 text-2xl">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

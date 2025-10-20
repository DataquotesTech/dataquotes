"use client";

import React from "react";
import Link from "next/link";
import { martianMono } from "../../app/layout";
import { RainbowButton } from "../Ui/rainbow-button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="bg-black/20 backdrop-blur-md ">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div
              className={`${martianMono.className} text-neutral-400 text-xl font-medium`}
            >
              <span className="text-red-500/40 tracking-wide font-bold text-[21.2px]">
                &lt;D
              </span>
              <span className="text-neutral-500">Q/&gt;</span> DataQuotes
            </div>
            <nav
              className={`hidden md:flex space-x-8 items-center justify-center  ${martianMono.className}`}
            >
              <Link
                href="/"
                className="relative text-sm text-white/80 hover:text-white transition-colors duration-200 group"
                prefetch={true}
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-[0.3px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/edtech/courses"
                className="relative text-sm text-white/80 hover:text-white transition-colors duration-200 group"
                prefetch={true}
                style={{ wordSpacing: "-0.3rem" }}
              >
                Courses
                <span className="absolute bottom-0 left-0 w-0 h-[0.3px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/about"
                className="relative text-sm text-white/80 hover:text-white transition-colors duration-200 group"
                prefetch={true}
                style={{ wordSpacing: "-0.3rem" }}
              >
                Why Us
                <span className="absolute bottom-0 left-0 w-0 h-[0.3px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <a href="#contact" className="text-neutral-900">
                <RainbowButton variant="outline">Contact Us</RainbowButton>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

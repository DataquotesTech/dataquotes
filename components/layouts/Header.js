"use client";

import React, { useState } from "react";
import Link from "next/link";
import { inter, martianMono } from "../../app/fonts";
import { RainbowButton } from "../Ui/rainbow-button";
import Image from "next/image";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { RiMailUnreadFill } from "react-icons/ri";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40">
        <div className="bg-black/20 backdrop-blur-md ">
          <div className=" mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between md:h-16 h-14">
              <div
                className={`${martianMono.className} text-neutral-400 md:text-2xl  font-medium flex items-center gap-2 md:gap-4 justify-center`}
              >
                <div className={`flex items-center justify-center tracking-tighter ${inter.className}`}>
                  <span className="text-red-500/70 tracking-wide font-bold  ">
                    &lt;D
                  </span>
                  <span className="text-neutral-400/70 font-semibold">
                    Q
                    <span className="text-red-500/70 font-bold ">
                      /&gt;
                    </span>
                  </span>
                </div>
                <span className={`${inter.className} font-semibold`}>
                  DataQuotes
                  {/* <Image
                    src="/dataquotes-logo.svg"
                    alt="logo"
                    width={140}
                    height={80}
                    className="h-7 w-21 "
                  /> */}
                </span>
              </div>

              {/* Desktop Navigation */}
              <nav
                className={`hidden md:flex space-x-8 items-center justify-center  ${martianMono.className}`}
              >
                <Link
                  href="/"
                  className="relative text-sm text-neutral-400 hover:text-white transition-colors duration-200 group"
                  prefetch={true}
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-[0.3px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/edtech/courses"
                  className="relative text-sm text-neutral-400 hover:text-white transition-colors duration-200 group"
                  prefetch={true}
                  style={{ wordSpacing: "-0.3rem" }}
                >
                  Courses
                  <span className="absolute bottom-0 left-0 w-0 h-[0.3px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/about"
                  className="relative text-sm text-neutral-400 hover:text-white transition-colors duration-200 group"
                  prefetch={true}
                  style={{ wordSpacing: "-0.3rem" }}
                >
                  Why Us
                  <span className="absolute bottom-0 left-0 w-0 h-[0.3px] bg-neutral-300 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <a href="#contact" className="text-neutral-900">
                  <RainbowButton variant="outline">Contact Us</RainbowButton>
                </a>
              </nav>

              {/* Mobile Hamburger Menu Button */}
              <button
                onClick={toggleMenu}
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
                aria-label="Toggle menu"
              >
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black transition-all duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Close Button - Fixed Position */}
        <button
          onClick={toggleMenu}
          className="fixed top-4 right-4 z-[60] flex flex-col justify-center items-center w-12 h-12 space-y-1.5 focus:outline-none bg-white/10 backdrop-blur-md rounded-full p-2"
          aria-label="Close menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        <div className="flex flex-col items-start justify-center h-full px-8 gap-8">
          <nav
            className={`${martianMono.className} flex flex-col gap-4`}
          >
            <Link
              href="/"
              onClick={closeMenu}
              className="text-4xl text-white hover:text-red-500/80 transition-colors duration-300 transform hover:scale-105"
            >
              Home
            </Link>
            <Link
              href="/edtech/courses"
              onClick={closeMenu}
              className="text-4xl text-white hover:text-red-500/80 transition-colors duration-300 transform hover:scale-105"
            >
              Courses
            </Link>
            <div className="text-sm flex flex-col gap-2">
            <Link
              href="/edtech/courses/data-analytics"
              onClick={closeMenu}
              className=" text-white hover:text-red-500/80 transition-colors duration-300 transform hover:scale-105"
            >
              <span className={`${martianMono.className}`}>01</span> Data Analytics
            </Link><Link
              href="/edtech/courses/python-full-stack-development"
              onClick={closeMenu}
              className=" text-white hover:text-red-500/80 transition-colors duration-300 transform hover:scale-105"
            >
              <span className={`${martianMono.className}`}>02</span> Python Full-Stack
            </Link><Link
              href="/edtech/courses/data-science"
              onClick={closeMenu}
              className=" text-white hover:text-red-500/80 transition-colors duration-300 transform hover:scale-105"
            >
               <span className={`${martianMono.className}`}>03</span> Data Science
            </Link>
            </div>
            <Link
              href="/about"
              onClick={closeMenu}
              className="text-4xl text-white hover:text-red-500/80 transition-colors duration-300 transform hover:scale-105"
            >
              Why Us
            </Link>
           
          </nav>
          <a href="#contact" onClick={closeMenu} className="mt-8">
              <RainbowButton variant="outline" className="text-lg px-8 py-4">
                Contact Us
              </RainbowButton>
            </a>
            <div className="absolute bottom-16 h-16 w-32 sm:h-20 sm:w-40 text-2xl sm:text-3xl tracking-wider flex  items-center justify-center gap-6">
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
      </div>
    </>
  );
};

export default Header;

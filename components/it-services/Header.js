"use client";
import Link from "next/link";
import { hostGrotesk } from "@/app/fonts";
import { useState } from "react";
import { LuMenu, LuX, LuMail, LuPhone } from "react-icons/lu";
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className={`${hostGrotesk.className} fixed top-0 left-0 w-full z-[100] px-6 py-2 flex justify-between items-center bg-white/10 backdrop-blur-md transition-all duration-300`}>
        <div className="text-xl font-black tracking-tight z-50 relative">DataQuotes</div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-[11px] font-black uppercase tracking-widest text-black/90">
          <Link href="/" className="hover:text-neutral-600 transition-colors">Home</Link>
          <Link href="#work" className="hover:text-neutral-600 transition-colors">Work</Link>
          <Link href="#services" className="hover:text-neutral-600 transition-colors">Services</Link>
          <Link href="#about" className="hover:text-neutral-600 transition-colors">About Us</Link>
          <Link href="#contact" className="flex items-center gap-2 bg-black text-white px-4 py-1 rounded-full hover:bg-black/80 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <button
          className="lg:hidden flex flex-col items-center justify-center w-8 h-8 relative z-[100]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className={`block w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-full h-0.5 bg-black my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </header>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 h-screen bg-white z-[90] lg:hidden transition-all duration-300 overflow-y-auto ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center justify-start min-h-screen pt-52 pb-10 px-10 w-full ">
          <nav className={`flex flex-col items-start justify-center gap-0 text-3xl sm:text-5xl font-black tracking-tighter text-left w-full ${hostGrotesk.className} `}>
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-red-500 transition-colors ">Home</Link>
            <Link href="#work" onClick={() => setIsMenuOpen(false)} className="hover:text-red-500 transition-colors ">Work</Link>
            <Link href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-red-500 transition-colors ">Services</Link>
            <Link href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-red-500 transition-colors ">About Us</Link>
          </nav>

          <div className={`w-full mt-20 pt-10 ${hostGrotesk.className}`}>
            
            <div className="flex flex-col gap-4 text-xl font-medium text-black/80">
              <a href="mailto:hello@dataquotes.com" className="flex items-center gap-3 hover:text-red-500 transition-colors">
                <LuMail className="w-5 h-5" />
                hello@dataquotes.com
              </a>
              
            </div>

            
            
            <Link 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)} 
              className="mt-10 inline-flex items-center justify-center w-full py-4 bg-black text-white text-lg font-bold rounded-full hover:bg-red-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

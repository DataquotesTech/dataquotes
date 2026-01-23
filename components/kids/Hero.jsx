"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1758687126482-4b4b35926f33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwbGFwdG9wJTIwcGFyZW50fGVufDF8fHx8MTc2ODg0NTA0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Student with laptop beside parent',
    },
    {
      image: 'https://images.unsplash.com/photo-1752652011627-27196f365c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGRpZ2l0YWwlMjB0ZWNobm9sb2d5JTIwaW50ZXJhY3RpdmV8ZW58MXx8fHwxNzY4ODgwNDIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Student interacting with digital world',
    },
    {
      image: 'https://images.unsplash.com/photo-1625999874116-dba9a603fa24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGdyYWR1YXRpb24lMjBjZXJlbW9ueSUyMHNtaWxpbmd8ZW58MXx8fHwxNzY4ODg1MzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Happy school children in graduation gowns celebrating',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#0a0118] via-[#1a0d2e] to-[#120527]">
      {/* Decorative glowing tech elements */}
      <div className="absolute top-40 left-20 w-24 h-24 border-4 border-cyan-500/30 rounded-full opacity-60 shadow-[0_0_30px_rgba(6,182,212,0.3)] animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 border-4 border-fuchsia-500/30 rounded-lg opacity-60 rotate-45 shadow-[0_0_30px_rgba(217,70,239,0.3)] animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-purple-500/20 rounded-full opacity-50 shadow-[0_0_40px_rgba(168,85,247,0.4)] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      
      {/* Floating cartoon elements */}
      <div className="absolute top-20 right-1/4 text-6xl animate-bounce" style={{ animationDuration: '3s', animationDelay: '0s' }}>🌟</div>
      <div className="absolute top-40 left-1/3 text-5xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>🎮</div>
      <div className="absolute bottom-32 left-1/4 text-5xl animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>🚀</div>
      <div className="absolute top-60 right-20 text-4xl animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '2s' }}>⚡</div>
      <div className="absolute bottom-20 right-1/3 text-5xl animate-bounce" style={{ animationDuration: '3.8s', animationDelay: '1.5s' }}>💫</div>
      
      {/* Cartoon clouds */}
      <div className="absolute top-24 left-1/2 opacity-20">
        <div className="flex gap-2">
          <div className="w-16 h-16 bg-cyan-400 rounded-full"></div>
          <div className="w-20 h-20 bg-cyan-400 rounded-full -ml-4"></div>
          <div className="w-14 h-14 bg-cyan-400 rounded-full -ml-4 mt-2"></div>
        </div>
      </div>
      <div className="absolute bottom-40 right-10 opacity-20">
        <div className="flex gap-2">
          <div className="w-12 h-12 bg-fuchsia-400 rounded-full"></div>
          <div className="w-16 h-16 bg-fuchsia-400 rounded-full -ml-3"></div>
          <div className="w-10 h-10 bg-fuchsia-400 rounded-full -ml-3 mt-2"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 z-10">
          
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
              Smart Tech Learning for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-500 animate-pulse">
                Juniors
              </span>
            </h1>
            
            
            {/* --- NEW HIGHLIGHTED CONTENT START --- */}
            <div className="py-2">
              <span className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-500 border-b-2 border-cyan-500/30 pb-1">
                First ever digital literacy for kids in Tirupati
              </span>
            </div>
            {/* --- NEW HIGHLIGHTED CONTENT END --- */}
            

             <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              From landing dream jobs to building dream futures, now empowering Tirupati’s children with AI-Digital Literacy.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80 flex items-center gap-3 group"
              >
                Explore Courses
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#1a1135] text-cyan-400 px-8 py-4 rounded-full border-2 border-cyan-500/50 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center gap-3"
              >
                <Play className="w-5 h-5" />
                Talk to Us
              </button>
            </div>

          
          </div>

          {/* Right Illustration */}
          <div className="relative group">
            {/* Background decorative card with hover effect */}
            <div className="absolute inset-4 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-fuchsia-500/20 rounded-[3rem] transform rotate-3 opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500 shadow-[0_0_80px_rgba(139,92,246,0.3)]"></div>
            
            {/* Main Image */}
            <div className="relative bg-gradient-to-br from-purple-900/40 to-fuchsia-900/40 backdrop-blur-sm rounded-[3rem] shadow-2xl shadow-purple-900/50 overflow-hidden border-4 border-purple-500/30 group-hover:shadow-[0_20px_80px_rgba(168,85,247,0.6)] group-hover:scale-[1.02] transition-all duration-500">
              <div className="relative group/carousel">
                {/* Carousel Images */}
                <div className="relative h-[500px] overflow-hidden">
                  {slides.map((slide, index) => (
                    <img
                      key={index}
                      src={slide.image}
                      alt={slide.alt}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover/carousel:scale-105 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                  {/* Overlay gradient for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Navigation Arrows */}
                <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={prevSlide}
                    className="bg-purple-900/90 backdrop-blur-sm text-cyan-400 p-3 rounded-full shadow-lg shadow-cyan-500/30 hover:bg-purple-800 hover:scale-110 hover:shadow-cyan-500/50 transition-all border border-cyan-500/30"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="bg-purple-900/90 backdrop-blur-sm text-cyan-400 p-3 rounded-full shadow-lg shadow-cyan-500/30 hover:bg-purple-800 hover:scale-110 hover:shadow-cyan-500/50 transition-all border border-cyan-500/30"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Dot Indicators */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentSlide
                          ? 'bg-gradient-to-r from-cyan-400 to-fuchsia-400 w-8 h-2 shadow-[0_0_10px_rgba(34,211,238,0.8)]'
                          : 'bg-white/50 w-2 h-2 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating Tech Icons */}
            <div className="absolute -top-4 -left-4 bg-gradient-to-br from-purple-900/80 to-fuchsia-900/80 backdrop-blur-sm p-4 rounded-2xl shadow-xl shadow-purple-500/40 border border-purple-500/30 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="text-center">
                <div className="text-3xl">🤖</div>
                <div className="text-xs mt-1 text-cyan-400">AI</div>
              </div>
            </div>
            
            <div className="absolute top-20 -right-4 bg-gradient-to-br from-cyan-900/80 to-blue-900/80 backdrop-blur-sm p-4 rounded-2xl shadow-xl shadow-cyan-500/40 border border-cyan-500/30 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
              <div className="text-center">
                <div className="text-3xl">💻</div>
                <div className="text-xs mt-1 text-fuchsia-400">Code</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 left-1/4 bg-gradient-to-br from-fuchsia-900/80 to-pink-900/80 backdrop-blur-sm p-4 rounded-2xl shadow-xl shadow-fuchsia-500/40 border border-fuchsia-500/30 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}>
              <div className="text-center">
                <div className="text-3xl">🔐</div>
                <div className="text-xs mt-1 text-cyan-400">Safe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
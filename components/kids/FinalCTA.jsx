"use client";

import React from 'react';
import { Rocket, CheckCircle, ArrowRight } from 'lucide-react';
import { martianMono } from '@/app/fonts'; // Branding font

function Star() {
  return <span className="text-yellow-400">⭐</span>;
}

export default function FinalCTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0a0118] via-[#1a0d2e] to-[#120527] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Cartoon celebration elements */}
      <div className="absolute top-20 left-16 text-5xl animate-bounce" style={{ animationDuration: '3.2s' }}>🎊</div>
      <div className="absolute top-28 right-20 text-5xl animate-bounce" style={{ animationDuration: '3.7s', animationDelay: '0.6s' }}>🎉</div>
      <div className="absolute bottom-24 left-24 text-4xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1.1s' }}>🎈</div>
      <div className="absolute bottom-28 right-28 text-5xl animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1.6s' }}>🏅</div>
      <div className="absolute top-1/2 left-12 text-4xl animate-bounce" style={{ animationDuration: '3.9s', animationDelay: '0.3s' }}>✨</div>
      <div className="absolute top-1/3 right-16 text-5xl animate-bounce" style={{ animationDuration: '4.1s', animationDelay: '2s' }}>🌟</div>
      
      {/* Flying confetti emojis */}
      <div className="absolute top-1/4 left-1/3 text-3xl opacity-70" style={{ animation: 'float 5s ease-in-out infinite' }}>🎯</div>
      <div className="absolute bottom-1/3 right-1/4 text-3xl opacity-70" style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '1s' }}>🚀</div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main CTA Card */}
        <div className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-600 rounded-[3rem] p-12 md:p-16 text-center text-white shadow-2xl shadow-purple-900/50 relative overflow-hidden border border-purple-500/30">
          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          
          <div className="relative z-10">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl mb-8 shadow-lg shadow-white/20">
              <Rocket className="w-10 h-10 text-white" />
            </div>

            {/* Heading */}
            {/* Heading - Size decreased for better balance */}
              <h2 className={`${martianMono?.className} text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight font-bold tracking-tight`}>
                 Give Your Child a Head Start in Technology
              </h2>

            {/* Support Text */}
            {/* Support Text - Soft Neon Palette */}
<p className="text-xl md:text-2xl mb-10 opacity-95 max-w-4xl mx-auto leading-relaxed">
  We warmly invite you to join a community of parents who value both{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300 font-bold">
    technology
  </span>{" "}
  and{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-pink-300 font-bold">
    Persona
  </span>. 
  Together, we can help your child enjoy a journey of character-driven learning, gently blending digital skills with civic sense to help them grow into the leaders of tomorrow.
</p>
            {/* Features List */}

            {/* CTA Button */}
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-white px-10 py-5 rounded-full text-xl hover:scale-105 transition-all shadow-xl shadow-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/80 inline-flex items-center gap-3 group font-bold"
            >
              Enroll Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Trust Badge */}
            
          </div>
        </div>

        {/* Additional Support Section */}
<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
  
  {/* CARD 1: AFFORDABLE */}
  <div className="bg-gradient-to-br from-purple-900/40 to-fuchsia-900/40 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-purple-500/30 hover:scale-105 transition-all">
    <div className="text-4xl mb-3">💰</div>
    <h3 className={`${martianMono?.className} text-lg text-white mb-2`}>Affordable Excellence</h3>
    <p className="text-gray-300 text-sm">Elite education designed to fit every family's monthly budget.</p>
  </div>

  {/* CARD 2: EXPERT SUPPORT */}
  <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-cyan-500/30 hover:scale-105 transition-all">
    <div className="text-4xl mb-3">🎓</div>
    <h3 className={`${martianMono?.className} text-lg text-white mb-2`}>Expert Support</h3>
    <p className="text-gray-300 text-sm">24/7 assistance from our dedicated technical team.</p>
  </div>

  {/* NEW CARD: PREMIUM MENTORSHIP */}
  <div className="bg-gradient-to-br from-yellow-500/20 to-amber-600/20 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-yellow-500/50 hover:scale-110 transition-all relative group overflow-hidden">
    {/* Shine effect for Premium */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
    <div className="text-4xl mb-3">💎</div>
    <h3 className={`${martianMono?.className} text-lg text-yellow-400 mb-2 font-bold`}>Premium Mentorship</h3>
    <p className="text-gray-200 text-sm font-medium">Direct 1:1 guidance from Industry experts.</p>
  </div>

  {/* CARD 4: SAFE & SECURE */}
  <div className="bg-gradient-to-br from-fuchsia-900/40 to-pink-900/40 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-fuchsia-500/30 hover:scale-105 transition-all">
    <div className="text-4xl mb-3">🔒</div>
    <h3 className={`${martianMono?.className} text-lg text-white mb-2`}>100% Safe & Secure</h3>
    <p className="text-gray-300 text-sm">Child-safe technology with total parental control.</p>
  </div>

  {/* CARD 5: VALUE DRIVEN */}
  <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-emerald-500/30 hover:scale-105 transition-all">
    <div className="text-4xl mb-3">❤️</div>
    <h3 className={`${martianMono?.className} text-lg text-white mb-2`}>Civic Excellence</h3>
    <p className="text-gray-300 text-sm">Elite tech skills meet character-building values.</p>
  </div>

</div>
      </div>
    </section>
  );
}
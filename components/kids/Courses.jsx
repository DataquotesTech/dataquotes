"use client";

import React from 'react';
import { 
  Shield, 
  Heart, 
  Laptop, 
  Brain, 
  ArrowRight, 
  Gamepad, 
  Smartphone, 
  BarChart3, 
  Globe 
} from 'lucide-react';
import { martianMono } from '@/app/fonts'; 

const courses = [
  // --- ORIGINAL COURSES ---
  {
    id: 1,
    title: 'Cybersecurity',
    icon: Shield,
    description: 'Learn to stay safe online and protect your digital world!',
    gradient: 'from-cyan-400 to-blue-500',
    bgGradient: 'from-cyan-950/50 to-blue-950/50',
    glowColor: 'shadow-cyan-500/50',
    emoji: '🛡️',
    features: ['Online Safety', 'Password Power', 'Digital Detective'],
  },
  {
    id: 2, 
    title: 'AI & Ethics',
    icon: Brain, 
    description: 'Build amazing smart bots and learn how to use AI responsibly!',
    gradient: 'from-blue-500 to-pink-500', 
    bgGradient: 'from-blue-950/50 to-pink-950/50',
    glowColor: 'shadow-purple-500/50',
    emoji: '🤖',
    features: ['ML Magic', 'Smart Bots', 'Fair Tech'], 
  },
  {
    id: 3,
    title: 'Computer Basics',
    icon: Laptop,
    description: 'Master the fundamentals and become a tech wizard!',
    gradient: 'from-purple-400 to-violet-500',
    bgGradient: 'from-purple-950/50 to-violet-950/50',
    glowColor: 'shadow-purple-500/50',
    emoji: '💻',
    features: ['Typing Fun', 'File Master', 'App Explorer'],
  },
  {
    
  id: 5,
  title: 'Coding Adventures',
  icon: Gamepad,
  description: 'Stop playing games and start building them with code!',
  gradient: 'from-red-500 to-orange-600',
  bgGradient: 'from-red-950/50 to-orange-950/50',
  glowColor: 'shadow-red-500/50',
  emoji: '🎮',
  features: ['Logic Legends', 'Game Maker Pro', 'Creative Coding'],
},
  
  {
    id: 6,
    title: 'App Innnovation Basics',
    icon: Smartphone,
    description: 'Turn your bright ideas into real working mobile apps!',
    gradient: 'from-teal-400 to-emerald-600',
    bgGradient: 'from-teal-950/50 to-emerald-950/50',
    glowColor: 'shadow-teal-500/50',
    emoji: '📱',
    features: ['UI Design', 'App Logic', 'Publishing'],
  },
  {
  id: 7,
  title: 'Logic Learning',
  icon: BarChart3,
  description: 'Train your brain to solve puzzles and crack the world\'s secret codes!',
  gradient: 'from-indigo-400 to-violet-600',
  bgGradient: 'from-indigo-950/50 to-violet-950/50',
  glowColor: 'shadow-indigo-500/50',
  emoji: '📊',
  features: ['Pattern Detectives', 'Puzzle Power', 'Data Discovery'],
},
  {
    id: 8,
    title: 'Web Wizards Basics',
    icon: Globe,
    description: 'Build and publish your own portfolio website from scratch!',
    gradient: 'from-pink-400 to-rose-600',
    bgGradient: 'from-pink-950/50 to-rose-950/50',
    glowColor: 'shadow-pink-500/50',
    emoji: '🌐',
    features: ['HTML/CSS', 'Web Design', 'Going Live'],
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0118] via-[#1a0d2e] to-[#0a0118] relative overflow-hidden">
      {/* Glowing background orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Floating cartoon decorations */}
      <div className="absolute top-10 left-20 text-4xl animate-bounce" style={{ animationDuration: '3.2s' }}>🎨</div>
      <div className="absolute top-32 right-32 text-5xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>🎯</div>
      <div className="absolute bottom-32 left-32 text-4xl animate-bounce" style={{ animationDuration: '3.7s', animationDelay: '1s' }}>🎪</div>
      <div className="absolute bottom-20 right-20 text-5xl animate-bounce" style={{ animationDuration: '4.2s', animationDelay: '1.5s' }}>🎭</div>
      <div className="absolute top-1/2 left-10 text-4xl animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '2s' }}>🌈</div>
      <div className="absolute top-1/2 right-16 text-4xl animate-bounce" style={{ animationDuration: '3.9s', animationDelay: '0.8s' }}>✨</div>
      
      {/* Cartoon stars scattered */}
      <div className="absolute top-20 left-1/3 text-3xl opacity-60" style={{ animation: 'spin 20s linear infinite' }}>⭐</div>
      <div className="absolute bottom-40 right-1/4 text-3xl opacity-60" style={{ animation: 'spin 15s linear infinite reverse' }}>⭐</div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-900/50 to-fuchsia-900/50 backdrop-blur-sm px-6 py-2.5 rounded-full mb-6 border border-purple-500/30 shadow-lg shadow-purple-500/20">
            <span className="text-2xl">🎓</span>
            <span className="text-sm text-cyan-400">Our Programs</span>
          </div>
          <h2 className={`${martianMono?.className} text-4xl md:text-5xl lg:text-6xl text-white mb-6`}>
            Courses Kids <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">Love</span>
          </h2>

          {/* NEW TRUST POINTS SECTION */}
  <div className="flex flex-col md:flex-row justify-center gap-6 mb-10 max-w-5xl mx-auto px-4">
    {/* Trust Point 1 */}
    <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
      <p className="text-gray-200 leading-relaxed">
        A world-class curriculum crafted by experts from{" "}
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:from-fuchsia-400 group-hover:to-cyan-400 transition-all">
          IIT Tirupati
        </span>{" "}
        and{" "}
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 group-hover:from-fuchsia-400 group-hover:to-cyan-400 transition-all">
          IQVIA Alumni
        </span>.
      </p>
    </div>

    {/* Trust Point 2 */}
    <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
      <p className="text-gray-200 leading-relaxed">
        A{" "}
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400 group-hover:from-cyan-400 group-hover:to-fuchsia-400 transition-all">
          Central Government Recognized
        </span>{" "}
        institute bringing trusted tech education to Tirupati.
      </p>
    </div>
  </div>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Exciting learning adventures designed to spark curiosity and build essential tech skills
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <div
                key={course.id}
                className={`bg-gradient-to-br ${course.bgGradient} backdrop-blur-sm rounded-3xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg ${course.glowColor} hover:shadow-2xl group border border-purple-500/20 hover:border-purple-500/40 flex flex-col`}
              >
                {/* Icon with Emoji */}
                <div className="mb-6">
                  <div className={`bg-gradient-to-br ${course.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mb-4 shadow-lg ${course.glowColor} group-hover:scale-110 group-hover:shadow-2xl transition-all`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  {/* <div className="text-5xl">{course.emoji}</div> */}
                </div>

                {/* Content */}
                <h3 className={`${martianMono?.className} text-2xl text-white mb-3`}>
                  {course.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed flex-grow">{course.description}</p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${course.gradient}`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                {/* <button className={`w-full bg-gradient-to-r ${course.gradient} text-white py-3.5 rounded-full hover:shadow-xl ${course.glowColor} hover:shadow-2xl transition-all flex items-center justify-center gap-2 group-hover:gap-3 font-semibold mt-auto`}>
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button> */}
              </div>
            );
          })}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-4">All courses include interactive lessons, fun projects, and certificates! 🎉</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">✓</span>
              Self-paced learning
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">✓</span>
              Parent dashboard
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">✓</span>
              Certificate of completion
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
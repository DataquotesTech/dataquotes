"use client";

import React from 'react';
import { Shield, Users, Gamepad2, TrendingUp, CheckCircle } from 'lucide-react';
import { martianMono } from '@/app/fonts'; // Branding font

const features = [
  {
    icon: Shield,
    title: 'Safe Learning Environment',
    description: 'International safety standards for your child\'s privacy',
    color: 'from-cyan-400 to-blue-500',
    bgColor: 'from-cyan-950/50 to-blue-950/50',
    glowColor: 'shadow-cyan-500/50',
  },
  {
    icon: Users,
    title: 'Expert Instructors',
    description: 'Certified educators with specialized training in child technology education',
    color: 'from-fuchsia-400 to-pink-500',
    bgColor: 'from-fuchsia-950/50 to-pink-950/50',
    glowColor: 'shadow-fuchsia-500/50',
  },
  {
    icon: Gamepad2,
    title: 'Interactive & Fun Teaching',
    description: 'Gamified lessons that keep children engaged and excited to learn',
    color: 'from-purple-400 to-violet-500',
    bgColor: 'from-purple-950/50 to-violet-950/50',
    glowColor: 'shadow-purple-500/50',
  },
  {
    icon: TrendingUp,
    title: 'Strong Future Foundation',
    description: 'Essential skills that prepare children for tomorrow\'s digital world',
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'from-blue-950/50 to-indigo-950/50',
    glowColor: 'shadow-blue-500/50',
  },
];

const stats = [
  { value: '7+', label: 'Courses Offering', icon: '👨‍🎓' },
  { value: '98%', label: 'Parent Satisfaction', icon: '⭐' },
  { value: '5+', label: 'Expert Teachers', icon: '👩‍🏫' },
  { value: '24/7', label: 'Support Available', icon: '💬' },
];

export default function WhyUs() {
  return (
    <section id="why-dq-kids" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0a0118] via-[#1a0d2e] to-[#120527] relative overflow-hidden">
      {/* Glowing background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Cartoon decorations for parents section */}
      <div className="absolute top-16 left-16 text-5xl animate-bounce" style={{ animationDuration: '3.3s' }}>👨‍👩‍👧‍👦</div>
      <div className="absolute top-24 right-24 text-5xl animate-bounce" style={{ animationDuration: '3.8s', animationDelay: '0.7s' }}>🏆</div>
      <div className="absolute bottom-24 left-24 text-4xl animate-bounce" style={{ animationDuration: '4.1s', animationDelay: '1.2s' }}>🎓</div>
      <div className="absolute bottom-32 right-32 text-5xl animate-bounce" style={{ animationDuration: '3.6s', animationDelay: '1.8s' }}>💡</div>
      <div className="absolute top-1/2 left-20 text-4xl animate-bounce" style={{ animationDuration: '3.9s', animationDelay: '0.4s' }}>🌟</div>
      <div className="absolute top-1/3 right-20 text-4xl animate-bounce" style={{ animationDuration: '4.3s', animationDelay: '2.1s' }}>🎈</div>
      
      {/* Floating hearts */}
      <div className="absolute top-40 left-1/3 text-3xl opacity-50" style={{ animation: 'float 6s ease-in-out infinite' }}>💙</div>
      <div className="absolute bottom-40 right-1/3 text-3xl opacity-50" style={{ animation: 'float 7s ease-in-out infinite', animationDelay: '1s' }}>💜</div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-900/50 to-fuchsia-900/50 backdrop-blur-sm px-6 py-2.5 rounded-full mb-6 shadow-lg shadow-fuchsia-500/20 border border-fuchsia-500/30">
            <span className="text-2xl">🌟</span>
            <span className="text-sm text-cyan-400">For Parents</span>
          </div>
          <h2 className={`${martianMono?.className} text-4xl md:text-5xl lg:text-6xl text-white mb-6`}>
            Why Parents Trust <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">DQ Juniors</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're committed to providing a safe, engaging, and effective learning environment that gives your child the skills they need for a digital future
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-900/30 to-fuchsia-900/30 backdrop-blur-sm rounded-3xl p-6 text-center shadow-lg shadow-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105 transition-all border border-purple-500/30">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className={`${martianMono?.className} text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${feature.bgColor} backdrop-blur-sm rounded-3xl p-8 hover:scale-105 transition-all duration-300 shadow-lg ${feature.glowColor} hover:shadow-2xl border border-purple-500/20 hover:border-purple-500/40 group`}
              >
                <div className={`bg-gradient-to-br ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${feature.glowColor} group-hover:scale-110 group-hover:shadow-2xl transition-all`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`${martianMono?.className} text-2xl text-white mb-4`}>
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Trust Assurance */}
        <div className="bg-gradient-to-br from-purple-900/40 to-fuchsia-900/40 backdrop-blur-sm rounded-3xl p-10 shadow-2xl shadow-purple-500/30 border border-purple-500/30">
          <div className="flex items-start gap-6">
            <div className="bg-gradient-to-br from-cyan-400 to-purple-500 p-4 rounded-2xl shadow-lg shadow-cyan-500/50 flex-shrink-0">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className={`${martianMono?.className} text-2xl text-white mb-4`}>
                Our Promise to Parents
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Every course is carefully designed with child safety and educational excellence as our top priorities. We provide complete transparency with real-time progress tracking, and our team is always available to support both you and your child throughout their learning journey.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-cyan-400">✓</span>
                  Age-appropriate content
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-cyan-400">✓</span>
                  Screen time management
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-cyan-400">✓</span>
                  Progress reports
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
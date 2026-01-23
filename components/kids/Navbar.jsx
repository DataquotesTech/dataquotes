"use client";

import React, { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { martianMono } from '@/app/fonts'; // Optional: Use your custom font if you like

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Courses', id: 'courses' },
    { name: 'Why DQ Juniors', id: 'why-dq-kids' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0a0118]/95 backdrop-blur-md shadow-lg shadow-purple-900/20 z-50 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-2.5 rounded-2xl shadow-lg shadow-cyan-500/50">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            {/* Added martianMono font here for consistency with your brand */}
            <span className={`${martianMono?.className || ''} text-2xl text-white tracking-tight`}>
              DQ <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">Juniors</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-cyan-400 transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-fuchsia-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-fuchsia-500 via-pink-500 to-cyan-500 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-fuchsia-500/50 hover:scale-105 transition-all"
            >
              Enroll Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1a1135]/98 backdrop-blur-md border-t border-cyan-500/20">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-gray-300 hover:text-cyan-400 py-2.5"
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-gradient-to-r from-fuchsia-500 via-pink-500 to-cyan-500 text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-fuchsia-500/50 transition-all"
            >
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
  "use client";

  import React from 'react';
  import Navbar from '@/components/kids/Navbar';
  import Dock from '@/components/layouts/dock';
  import Hero from '@/components/kids/Hero'; 
  import Courses from '@/components/kids/Courses';
  import Contacts from '@/components/kids/Contacts';
  import WhyUs from '@/components/kids/WhyUs';
  import FinalCTA from '@/components/kids/FinalCTA';
  import Footer from '@/components/layouts/Footer'; 

  // import Courses from '@/components/kids/Courses';
  // ... other imports

  export default function KidsHomePage() {
    return (
      <div className="relative min-h-screen bg-[#0a0118] text-white selection:bg-cyan-500/30">
        
        {/* 1. Top Navigation */}
        <Navbar />
        
        <main>
          {/* --- HERO SECTION --- */}
          <Hero />  {/* <--- Added here! */}

          {/* --- COURSES SECTION (Placeholder) --- */}
          <Courses />  {/* <--- Added here! */}
          {/* <section id="courses" className="min-h-screen flex items-center justify-center bg-white/5 border-b border-white/10">
            <h2 className="text-4xl font-bold">Courses Section</h2>
          </section> */}

          <WhyUs/>

          <FinalCTA/>

          {/* --- CONTACT SECTION (Placeholder) --- */}
          <Contacts />
          {/* <section id="contact" className="min-h-screen flex items-center justify-center bg-white/5">
            <h2 className="text-4xl font-bold">Contact Section</h2>
          </section> */}

        </main>

        < Footer />

      
      
      </div>
    );
  }
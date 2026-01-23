"use client";

import React, { useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { martianMono } from "@/app/fonts"; 

export default function Contact() {
  
  // Load the Tally widget script when component mounts
  useEffect(() => {
    const d = document, w = "https://tally.so/widgets/embed.js";
    const v = function() {
      if (typeof Tally !== "undefined") {
        Tally.loadEmbeds();
      } else {
        d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e) {
          e.src = e.dataset.tallySrc;
        });
      }
    };

    if (typeof Tally !== "undefined") {
      v();
    } else if (d.querySelector('script[src="' + w + '"]') == null) {
      const s = d.createElement("script");
      s.src = w;
      s.onload = v;
      s.onerror = v;
      d.body.appendChild(s);
    }
  }, []);

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0a0118] via-[#1a0d2e] to-[#120527] relative overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Cartoon contact elements */}
      <div className="absolute top-16 left-20 text-5xl animate-bounce" style={{ animationDuration: '3.3s' }}>📧</div>
      <div className="absolute top-24 right-24 text-4xl animate-bounce" style={{ animationDuration: '3.8s', animationDelay: '0.7s' }}>📞</div>
      <div className="absolute bottom-24 left-24 text-5xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1.2s' }}>✉️</div>
      <div className="absolute bottom-28 right-28 text-4xl animate-bounce" style={{ animationDuration: '3.6s', animationDelay: '1.7s' }}>💌</div>
      <div className="absolute top-1/2 right-16 text-5xl animate-bounce" style={{ animationDuration: '3.9s', animationDelay: '0.4s' }}>🎯</div>
      <div className="absolute top-1/3 left-16 text-4xl animate-bounce" style={{ animationDuration: '4.2s', animationDelay: '2s' }}>📬</div>
      
      {/* Floating hearts and stars */}
      <div className="absolute top-40 left-1/4 text-3xl opacity-60" style={{ animation: 'float 7s ease-in-out infinite' }}>💜</div>
      <div className="absolute bottom-40 right-1/4 text-3xl opacity-60" style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '1.2s' }}>💙</div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-purple-900/50 to-fuchsia-900/50 backdrop-blur-sm text-cyan-400 px-6 py-2 rounded-full mb-4 border border-cyan-500/30 shadow-lg shadow-cyan-500/20">
            📞 Get In Touch
          </div>
          <h2 className={`${martianMono?.className} text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 mb-4`}>
            Let's Start Your Child's Journey!
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions? We're here to help! Reach out and
            we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info (Left Side) */}
          <div className="space-y-8">
            <div>
              <h3 className={`${martianMono?.className} text-2xl text-white mb-6`}>
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-sm p-6 rounded-3xl shadow-lg shadow-cyan-500/20 hover:shadow-2xl hover:shadow-cyan-500/40 hover:scale-105 transition-all border border-cyan-500/30">
                  <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-3 rounded-2xl shadow-lg shadow-cyan-500/50">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white mb-1">
                      Email Us
                    </div>
                    <a
                      href="mailto:hello@dataquotes.net"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      hello@dataquotes.net
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gradient-to-br from-fuchsia-900/40 to-pink-900/40 backdrop-blur-sm p-6 rounded-3xl shadow-lg shadow-fuchsia-500/20 hover:shadow-2xl hover:shadow-fuchsia-500/40 hover:scale-105 transition-all border border-fuchsia-500/30">
                  <div className="bg-gradient-to-br from-fuchsia-400 to-pink-500 p-3 rounded-2xl shadow-lg shadow-fuchsia-500/50">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white mb-1">
                      Call Us
                    </div>
                    <a
                      href="tel:+918142821020"
                      className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
                    >
                      +91 8142821020
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gradient-to-br from-purple-900/40 to-violet-900/40 backdrop-blur-sm p-6 rounded-3xl shadow-lg shadow-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105 transition-all border border-purple-500/30">
                  <div className="bg-gradient-to-br from-purple-400 to-violet-500 p-3 rounded-2xl shadow-lg shadow-purple-500/50">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white mb-1">
                      Visit Us
                    </div>
                    <p className="text-purple-400">
                      3rd Floor, 14-40A, Vaikuntapuram Arch Rd, Dhanalakshmi
                      Nagar, Vk Puram, Tirupati, Andhra Pradesh 517502
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (Tally Embed) - Right Side */}
          <div className="bg-gradient-to-br from-purple-900/40 to-fuchsia-900/40 backdrop-blur-sm rounded-3xl p-4 shadow-2xl shadow-purple-500/30 border border-purple-500/30 min-h-[400px] flex items-center justify-center">
            <iframe
              data-tally-src="https://tally.so/embed/68ZkgY?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="350"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="DataQuotes  - DQ Juniors"
              className="w-full h-full rounded-2xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
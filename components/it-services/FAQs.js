"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { hostGrotesk } from "@/app/fonts";
import { LuPlus, LuMinus } from "react-icons/lu";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How do you handle data security?",
      answer: "Security is built into our process from day one. We follow industry-standard encryption protocols, secure coding practices, and regular audits to ensure your data and your customers' data remains protected at all times."
    },
    {
      question: "Can your solutions scale as we grow?",
      answer: "Absolutely. We build with scalability in mind, using cloud-native architectures that allow your systems to expand effortlessly. Whether you double your users or expand to new markets, our software grows with you."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Timelines vary by complexity, but we believe in rapid iteration. We typically ship a functional MVP in 4-8 weeks, allowing us to gather feedback early while continuing to refine and expand the product."
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes. We don't just hand over code and disappear. We offer flexible support and maintenance packages to ensure your systems remain up-to-date, secure, and performant long after launch."
    },
    {
      question: "How do we get started?",
      answer: "It starts with a conversation. We'll discuss your goals, challenges, and vision. From there, we'll propose a roadmap and strategy tailored specifically to your business needs."
    },
    {
      question: "What is your pricing?",
      answer: "We offer flexible pricing models to suit your budget and needs. Contact us for a personalized quote based on your specific requirements."
    },
    {
      question: "What are your working hours?",
      answer: "We are available from 9 AM to 6 PM (IST)."
    }
    
  ];

  return (
    <section id="faq" className={`${hostGrotesk.className} px-6 py-20 bg-white`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[10vw] md:text-[6vw] font-black tracking-tighter uppercase leading-none  pb-4 mb-5">FAQ&apos;s</h2>
        
        <div className="border-t border-black">
          {faqs.map((faq, index) => (
            <div key={index} className="border-t border-black group">
              <button
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                className="w-full py-2 md:py-4 lg:py-6 flex items-start justify-between text-left focus:outline-none"
              >
                <span className="text-md md:text-3xl font-bold uppercase tracking-tight group-hover:text-red-500 transition-colors pr-8">
                  {faq.question}
                </span>
                <span className="text-3xl md:text-4xl shrink-0 mt-1">
                  {openIndex === index ? <LuMinus /> : <LuPlus />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm md:text-xl lg:text-2xl xl:text-3xl text-neutral-600 font-light leading-relaxed pb-12 max-w-4xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

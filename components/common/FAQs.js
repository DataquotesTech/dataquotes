"use client";

import { hostGrotesk, martianMono } from "@/app/layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// FAQ data
const faqData = [
  {
    id: 1,
    question: "What courses do you offer?",
    answer:
      "We offer comprehensive courses in Data Analytics, Python Full Stack Development, and Data Science. Each course is designed to provide hands-on experience with real-world projects and industry-relevant skills.",
  },
  {
    id: 2,
    question: "How long are the courses?",
    answer:
      "Our courses typically range from 3-6 months depending on the program. Data Analytics is a 3-month intensive course, while Python Full Stack and Data Science are 6-month comprehensive programs with both theoretical and practical components.",
  },
  {
    id: 3,
    question: "Do you provide job placement assistance?",
    answer:
      "Yes! We provide comprehensive career support including resume building, interview preparation, portfolio development, and direct connections with our industry partners. Our placement rate is over 85% within 6 months of course completion.",
  },
  {
    id: 4,
    question: "What are the prerequisites for enrollment?",
    answer:
      "For Data Analytics: Basic computer skills and high school mathematics. For Python Full Stack: Basic programming knowledge is helpful but not required. For Data Science: Strong foundation in mathematics and statistics, plus basic programming experience.",
  },
  {
    id: 5,
    question: "Are the courses online or in-person?",
    answer:
      "We offer both online and hybrid options. Our online courses include live interactive sessions, recorded lectures, and hands-on projects. In-person sessions are available at our learning centers for those who prefer face-to-face interaction.",
  },
  {
    id: 6,
    question: "What kind of support do you provide during the course?",
    answer:
      "We provide 24/7 technical support, dedicated mentors for each student, peer learning groups, and regular one-on-one sessions. Our instructors are industry professionals who bring real-world experience to the classroom.",
  },
  {
    id: 7,
    question: "Do you offer any certifications?",
    answer:
      "Yes, upon successful completion of any course, you'll receive a certificate of completion. Additionally, we help you prepare for industry-recognized certifications like AWS, Google Cloud, and Microsoft Azure certifications.",
  },
  {
    id: 8,
    question: "What is the refund policy?",
    answer:
      "We offer a 30-day money-back guarantee if you're not satisfied with the course content. After 30 days, we provide partial refunds based on course completion percentage. Our goal is your success, and we're committed to ensuring you get value from your investment.",
  },
];

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-4xl  text-neutral-400 mb-4 ${martianMono.className}`}
          >
            Frequently Asked Questions (FAQ&apos;s)
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className={`text-md text-neutral-400 ${hostGrotesk.className}`}
          >
            Got questions? We&apos;ve got answers. Find everything you need to know
            about our courses and programs.
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-900/50 border border-neutral-700/50 rounded-xl overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-neutral-800/50 transition-colors duration-200"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <h3
                  className={`text-lg font-semibold text-white ${hostGrotesk.className}`}
                >
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-white"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openFAQ === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p
                        className={`text-neutral-300 leading-relaxed ${hostGrotesk.className}`}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;

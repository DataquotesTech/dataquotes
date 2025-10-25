"use client";

import { motion } from "framer-motion";
import { hostGrotesk, martianMono } from "@/app/fonts";
import Image from "next/image";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Chaitanya Sri",
      role: "Working at KFIN Technologies",
      gender: "female",

      review:
        "The course completely transformed my career. The hands-on projects and real-world applications helped me land my dream job at Google within 3 months of completion.",
    },
    {
      id: 2,
      name: "Maniteja",
      role: "Working at Accenture",
      gender: "male",

      review:
        "Exceptional curriculum and mentorship. The weekly meetups with industry professionals gave me insights that no other course could provide.",
    },
    {
      id: 3,
      name: "Anusha",
      role: "Working at Deloitte",

      gender: "female",
      review:
        "The capstone project was a game-changer. It gave me the confidence and portfolio piece I needed to stand out in competitive interviews.",
    },
    {
      id: 4,
      name: "Praveen Kumar",
      role: "Working at TCS",

      gender: "male",
      review:
        "The one-on-one mentoring sessions were invaluable. My mentor helped me navigate complex algorithms and prepare for technical interviews.",
    },
    {
      id: 5,
      name: "Hararhi",
      role: "Working at Manuh Solutions Pvt Ltd",

      gender: "female",
      review:
        "The resume preparation and career guidance sessions were top-notch. They helped me craft a compelling story that landed multiple offers.",
    },
    {
      id: 6,
      name: "Hemendra",
      role: "Working at APT Online",

      gender: "male",
      review:
        "The live coding exercises and mini projects kept me engaged throughout. The practical approach made learning enjoyable and effective.",
    },
    {
      id: 7,
      name: "Swathi",
      role: "Working at Teachnook",
      gender: "female",
      review:
        "The completion certificate opened doors I never thought possible. It's recognized by top companies and gave me instant credibility.",
    },
    {
      id: 8,
      name: "Pavan Kumar",
      role: "Working at Global Logic",
      gender: "male",
      review:
        "The one-year live access was perfect for my learning style. I could revisit concepts and stay updated with the latest industry trends.",
    },
  ];

  if (!reviews || reviews.length === 0) {
    return null;
  }

  return (
    <div className="w-full pb-8 sm:pb-12 md:py-16 px-2 sm:px-4 md:px-6 bg-black overflow-hidden lg:h-150">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-6 sm:mb-8 md:mb-12"
        >
          <h2
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl text-neutral-400 ${martianMono.className} mb-2 sm:mb-3`}
          >
            What Our Students Say
          </h2>
          <p
            className={`text-sm sm:text-base md:text-lg text-neutral-400 ${hostGrotesk.className} max-w-2xl mx-auto`}
          >
            Real success stories from our graduates
          </p>
        </motion.div>

        <div className="relative">
          {/* Left shadow gradient */}
          <div className="absolute left-[-9px] md:left-[-25px] top-0 bottom-0 w-8 sm:w-12 md:w-16 lg:w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>

          {/* Right shadow gradient */}
          <div className="absolute right-[-9px] md:right-[-25px] top-0 bottom-0 w-8 sm:w-12 md:w-16 lg:w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          <motion.div
            className="flex gap-3 sm:gap-4 md:gap-6"
            animate={{
              x: [0, -1800],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            style={{ width: `${reviews.length * 2 * 240}px` }}
          >
            {[...reviews, ...reviews].map((review, index) => (
              <motion.div
                key={`${review.id}-${index}`}
                className="flex-shrink-0 w-56 sm:w-64 md:w-72 lg:w-80 bg-neutral-950 border border-neutral-800/70 rounded-xl p-3 sm:p-4 md:p-5 lg:p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
                  <div className="mr-2 sm:mr-3 flex-shrink-0">
                    {review.gender === "male" ? (
                      <Image
                        src="/male.png"
                        alt="Male Avatar"
                        width={40}
                        height={40}
                        className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 object-cover rounded-full"
                      />
                    ) : (
                      <Image
                        src="/female.png"
                        alt="Female Avatar"
                        width={40}
                        height={40}
                        className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 object-cover rounded-full"
                      />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3
                      className={`text-xs sm:text-sm md:text-base text-neutral-300 ${hostGrotesk.className} font-medium truncate`}
                    >
                      {review.name}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm text-neutral-400 ${hostGrotesk.className} truncate`}
                    >
                      {review.role}
                    </p>
                  </div>
                </div>

                <p
                  className={`text-neutral-300 ${hostGrotesk.className} text-xs sm:text-sm md:text-base leading-relaxed overflow-hidden`}
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  &quot;{review.review}&quot;
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-8 sm:mt-10 md:mt-12"
        >
          <p
            className={`text-sm sm:text-base md:text-lg text-neutral-300 ${hostGrotesk.className} max-w-2xl mx-auto px-4`}
          >
            <span className="text-neutral-300 font-bold">
              Real stories. Real Success.
            </span>{" "}
            Students have transformed their careers with us
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews;

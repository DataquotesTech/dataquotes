"use client";

import { motion } from "framer-motion";
import { hostGrotesk, martianMono } from "@/app/layout";
import Image from "next/image";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Data Scientist at Google",
      gender: "female",   
     
      review:
        "The course completely transformed my career. The hands-on projects and real-world applications helped me land my dream job at Google within 3 months of completion.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Full Stack Developer at Microsoft",
      gender: "male",
      
      review:
        "Exceptional curriculum and mentorship. The weekly meetups with industry professionals gave me insights that no other course could provide.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Machine Learning Engineer at Tesla",
    
      gender: "female",
      review:
        "The capstone project was a game-changer. It gave me the confidence and portfolio piece I needed to stand out in competitive interviews.",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Software Engineer at Amazon",
     
      gender: "male",
      review:
        "The one-on-one mentoring sessions were invaluable. My mentor helped me navigate complex algorithms and prepare for technical interviews.",
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Product Manager at Meta",
      
      gender: "female",
      review:
        "The resume preparation and career guidance sessions were top-notch. They helped me craft a compelling story that landed multiple offers.",
    },
    {
      id: 6,
      name: "James Wilson",
      role: "DevOps Engineer at Netflix",
      
      gender: "male",
      review:
        "The live coding exercises and mini projects kept me engaged throughout. The practical approach made learning enjoyable and effective.",
    },
    {
      id: 7,
      name: "Maria Garcia",
      role: "Data Analyst at Spotify",
      gender: "female",
      review:
        "The completion certificate opened doors I never thought possible. It's recognized by top companies and gave me instant credibility.",
    },
    {
      id: 8,
      name: "Alex Thompson",
      role: "Frontend Developer at Airbnb",
     gender: "male",
      review:
        "The one-year live access was perfect for my learning style. I could revisit concepts and stay updated with the latest industry trends.",
    },
  ];

  return (
    <div className="w-full pb-16 px-4 bg-black overflow-hidden min-h-150">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl text-neutral-400 ${martianMono.className}`}>
            What Our Students Say
          </h2>
          <p className={`text-lg text-neutral-400 ${hostGrotesk.className}`}>
            Real success stories from our graduates
          </p>
        </motion.div>

        <div className="relative">
          {/* Left shadow gradient */}
          <div className="absolute left-[-16] top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>

          {/* Right shadow gradient */}
          <div className="absolute right-[-16] top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -100 * reviews.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            style={{ width: `${reviews.length * 400}px` }}
          >
            {[...reviews, ...reviews].map((review, index) => (
              <motion.div
                key={`${review.id}-${index}`}
                className="flex-shrink-0 w-70 bg-neutral-950 border border-neutral-800/70 rounded-xl p-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">
                    {
                        review.gender==='male'?<Image
                        src="/male.png"
                        alt="Photo Card"
                        width={450}
                        height={100}
                        className=" h-10 object-cover w-full  rounded-full"
                      />:<Image
                      src="/female.png"
                      alt="Photo Card"
                      width={450}
                      height={100}
                      className=" h-10 object-cover w-full  rounded-full"
                    />
                    }
                  
                  </div>
                  <div>
                    <h3 className={`text-md text-neutral-300 ${hostGrotesk.className}`}>
                      {review.name}
                    </h3>
                    <p
                      className={`text-xs text-neutral-400 ${hostGrotesk.className}`}
                    >
                      {review.role}
                    </p>
                  </div>
                </div>

               

                <p
                  className={`text-neutral-300 ${hostGrotesk.className} text-sm leading-relaxed`}
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
          className="text-center mt-12"
        >
          <p className={`text-neutral-300 ${hostGrotesk.className}`}>
            <span className="text-neutral-300 font-bold">Real stories. Real Success.</span> Students have
            transformed their careers with us
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews;

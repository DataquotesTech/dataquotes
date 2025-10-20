"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AnimatedText = ({ text, className = "" }) => {
  const ref = useRef(null);
  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end 60%"],
  });

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => {
        // Calculate progress for each word based on scroll position
        const wordProgress = useTransform(scrollYProgress, [0, 1], [0, 5]);

        // Each word starts animating at different scroll positions
        const wordStart = index / words.length;
        const wordEnd = (index + 1) / words.length;

        const wordOpacity = useTransform(
          scrollYProgress,
          [wordStart, wordEnd],
          [0.2, 0.8]
        );

        return (
          <motion.span
            key={index}
            style={{ opacity: wordOpacity }}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
};

export default AnimatedText;

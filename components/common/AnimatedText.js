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

  // Create transforms for each word before rendering
  const wordOpacities = words.map((_, index) => {
    const wordStart = index / words.length;
    const wordEnd = (index + 1) / words.length;
    return useTransform(scrollYProgress, [wordStart, wordEnd], [0.2, 0.8]);
  });

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          style={{ opacity: wordOpacities[index] }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Per-word component — hooks are called here (allowed)
 */
const Word = ({ word, index, total, scrollYProgress }) => {
  const wordStart = index / total;
  const wordEnd = (index + 1) / total;

  const opacity = useTransform(scrollYProgress, [wordStart, wordEnd], [0.2, 0.95]);
  const y = useTransform(scrollYProgress, [wordStart, wordEnd], [18, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className="inline-block mr-2"
      aria-hidden={false}
    >
      {word}
    </motion.span>
  );
};

const AnimatedText = ({ text, className = "" }) => {
  const ref = useRef(null);
  const words = text.split(" ").filter(Boolean); // avoid empty words

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end 60%"],
  });

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => (
        <Word
          key={index}
          word={word}
          index={index}
          total={words.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  );
};

export default AnimatedText;

import Image from "next/image";
import { motion } from "framer-motion";
import { hostGrotesk } from "@/app/layout";

const PhotoCard = ({ title, description, image, position, border }) => {
  return (
    <motion.div
      className="w-full p-4 pt-10 flex items-center justify-center relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.2 }}
      style={{ willChange: "transform, opacity" }}
    >
      <div
        className={`flex items-center w-11/12 ${
          border === "ok" ? "border-b border-neutral-600" : ""
        } p-5 gap-8 md:gap-20 pb-7 ${
          position === "left"
            ? "flex-col md:flex-row-reverse"
            : "flex-col md:flex-row"
        }`}
      >
        <div className="w-full md:w-2/5">
          <Image
            src={image}
            alt="Photo Card"
            width={450}
            height={100}
            className="rounded h-45 object-cover w-full"
          />
        </div>
        <div className="w-full md:w-3/5 h-full flex flex-col gap-5 justify-between ">
          <h3 className="text-white/80 text-6xl font-bold">{title}</h3>
          <p className={`text-white/60 text-sm ${hostGrotesk.className}`}>
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PhotoCard;

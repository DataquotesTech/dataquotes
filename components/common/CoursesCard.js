import { hostGrotesk } from "@/app/fonts";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Course data
const coursesData = [
  {
    id: 0,
    title: "Data Analytics",
    description:
      "Master the art of data analysis and visualization to uncover business insights and drive strategic decisions.",
    image: "/data-analytics.webp",
    skills: ["SQL", "Python", "Excel", "Power BI", "Adv BI"],
    link: "/edtech/courses/data-analytics",
    color: "blue",
  },
  {
    id: 1,
    title: "Python Full Stack",
    description:
      "Build scalable web applications from frontend to backend using Python, Django, and React with industry best practices.",
    image: "/python.png",
    skills: ["Python", "Django", "React", "PostgreSQL", "Docker"],
    link: "/edtech/courses/python-full-stack-development",
    color: "blue",
  },
  {
    id: 2,
    title: "Data Science",
    description:
      "Transform raw data into actionable insights and drive business decisions with cutting-edge data science techniques.",
    image: "/data-science.webp",
    skills: ["Python", "Pandas", "Machine Learning", "SQL", "Statistics"],
    link: "/edtech/courses/data-science",
    color: "purple",
  },
];

const SquishyCard = () => {
  return (
    <section className=" sm:px-6 md:px-8 lg:px-13 py-8 sm:py-12">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {coursesData.map((course) => (
          <Card key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

const Card = ({ course }) => {
  return (
    <motion.div
      whileHover="hover"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hover: {
          scale: 1.01,
          y: -2,
        },
      }}
      className="relative h-100 w-full shrink-0 overflow-hidden rounded-xl bg-black border-2 border-neutral-600/45"
      style={{ willChange: "transform" }}
    >
      <div className="relative z-10 text-white w-full">
        <Image
          src={course.image}
          alt={course.title}
          width={450}
          height={100}
          className="rounded-t h-35 object-cover w-full"
        />
        <motion.span
          initial={{ scale: 0.9 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          className="my-2 block origin-top-left font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.2] px-3"
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl">{course.title}</h1>
        </motion.span>
        <div className="flex flex-col gap-3 sm:gap-4">
          <p
            className={`text-xs sm:text-sm ${hostGrotesk.className} px-3 mb-2 text-neutral-400`}
          >
            {course.description}
          </p>
          <div
            className={`text-xs sm:text-sm ${hostGrotesk.className} flex flex-wrap gap-1 px-3 text-neutral-400 `}
          >
            What You Learn:{" "}
            {course.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-neutral-600/40 px-1 sm:px-2 rounded-full text-neutral-400 text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Link href={course.link}>
        <button
          className={`${hostGrotesk.className} absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 z-20 rounded border-2 border-white bg-white py-1.5 sm:py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white text-xs sm:text-sm`}
        >
          View Details
        </button>
      </Link>
      <Background />
    </motion.div>
  );
};

const Background = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 1.2,
        },
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.7,
            y: -15,
          },
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
          delay: 0.1,
        }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="#262626"
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 1.5,
            y: -15,
          },
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
          delay: 0.1,
        }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="#262626"
      />
    </motion.svg>
  );
};

export default SquishyCard;

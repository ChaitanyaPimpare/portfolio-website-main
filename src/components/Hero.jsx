import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  // "Java Developer",
  "Full Stack Developer",
   "Python Developer",
  "React Developer",
  // "Node.js Developer",
 
];

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(roles[index].substring(0, subIndex + 1));
        setSubIndex(subIndex + 1);

        if (subIndex === roles[index].length) {
          setDeleting(true);
        }
      } else {
        setText(roles[index].substring(0, subIndex - 1));
        setSubIndex(subIndex - 1);

        if (subIndex === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <section
      id="home"
      className="min-h-screen bg-[#f7f7f7] flex items-center justify-center px-6 pt-24 md:pt-0"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 items-center gap-10 mt-10 md:mt-0">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">

          {/* Hello Tag */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-white px-4 py-1 rounded-full shadow text-sm mb-4"
          >
            Hello!
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight"
          >
            I’m <span className="text-orange-500">Chaitanya</span>,

            {/* Typing Container */}
            <div className="relative h-[50px] md:h-[60px] mt-2 overflow-hidden">

              {/* Invisible placeholder */}
              <span className="opacity-0 select-none">
                Full Stack Developer 
                {/* Java Developer */}
              </span>

              {/* Animated Text */}
              <span className="absolute left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 top-0 whitespace-nowrap">
                {text}
                <span className="animate-pulse">|</span>
              </span>

            </div>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-gray-600 max-w-md mx-auto md:mx-0"
          >
           Python Full Stack Developer skilled in Python, FastAPI, Flask, React.js, REST APIs, and PostgreSQL, with hands-on experience building AI-powered applications and integrating LLMs using LangGraph and Groq.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 mt-6 bg-white/30 backdrop-blur-md p-2 rounded-full border border-white/40 w-fit mx-auto md:mx-0 shadow-lg"
          >
         <button
  onClick={() =>
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  className="bg-orange-500 text-white px-6 py-2 rounded-full shadow hover:scale-105 transition"
>
  Portfolio ↗
</button>
            <button className="text-gray-700 px-6 py-2 rounded-full hover:bg-white/40 transition">
              Hire Me
            </button>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-gray-700 font-semibold text-center md:text-left"
          >
            Fresher | Internship Experience
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >

          {/* BACK CIRCLE */}
          <div className="absolute w-60 h-60 md:w-80 md:h-80 bg-orange-200 rounded-full bottom-0"></div>

          {/* GLOW */}
          <div className="absolute w-52 h-52 md:w-72 md:h-72 bg-orange-300 rounded-3xl blur-3xl opacity-30 bottom-0"></div>

          {/* IMAGE CARD */}
          <div className="
            w-[260px] h-[300px]
            sm:w-[300px] sm:h-[350px]
            md:w-[390px] md:h-[430px]
            rounded-[30px]
            overflow-hidden
            relative z-10
            border border-white/20
            shadow-[0_20px_60px_rgba(0,0,0,0.5)]
            backdrop-blur-xl
            hover:scale-105
            transition duration-500
          ">

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>

            <img
              src="/image1.jpeg"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

        </motion.div>
      </div>
    </section>
  );
}
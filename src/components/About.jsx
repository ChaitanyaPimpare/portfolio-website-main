import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-[#f5f5f5] px-6 md:px-16 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-orange-500">Me</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            Full Stack Developer with hands-on experience building production-ready web applications using React, Node.js, Express.js, Python Flask, REST APIs, and AWS.
          </p>

          <p className="text-gray-500 mb-8">
            I specialize in building scalable backend systems, clean UI
            experiences, and efficient APIs that solve real-world problems.
          </p>

          {/* BUTTON */}
          <a
            href="https://drive.google.com/file/d/1lwLZov_dBABqXqeHarCccqm6oqNwG_zs/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:bg-orange-600 transition flex items-center gap-2">
              Resume ↗
            </button>
          </a>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 mt-10 text-2xl text-gray-600">
            <a
              href="https://github.com/ChaitanyaPimpare"
              className="hover:text-black transition transform hover:scale-125"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/chaitanyapimpare"
              className="hover:text-blue-600 transition transform hover:scale-125"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:chaitanyapimpare2003@gmail.com"
              className="hover:text-red-500 transition transform hover:scale-125"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-80 h-80">

            {/* BACKGROUND SHAPE */}
            <div className="absolute inset-0 bg-orange-400 rounded-full scale-110 blur-xl opacity-40"></div>

            {/* BORDER RING */}
            <div className="absolute inset-0 border-[6px] border-white rounded-full"></div>

            {/* IMAGE */}
            <img
              src="/image1.jpeg"
              alt="profile"
              className="relative w-full h-full object-cover rounded-full shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
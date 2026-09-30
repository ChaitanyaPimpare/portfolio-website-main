import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <section id="contact" className="relative mt-0">

      {/*  CURVED TOP */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[100px]"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#111"
            d="M0,192L80,170.7C160,149,320,107,480,96C640,85,800,107,960,128C1120,149,1280,171,1360,181.3L1440,192V0H0Z"
          ></path>
        </svg>
      </div>

      {/* MAIN FOOTER */}
      <div className="bg-gradient-to-r from-[#111] to-[#1a1a1a] text-white pt-32 pb-10 px-6 md:px-16 rounded-t-[40px]">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Let's Connect there
          </h2>

          <a
            href="mailto:chaitanyapimpare2003@gmail.com"
            className="bg-orange-500 px-5 py-2 rounded-full hover:scale-105 transition"
          >
            Hire me →
          </a>
        </div>

        {/* LINE */}
        <div className="border-t border-gray-700 mb-10"></div>

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* LEFT */}
          <div>
            <h3 className="text-lg font-bold mb-3">Chaitanya</h3>

            <p className="text-gray-400 text-sm">
             Full Stack Developer skilled in React.js, Node.js, Express.js, and Python Flask, building scalable web applications and REST APIs to solve real-world problems.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-4 text-xl">
  <a
    href="https://github.com/ChaitanyaPimpare"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-gray-700 hover:scale-110 transition"
  >
    <FaGithub />
  </a>

  <a
    href="https://linkedin.com/in/chaitanyapimpare"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-600 hover:scale-110 transition"
  >
    <FaLinkedin />
  </a>

  <a
    href="mailto:chaitanyapimpare2003@gmail.com"
    className="hover:text-red-500 hover:scale-110 transition"
  >
    <FaEnvelope />
  </a>
</div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="font-semibold mb-3">Navigation</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>+91 7219110302</li>
              <li>chaitanyapimpare2003@gmail.com</li>
              <li>Pune, Maharashtra</li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="font-semibold mb-3">Let’s Stay Connected</h4>

            <div className="flex bg-gray-800 rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent px-4 py-2 outline-none text-sm w-full"
              />
              <button className="bg-orange-500 px-4">
                →
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-700 mt-10 pt-4 flex flex-col md:flex-row justify-between text-gray-500 text-sm">
          <p>© 2026 Chaitanya Pimpare. All Rights Reserved.</p>

          <div className="flex gap-4">
            <span>User Terms & Conditions</span>
            <span>|</span>
            <span>Privacy Policy</span>
          </div>
        </div>

      </div>
    </section>
  );
}
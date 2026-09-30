import { motion } from "framer-motion";

export default function WhyHireMe() {
  return (
    <section className="py-24 bg-[#f3f3f3] px-6 md:px-16">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE (STATS CARD) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white rounded-3xl p-8 shadow-xl grid grid-cols-2 gap-6"
        >
          {/* STAT 1 */}
          <div>
            <h3 className="text-3xl font-bold text-orange-500">5+</h3>
            <p className="text-gray-500 text-sm">Full Stack Projects</p>
          </div>

          {/* STAT 2 */}
          <div>
            <h3 className="text-3xl font-bold text-orange-500">3+</h3>
            <p className="text-gray-500 text-sm">Live Deployed Apps</p>
          </div>

          {/* STAT 3 */}
          <div>
            <h3 className="text-3xl font-bold text-orange-500">99%</h3>
            <p className="text-gray-500 text-sm">Uptime Systems</p>
          </div>

          {/* STAT 4 */}
          <div>
            <h3 className="text-3xl font-bold text-orange-500">10+</h3>
            <p className="text-gray-500 text-sm">Technologies Used</p>
          </div>

          {/* TECH BADGES */}
          <div className="col-span-2 flex flex-wrap gap-2 mt-4">
            {["React", "Flask", "Spring Boot", "AWS", "MySQL"].map((tech) => (
              <span
                key={tech}
                className="bg-gray-200 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why <span className="text-orange-500">Hire Me?</span>
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            I build production-ready full-stack applications with clean architecture, 
            secure APIs, and scalable backend systems. Experienced in deploying real-world 
            projects on AWS with performance optimization and debugging.
          </p>

          {/* HIGHLIGHTS */}
          <ul className="space-y-3 text-gray-700">
            <li>✔ Built scalable e-commerce platform (FX-ALGO)</li>
            <li>✔ Designed REST APIs & authentication systems</li>
            <li>✔ Deployed apps using AWS, Nginx, Gunicorn</li>
            <li>✔ Strong problem-solving with DSA</li>
          </ul>

          {/* BUTTON */}
          <button className="mt-6 border border-gray-400 px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition">
            Hire me →
          </button>
        </motion.div>

      </div>
    </section>
  );
}
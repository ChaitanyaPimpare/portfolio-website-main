import { motion } from "framer-motion";

const experiences = [
  {
    company: "Encegen AI Labs",
    location: "Pune",
    date: "Oct 2025 - Apr 2026",
    role: "Software Development Intern",
    desc: "Developed full-stack applications using React.js, Python Flask, REST APIs, and MySQL, with deployment experience on AWS EC2 and Nginx.",
  },
  {
    company: "Freelance / Client Projects",
    location: "Remote",
    date: "2024 - Present",
    role: "Full Stack Developer",
    desc: "Built full-stack applications including FX-ALGO, integrating backend APIs, authentication, database operations, and multiple payment services.",
  },
  {
    company: "Personal Projects",
    location: "Self",
    date: "2023 - 2024",
    role: "Backend & Web Developer",
    desc: "Developed projects including a Job Recommendation System and CSC Management System using Python Flask, Java Spring Boot, and SQL databases.",
  },
];

export default function Experience() {
  return (
    <section id="experience"className="py-24 bg-[#f3f3f3] px-6 md:px-16">

      {/* HEADER */}
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
        My <span className="text-orange-500">Work Experience</span>
      </h2>

      <div className="relative max-w-5xl mx-auto">

        {/* VERTICAL LINE */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>

        {/* TIMELINE ITEMS */}
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-16 flex items-center justify-between w-full"
          >

            {/* LEFT SIDE */}
            <div className="w-1/2 pr-8 text-right">
              <h3 className="font-semibold text-gray-800">
                {exp.company}, {exp.location}
              </h3>
              <p className="text-sm text-gray-500">{exp.date}</p>
            </div>

            {/* DOT */}
            <div className="relative z-10">
              <div className="w-5 h-5 bg-orange-500 rounded-full border-4 border-white shadow"></div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-1/2 pl-8">
              <h3 className="font-semibold text-gray-800">
                {exp.role}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {exp.desc}
              </p>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}
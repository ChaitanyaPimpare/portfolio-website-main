import { motion } from "framer-motion";

const skills = [
 { name: "REACT", icon: "/icons/react.png" },
  { name: "JAVASCRIPT", icon: "/icons/js.png" },
  { name: "PYTHON", icon: "/icons/python.webp" },
  { name: "JAVA", icon: "/icons/java.png" }, 
  // { name: "SpringBoot", icon: "/icons/spring.svg" }, 
  { name: "Node", icon: "/icons/nodejs.svg" }, 
  { name: "TAILWIND CSS", icon: "/icons/tailwind.png" },
  { name: "GITHUB", icon: "/icons/github.png" },
  { name: "MYSQL", icon: "/icons/mysql.png" }, 
  { name: "AWS", icon: "/icons/aws.webp" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-[#0a0a0a] text-white overflow-hidden">

      {/* LEFT VERTICAL TEXT */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-3">
        <div className="w-[2px] h-20 bg-orange-400"></div>
        <p className="rotate-[-90deg] tracking-widest text-gray-400 text-sm">
          Skills
        </p>
      </div>

      {/* RIGHT SIDE LINES */}
      {/* <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 items-center">
        <div className="w-[2px] h-12 bg-gray-600"></div>
        <div className="w-[2px] h-12 bg-yellow-400"></div>
        <div className="w-[2px] h-12 bg-gray-600"></div>
      </div> */}

      {/* HEADER */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-5xl font-bold text-orange-400 mb-4">
          What I do
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
          Passionate Full Stack Developer building scalable applications using
          modern technologies like React,Python Flask,Node Express and cloud systems.
        </p>
      </div>

      {/* SKILL GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 px-6">

        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -8 }}
            className="bg-[#111] p-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-yellow-500/10 transition duration-300"
          >

            {/* ICON */}
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-14 h-14 object-contain mb-4"
            />

            {/* TEXT */}
            <p className="text-sm tracking-wide text-gray-300">
              {skill.name}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
}
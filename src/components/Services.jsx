import { motion } from "framer-motion";

const services = [
  {
    title: "Production-Ready Python Full Stack Development",
    desc: "Building and deploying scalable web applications using Python, Flask, FastAPI, and React, with REST APIs, SQL databases, and cloud deployment experience.",
    img: "/service1.webp",
  },
  {
    title: "Python API Development & System Integration",
    desc: "Designing secure REST APIs using Flask and FastAPI, implementing JWT authentication, integrating frontend-backend workflows, and handling database operations efficiently.",
    img: "/service2.jpg",
  },

{
  title: "Modern UI Development with React",
  desc: "Crafting visually appealing and responsive web interfaces using React, Tailwind CSS, and animations, ensuring intuitive UX, fast performance, and pixel-perfect design.",
  img: "/service3.png",
},
];

// 🌬️ Wind animation variant
// 🌬️ One-time wind effect
const windOnce = {
  initial: { x: 0, rotate: 0 },
  hover: (i) => ({
    x: [0, 12, -10, 0],       // left → right → back
    rotate: [0, 4, -4, 0],    // slight bend
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      delay: i * 0.1, // small stagger
    },
  }),
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* 🔥 CURVED CONTAINER */}
      <motion.div
  initial="initial"
  whileHover="hover"
  className="relative rounded-[50px] overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
>

  {/* 🌸 FLOWERS */}
<motion.img
  src="/flower1.png"
  custom={0}
  variants={windOnce}
  className="absolute top-10 left-10 w-44 opacity-80 origin-bottom"
/>

  <motion.img
    src="/flower2.png"
    custom={1}
    variants={windOnce}
    className="absolute top-3 right-60 w-24 opacity-80 origin-bottom"
  />

  <motion.img
    src="/flower3.png"
    custom={2}
    variants={windOnce}
    className="absolute bottom-3 right-10 w-60 opacity-80 origin-bottom"
  />
          {/* CONTENT */}
          <div className="relative p-10 text-white backdrop-blur-sm">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl font-bold">
                My <span className="text-orange-500">Services</span>
              </h2>

              <p className="text-gray-300 max-w-md text-sm">
                Delivering scalable, efficient and production-ready solutions 
                using modern technologies and best practices.
              </p>
            </div>

            {/* CARDS */}
            <div className="grid md:grid-cols-3 gap-6">

              {services.map((service, i) => (
               <motion.div
  key={i}
  whileHover={{ scale: 1.05, rotate: 1 }}
  className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 pb-16 overflow-hidden group shadow-xl"
>

  <h3 className="text-lg font-semibold mb-4">
    {service.title}
  </h3>

  <div className="bg-white/90 rounded-xl p-2 mb-6">
    <img src={service.img} className="rounded-lg w-full" />
  </div>

  <p className="text-gray-300 text-sm">
    {service.desc}
  </p>

  {/* ARROW */}
  <div className="absolute bottom-4 right-4">
    <div className="bg-orange-500 w-12 h-12 flex items-center justify-center rounded-full group-hover:rotate-45 transition">
      →
    </div>
  </div>

  {/* HOVER GLOW */}
  <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-10 transition rounded-3xl"></div>

</motion.div>
              ))}

            </div>

            {/* DOTS */}
            {/* <div className="flex justify-center mt-10 gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
            </div> */}

          </div>
        </motion.div>
      </div>
    </section>
  );
}
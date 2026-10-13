import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";


const projects = [
  {
    name: "FX-ALGO",
    desc: "E-commerce platform with authentication, multi-payment integration, and Telegram bot automation",
    link: "https://frontend-psi-seven-39.vercel.app/",
    github: "https://github.com/ChaitanyaPimpare",
    img: "/p1.png",
    tags: ["React", "Python", "Flask", "MySQL", "AWS"],
  },
  {
    name: "EasyHunt",
    desc: "Property document search system with advanced filtering and efficient data retrieval",
    link: "https://easyhunt.in/",
    github: "https://github.com/ChaitanyaPimpare",
    img: "/p2.png",
    tags: ["React", "Python", "Flask", "MySQL"],
  },
  {
  name: "AI-First CRM",
  desc: "AI-powered healthcare CRM for managing healthcare professional interactions with AI-assisted workflows.",
  link: "#",
  github: "https://github.com/ChaitanyaPimpare/AI-Healthcare-CRM",
  img: "/icon/image.png",
  tags: ["React", "FastAPI", "PostgreSQL", "LangGraph", "Groq API"],
},
{
  name: "Clinic Management System",
  desc: "Full-stack healthcare platform for appointment booking, doctor management, prescriptions, and patient records.",
  link: "https://clinic-management-system-sable.vercel.app/",
  github: "https://github.com/ChaitanyaPimpare/Clinic-Management-System",
  img: "/clinic.png",
  tags: ["React", "Python Flask", "SQLAlchemy", "REST APIs"],
},
  {
    name: "Easyhunt-Launching-Website",
    desc: "Product Lauching Website",
    link: "https://easy-hunt-landing-rho.vercel.app/",
    github: "https://github.com/ChaitanyaPimpare",
    img: "/p6.png",
    tags: ["JavaScript", "React"],
  },
  {
    name: "Varasa",
    desc: "Heritage research website with admin panel",
    link: "https://varasa-main-six.vercel.app/",
    github: "https://github.com/ChaitanyaPimpare",
    img: "/p3.png",
    tags: ["React", "Flask"],
  },
  
  {
    name: "Billing Software",
    desc: "Spring Boot + React system",
    link: "#",
    github: "#",
    img: "/p5.png",
    tags: ["Spring Boot", "React"],
  },
  {
    name: "Escapenormie-FRONTEND",
    desc: "Modern UI frontend oF E-learning website ",
    link: "https://clone-taupe-nine.vercel.app/",
    github: "https://github.com/ChaitanyaPimpare",
    img: "/p4.png",
    tags: ["JavaScript", "React"],
  },
  {
  name: "Old Portfolio Website",
  desc: "A personal portfolio website showcasing my projects, skills, and contact information with a responsive and clean user interface.",
  link: "https://chaitanyapimpare.github.io/Portfolio-Website/",
  github: "https://github.com/ChaitanyaPimpare",
  img: "/portfolio.png",
  tags: ["JavaScript", "HTML", "CSS"],
}
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black text-white relative overflow-hidden">

      {/* ORANGE GLOW BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-500/10 blur-3xl"></div>

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          Let’s have a look at my{" "}
          <span className="text-orange-500">Portfolio</span>
        </h2>

        {/* FIXED SEE ALL BUTTON */}
      <a
  href="https://github.com/ChaitanyaPimpare"
  target="_blank"
  rel="noopener noreferrer"
  className="relative z-20 group overflow-hidden bg-orange-500 text-white px-6 py-2 rounded-full text-sm flex items-center justify-center"
>

  {/* 🌀 Rotating Ring */}
  <span className="absolute inset-0 rounded-full border border-white/30 opacity-0 group-hover:opacity-100 group-hover:animate-spin pointer-events-none"></span>

  {/* TEXT */}
  <span className="transition-all duration-300 group-hover:opacity-0 group-hover:scale-75">
    See All →
  </span>

  {/* ICON */}
  <span className="absolute opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 flex items-center justify-center">
    <FaGithub size={18} />
  </span>

</a>
      </div>

      {/* ARROWS */}
      <div className="absolute left-6 top-1/2 z-50 -translate-y-1/2">
        <button className="swiper-button-prev-custom bg-white/10 p-3 rounded-full hover:bg-orange-500 transition">
          <FaArrowLeft />
        </button>
      </div>

      <div className="absolute right-6 top-1/2 z-50 -translate-y-1/2">
        <button className="swiper-button-next-custom bg-white/10 p-3 rounded-full hover:bg-orange-500 transition">
          <FaArrowRight />
        </button>
      </div>

      {/* SLIDER */}
      <Swiper
        modules={[Autoplay, Navigation]}
        centeredSlides={true}
        loop={true}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="px-10"
      >
        {projects.map((p) => (
          <SwiperSlide key={p.name}>
            {({ isActive }) => (
              <motion.div
                className={`relative rounded-2xl overflow-hidden shadow-xl flex flex-col h-full transition-all duration-500 ${
                  isActive
                    ? "scale-100 opacity-100"
                    : "scale-90 opacity-40 blur-[1px]"
                }`}
              >

                {/* ORANGE GLOW */}
                {isActive && (
                  <div className="absolute inset-0 bg-orange-500/10 blur-2xl"></div>
                )}

                {/* IMAGE */}
                <div className="h-48 overflow-hidden relative group">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  {/* HOVER OVERLAY */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">

                    {/* LIVE */}
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-500 px-4 py-2 rounded-full text-sm hover:scale-105 transition"
                    >
                      Live
                    </a>

                    {/* GITHUB */}
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black p-3 rounded-full hover:scale-110 transition"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-4 flex flex-col justify-between flex-grow bg-[#111]">
                  <div>
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                      {p.desc}
                    </p>
                  </div>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/10 px-3 py-1 text-xs rounded-full hover:bg-orange-500 transition"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
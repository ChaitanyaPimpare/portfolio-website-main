import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function MarqueeBar() {
  const controls = useAnimation();

  const items = [
    "Full Stack Development",
    "React.js",
    "Node.js",
    "Flask APIs",
    "Express.js",
    "AWS Deployment",
    "REST APIs",
    "Authentication Systems",
    "Database Design",
    "E-commerce Development",
    "UI/UX Design",
  ];

  // START ANIMATION
  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration: 15,
        ease: "linear",
      },
    });
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-orange-500 py-3 border-y-4 border-white">

      {/* EDGE FADE EFFECT */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-orange-500 to-transparent z-20"></div>
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-orange-500 to-transparent z-20"></div>

      {/* MARQUEE */}
      <motion.div
        className="flex gap-10 whitespace-nowrap font-semibold text-lg relative z-10"
        style={{
          transform: "rotate(-2deg)",
          background: "linear-gradient(90deg, #fff, #ffe0c0, #fff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
        animate={controls}
        onMouseEnter={() =>
          controls.start({
            x: ["0%", "-50%"],
            transition: { repeat: Infinity, duration: 25, ease: "linear" },
          })
        }
        onMouseLeave={() =>
          controls.start({
            x: ["0%", "-50%"],
            transition: { repeat: Infinity, duration: 15, ease: "linear" },
          })
        }
      >
        {[...items, ...items].map((item, index) => (
          <span key={index} className="flex items-center gap-3">
            {item}
            <span className="text-white">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
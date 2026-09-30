import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";


export default function Loader({ onFinish }) {
  const roles = [
    "Full Stack Developer",
    "Python Devloper",
    "React Developer"
    
   
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 1000);

    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => {
      clearInterval(roleInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-[#0f0f0f] flex items-center justify-center z-[9999]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center">

        {/* LOGO */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-white mb-6"
        >
          Chaitanya<span className="text-white-500">Pimpare.</span>
        </motion.div>

        {/* ROTATING TEXT */}
        <AnimatePresence mode="wait">
          <motion.h2
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg text-gray-400"
          >
            {roles[index]}
          </motion.h2>
        </AnimatePresence>

        {/* LOADING BAR */}
        <div className="w-48 h-[2px] bg-gray-800 mt-6 overflow-hidden mx-auto">
          <motion.div
            className="h-full bg-orange-500"
            initial={{ width: 1 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false); // ✅ for mobile

  const leftLinks = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
  ];

  const rightLinks = [
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  // Scroll detect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile detect
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScrollTo = (id, name) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActive(name);
    }
  };

  return (
    <>
      <div className="fixed w-full flex justify-center top-2 z-50">

        {/* NAV */}
        <motion.div
          initial={false}
          animate={{
            width: isMobile ? "90%" : scrolled ? "600px" : "80px",
            paddingLeft: isMobile ? "16px" : scrolled ? "20px" : "0px",
            paddingRight: isMobile ? "16px" : scrolled ? "20px" : "0px",
          }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
          className={`
            ${isMobile ? "bg-white text-black" : "bg-black text-white"}
            rounded-full h-[60px] flex items-center justify-between overflow-hidden shadow-xl
          `}
        >

          {/* LEFT (DESKTOP) */}
          {!isMobile && (
            <motion.div
              animate={{ x: scrolled ? 0 : -200, opacity: scrolled ? 1 : 0 }}
              className="flex gap-1"
            >
              {leftLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id, link.name)}
                  className={`px-4 py-1 rounded-full transition ${
                    active === link.name
                      ? "bg-orange-500"
                      : "hover:text-orange-400"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </motion.div>
          )}

          {/* LOGO */}
          <div
            className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
            onMouseEnter={() => !isMobile && setHovered(true)}
            onMouseLeave={() => !isMobile && setHovered(false)}
            onClick={() => isMobile && setShowTooltip(!showTooltip)} // ✅ mobile click
          >
            <motion.img
              src="/cp-logo.svg"
              className="w-10 h-10 cursor-pointer z-10"
              animate={{ scale: scrolled ? 1 : 1.2 }}
              whileHover={{ rotate: 10 }}
            />

            {/* TOOLTIP (DESKTOP + MOBILE) */}
            {(hovered || showTooltip) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 40 }}
                className={`
                  absolute top-full mt-2 px-4 py-2 rounded-xl text-sm shadow-lg whitespace-nowrap
                  ${isMobile ? "bg-white text-black" : "bg-black text-white"}
                `}
              >
                <span className="text-gray-400 text-xs">Devloped by</span>
                <br />
                <span className="font-semibold">Chaitanya Pimpare</span>
              </motion.div>
            )}
          </div>

          {/* RIGHT (DESKTOP) */}
          {!isMobile && (
            <motion.div
              animate={{ x: scrolled ? 0 : 200, opacity: scrolled ? 1 : 0 }}
              className="flex gap-2"
            >
              {rightLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id, link.name)}
                  className={`px-3 py-1 rounded-full transition ${
                    active === link.name
                      ? "bg-orange-500"
                      : "hover:text-orange-400"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </motion.div>
          )}

          {/* HAMBURGER */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl z-20"
            >
              ☰
            </button>
          )}
        </motion.div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            className="fixed bottom-0 left-0 w-full bg-black text-white p-6 rounded-t-3xl z-40"
          >
            {[...leftLinks, ...rightLinks].map((link) => (
              <div
                key={link.id}
                onClick={() => {
                  handleScrollTo(link.id, link.name);
                  setMenuOpen(false);
                }}
                className="py-4 border-b border-black/10 text-lg"
              >
                {link.name}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
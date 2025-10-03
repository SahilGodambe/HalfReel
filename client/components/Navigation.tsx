import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const sections = [
  { label: "Home", route: "/" },
  { label: "About", route: "/about" },
  { label: "Work", route: "/work" },
  // { label: "Career", route: "/career" },
  { label: "Contact", route: "/contact" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll detection logic for hide/show navigation
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // scrolling down → hide
        setShowNav(false);
      } else {
        // scrolling up → show
        setShowNav(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (sec: { label: string; route: string }) => {
    setMenuOpen(false);
    if (location.pathname !== sec.route) {
      navigate(sec.route);
    }
  };

  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={showNav ? { y: 0, opacity: 1 } : { y: -40, opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="relative flex items-center justify-between px-4 md:px-6 py-4 overflow-x-hidden"
    >
      {/* Logo */}
      <img
        src="/halfreel.png"
        alt="HalfreelFilmsLogo"
        className="h-auto w-16 object-contain cursor-pointer z-50"
        onClick={() => navigate("/")}
      />

      {/* Hamburger Button */}

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
        className="w-12 h-12 flex items-center justify-center z-50"
      >
        <span
          className={`absolute h-[3px] w-8 bg-neon-yellow rounded transition-all duration-300 ease-in-out ${menuOpen ? "rotate-45 translate-y-2.5" : "-translate-y-2.5"
            }`}
        />
        <span
          className={`absolute h-[3px] w-8 bg-neon-yellow rounded transition-all duration-300 ease-in-out ${menuOpen ? "opacity-0" : "opacity-100"
            }`}
        />
        <span
          className={`absolute h-[3px] w-8 bg-neon-yellow rounded transition-all duration-300 ease-in-out ${menuOpen ? "-rotate-45 -translate-y-2.5" : "translate-y-2.5"
            }`}
        />
      </button>

      {/* Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-end justify-center pr-8 md:pr-24
          transition-all duration-500 ease-in-out
          ${menuOpen ? "translate-x-0 opacity-100 bg-neutral-900/90" : "translate-x-full opacity-0"}`}
      >
        <div className="flex flex-col items-end space-y-8 md:space-y-10 px-6 md:px-0">
          {sections.map((sec, index) => (
            <button
              key={index}
              onClick={() => handleClick(sec)}
              className={`text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-widest transform
                transition-colors duration-300 ease-in-out
                ${location.pathname === sec.route
                  ? "text-neon-yellow"
                  : "text-white hover:text-neon-yellow"
                }
                ${menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
                }`}
              style={{
                transitionDelay: menuOpen ? `${index * 80 + 100}ms` : "0ms",
              }}
            >
              {sec.label}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

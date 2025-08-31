// src/components/Navbar.tsx
import { useEffect, useRef, useState } from "react";
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion";

const Navbar = () => {
  // Navigation links
  const links = ["Home", "About", "Projects"];
  
  // State management
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Typing effect for brand name
  const fullBrand = "Tahmidul";
  const [brandText, setBrandText] = useState("");

  useEffect(() => {
    let typingInterval: number | null = null;
    let resetTimeout: number | null = null;

    const startTyping = () => {
      let i = 0;
      setBrandText(""); // clear before typing starts

      typingInterval = window.setInterval(() => {
        setBrandText(fullBrand.slice(0, i + 1)); // always slice from start
        i++;
        if (i >= fullBrand.length) {
          if (typingInterval) clearInterval(typingInterval);
          // Wait 5s then restart typing
          resetTimeout = window.setTimeout(() => {
            startTyping();
          }, 5000);
        }
      }, 150);
    };

    startTyping();

    return () => {
      if (typingInterval) clearInterval(typingInterval);
      if (resetTimeout) clearTimeout(resetTimeout);
    };
  }, []); // Remove fullBrand dependency since it's constant

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (menuOpen && e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      const sections = links.map((link) => {
        const el = document.getElementById(link.toLowerCase());
        if (!el) return { id: link.toLowerCase(), offsetTop: 0 };
        return { id: link.toLowerCase(), offsetTop: el.offsetTop };
      });

      const scrollPos = window.scrollY + 100;
      const current = sections.reverse().find((s) => scrollPos >= s.offsetTop);
      if (current) setActive(current.id);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen, links]);

  return (
    <nav className="w-full fixed top-0 z-50 bg-gradient-to-b from-bg to-[hsl(0,0%,5%)/80] backdrop-blur-md text-text">
      <div className="max-w-screen-2xl mx-auto px-8 py-8 flex items-center justify-between">
        {/* Left → Nav links (hidden on mobile, shown on desktop) */}
        <ul className="hidden lg:flex space-x-10 font-body font-[300] text-xl tracking-wide">
          {links.map((link) => {
            const id = link.toLowerCase();
            const isActive = active === id;
            return (
              <li key={id} className="relative group cursor-pointer">
                <a
                  href={`#${id}`}
                  className={`inline-block transition-colors duration-300 ${
                    isActive ? "text-accent" : "text-text "
                  }`}
                >
                  {link}
                </a>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-hover transition-all duration-300 group-hover:w-full" />
              </li>
            );
          })}
        </ul>

        {/* Typing Name */}
        <h1
          className="
            text-2xl md:text-3xl ml-1 font-brand font-bold text-text
            lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2
          "
        >
          {brandText}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{
              duration: 1.3, 
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block w-[2px] h-[1.1em] bg-accent ml-1 mb-1.5 align-middle"
          />
        </h1>

        {/* Resume button) */}
        <motion.a
          href="/resume.pdf"
          download
          className="hidden lg:flex px-5 py-2 rounded-md font-body text-lg text-white
                     bg-gradient-to-r from-orange-500 via-orange-600 to-orange-400
                     bg-[length:300%_100%]
                     hover:scale-110 hover:shadow-lg hover:shadow-orange-500/25
                     transition-all duration-300 ease-in-out
                     items-center gap-2 relative overflow-hidden"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            boxShadow: [
              "0 4px 15px rgba(255, 140, 0, 0.2)",
              "0 8px 25px rgba(255, 140, 0, 0.4)",
              "0 4px 15px rgba(255, 140, 0, 0.2)"
            ]
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(255, 140, 0, 0.5)"
          }}
        >
          <LuDownload size={18} />
          Resume
        </motion.a>

        {/* Mobile hamburger (hidden on desktop) */}
        <button
          ref={buttonRef}
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden inline-flex items-center justify-center p-2 rounded-md 
                     hover:text-hover focus:outline-none focus-visible:ring-2 
                     focus-visible:ring-offset-2 focus-visible:ring-[--color-accent]"
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            animate={menuOpen ? { rotate: 90 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.path
              d="M4 7h16"
              animate={menuOpen ? { d: "M6 6L18 18" } : { d: "M4 7h16" }}
              transition={{ duration: 0.3 }}
            />
            <motion.path
              d="M4 12h16"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.1 }}
            />
            <motion.path
              d="M4 17h16"
              animate={menuOpen ? { d: "M6 18L18 6" } : { d: "M4 17h16" }}
              transition={{ duration: 0.3 }}
            />
          </motion.svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <motion.ul
          ref={menuRef}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden flex flex-col absolute right-8 mt-[-1rem] space-y-2 
                     bg-bg-light border border-text/20 rounded-lg shadow-2xl"
        >
          {links.map((link) => {
            const id = link.toLowerCase();
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-3 transition-colors relative
                    ${
                      active === id
                        ? "text-white text-center bg-[rgb(48,54,78)] rounded-lg shadow-inner-md"
                        : "text-text text-center hover:text-accent"
                    }
                  `}
                >
                  {link}
                </a>
              </li>
            );
          })}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;

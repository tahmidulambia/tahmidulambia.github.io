import React, { useEffect, useState } from "react";

const Navbar = () => {
  const links = ["Home", "About", "Projects", "Resume"];
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => {
        const el = document.getElementById(link.toLowerCase());
        if (!el) return { id: link.toLowerCase(), offsetTop: 0 };
        return { id: link.toLowerCase(), offsetTop: el.offsetTop };
      });

      const scrollPos = window.scrollY + 100; // account for navbar height
      const current = sections.reverse().find((s) => scrollPos >= s.offsetTop);
      if (current) setActive(current.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Placeholder click handler — we'll wire this up to a slide-in panel next
  const openMobileMenu = () => {
    // TODO: open right-side panel
    console.log("open mobile menu");
  };

  return (
    <nav className="w-full fixed top-0 z-50 bg-nav-bg text-text ">
      <div className="max-w-screen-2xl mx-auto px-8 py-8 flex items-center justify-between ">
        {/* Brand */}
        <h1 className="text-2xl md:text-3xl font-display font-bold text-accent ">
          Tahmidul 
        </h1>

        {/* Mobile hamburger (shown by default, hidden on lg+) */}
        <button
          type="button"
          onClick={openMobileMenu}
          className="lg:hidden inline-flex items-center justify-center p-2 rounded-md hover:text-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[--color-accent]"
          aria-label="Open menu"
          aria-expanded="false"
        >
          {/* Inline SVG hamburger icon (inherits currentColor) */}
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>

        {/* Desktop links (hidden by default, shown on lg+) */}
        <ul className="hidden lg:flex space-x-10 font-body font-[300] text-xl tracking-wide">
          {links.map((link) => {
            const id = link.toLowerCase();
            const isActive = active === id;

            return (
              <li key={id} className="relative group cursor-pointer">
                <a
                  href={`#${id}`}
                  className={`inline-block transition-colors duration-300 ${
                    isActive ? "text-accent" : "text-text hover:text-hover"
                  }`}
                >
                  {link}
                </a>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-hover transition-all duration-300 group-hover:w-full" />
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

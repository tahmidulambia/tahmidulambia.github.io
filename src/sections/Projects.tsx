import { useState, useRef, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  

const projects = [
    {
      image: "/src/assets/personal-picture.jpg",
      title: "Project One",
      description: "An interactive choropleth map visualizing Education and Financial data across the US.",
      technologies: ["HTML", "CSS", "JS", "d3.js"],
      demoLink: "https://yourdemo.com",
      codeLink: "https://github.com/yourrepo",
    },
    {
      image: "/src/assets/personal-picture.jpg",
      title: "Project Two",
      description: "Another project with a different focus.",
      technologies: ["Node.js", "Express", "MongoDB"],
      demoLink: "https://yourdemo.com",
      codeLink: "https://github.com/yourrepo",
    },
    {
      image: "/src/assets/personal-picture.jpg",
      title: "Project Three",
      description: "Another project with a different focus.",
      technologies: ["Node.js", "Express", "MongoDB"],
      demoLink: "https://yourdemo.com",
      codeLink: "https://github.com/yourrepo",
    }, 
    {
      image: "/src/assets/personal-picture.jpg",
      title: "Project Four",
      description: "Another project with a different focus.",
      technologies: ["Node.js", "Express", "MongoDB"],
      demoLink: "https://yourdemo.com",
      codeLink: "https://github.com/yourrepo",
    },
    // ... more projects
  ];
  // Track scroll position → update activeIndex
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.offsetWidth * 0.85; // matches w-[85%]
    const index = Math.round(scrollLeft / (cardWidth + 24)); // 24px = gap-6
    setActiveIndex(index);
  };

  return (
    <section id="projects" className="bg-bg text-text min-h-screen px-8 pt-28 sm:pt-15 pb-20">
      <div className="max-w-screen-2xl mx-auto w-full">
        <h2 className="font-display font-bold text-3xl lg:text-4xl text-center mb-12">
          Projects
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid gap-8 sm:grid-cols-2 xl:grid-cols-3 justify-items-center">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4"
          >
            {projects.map((project, idx) => (
              <div key={idx} className="snap-center flex-shrink-0 w-[85%] sm:w-[80%]">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {projects.map((_, idx) => (
              <span
                key={idx}
                className={`h-2 w-2 rounded-full transition-colors ${
                  idx === activeIndex ? "bg-accent" : "bg-text/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

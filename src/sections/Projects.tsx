import { useState, useRef } from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  

const projects = [
    {
      image: "/src/assets/Choropleth-project.png",
      title: "US Data Choropleth Map",
      description: "An interactive choropleth map visualizing Education and Financial data across all US states and counties.",
      technologies: ["HTML5", "CSS3", "JavaScript", "d3.js", "TopoJSON"],
      demoLink: "https://raw.githack.com/TAmbiaT/US-Data-Choropleth-Map/main/index.html",
      codeLink: "https://github.com/TAmbiaT/US-Data-Choropleth-Map",
    },
    {
      image: "/src/assets/Algorithm-Calc-project.png",
      title: "Algorithm Playground",
      description: "Interactive calculator implementing Min-Cost Triangulation and Max Flow algorithms with real-time computation and modern UI.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Vercel"],
      demoLink: "https://flow-triangulation-calculator.vercel.app/",
      codeLink: "https://github.com/TAmbiaT/algorithm-practice-java",
    },
    {
      image: "/src/assets/Valentines-project.png",
      title: "Valentines Spending Analysis",
      description: "Data visualizations exploring Valentine's Day spending trends across demographics. Reveals surprising consumer behavior patterns from 2010-2022.",
      technologies: ["HTML5", "CSS3", "JavaScript", "d3.js", "CSV"],
      demoLink: "https://raw.githack.com/TAmbiaT/Valentines-Spending-Visualization/main/index.html",
      codeLink: "https://github.com/TAmbiaT/Valentines-Spending-Visualization",
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

// src/sections/Projects.tsx
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      image: "/src/assets/personal-picture.jpg",
      title: "Project One",
      description: "An interactive choropleth map visualizing Education and Financial data across the US.",
      technologies: ["HTML", "CSS", "JS", "D3.js"],
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

  return (
    <section id="projects" className="bg-bg text-text  min-h-screen 
             px-8 pt-28 sm:pt-25 pb-20">
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
        <div
          className="md:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory
                     scrollbar-hide px-4"
        >
          {projects.map((project, idx) => (
            <div key={idx} className="snap-center flex-shrink-0 w-[85%] sm:w-[80%]">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

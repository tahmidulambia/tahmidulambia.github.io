// src/components/ProjectCard.tsx
import { FaGithub } from "react-icons/fa";

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  demoLink: string;
  codeLink: string;
};

export default function ProjectCard({
  image,
  title,
  description,
  technologies,
  demoLink,
  codeLink,
}: ProjectCardProps) {
  return (
    <div
      className="flex flex-col rounded-2xl border border-[color-mix(in_oklab,var(--color-text)_10%,transparent)] 
                 bg-nav-bg/80 backdrop-blur-sm shadow-md overflow-hidden 
                 hover:shadow-lg transition-shadow"
    >
      {/* Project Image */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Technologies Pills */}
      <div className="flex flex-wrap gap-2 px-4 py-3">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs sm:text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Title + Description */}
      <div className="px-4 flex flex-col gap-2 flex-grow">
        <h3 className="font-display font-bold text-lg sm:text-xl text-text">
          {title}
        </h3>
        <p className="font-body text-sm sm:text-base text-text/70 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center px-4 py-4 mt-auto gap-3">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 font-body font-medium px-4 py-2 text-center rounded-lg 
                     bg-accent text-bg hover:bg-hover transition-colors"
        >
          Live Demo
        </a>

        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 font-body font-medium px-4 py-2 flex items-center justify-center gap-2
                     rounded-lg border border-accent text-accent hover:bg-accent/90 hover:text-bg transition-colors"
        >
          <FaGithub className="text-lg" />
          Source Code
        </a>
      </div>
    </div>
  );
}

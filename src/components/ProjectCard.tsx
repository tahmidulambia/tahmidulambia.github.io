// src/components/ProjectCard.tsx
import { FaGithub, FaBroadcastTower} from "react-icons/fa";

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  demoLink: string;
  codeLink: string;
};

export default function ProjectCard({ image, title, description, technologies, demoLink, codeLink }: ProjectCardProps) {
  return (
    <div
        className="flex flex-col bg-bg/60 rounded-2xl border border-text/15
             shadow-md transition-transform duration-300 ease-in-out
             hover:scale-[1.03] hover:shadow-lg cursor-pointer lg:hover:scale-105
             w-full max-w-sm sm:max-w-lg md:max-w-2xl h-full min-h-[28rem]"
                 
    >
      {/* Project image */}
      <div className="relative h-50 sm:h-60 md:h-70 w-full b">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
  <div className="flex flex-col flex-1 p-4">

      {/* Tech pills */}
      <div className="flex flex-wrap gap-2 p-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-lg text-xs lg:text-sm font-medium
                       bg-bg-light border border-accent/20 text-text/80
                       hover:bg-accent hover:text-bg transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Title + Description */}
      <div className="px-4 pb-4 flex flex-col flex-grow">
        <h3 className="font-display font-bold text-lg lg:text-2xl">{title}</h3>
        <p className="text-sm lg:text-base text-text/70 mt-2 flex-grow">{description}</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center px-4 pb-4 mt-auto">
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 lg:py-3 rounded-md border border-white/55 text-white
                     hover:bg-accent hover:text-bg transition-colors font-body text-sm flex items-center gap-2"
        >
          <FaBroadcastTower size={16} />
          <span>
           <span className="hidden md:inline">Live</span> Demo
          </span>
        </a>
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 px-4 py-2 lg:py-3 rounded-md border border-accent/75 text-white
                     hover:bg-accent hover:text-bg transition-colors font-body text-sm flex items-center gap-2"
        >
          <FaGithub size={16} />
          <span>

            <span className="hidden md:inline">Source</span> Code
          </span>
          </a>
        </div>
      </div>
    </div>
  );
}




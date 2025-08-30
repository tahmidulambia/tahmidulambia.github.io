// src/components/ProjectCard.tsx
import { FaGithub, FaBroadcastTower} from "react-icons/fa";
import ShimmerPill from "./ShimmerPill";
import type { ProjectCardProps } from "../types";

export default function ProjectCard({ 
  image, 
  title, 
  description, 
  technologies, 
  demoLink, 
  codeLink 
}: ProjectCardProps) {
  return (
    <div className="
      flex flex-col bg-bg/60 rounded-2xl border border-text/15
      shadow-md transition-all duration-400 ease-in-out
      hover:scale-[1.03] hover:shadow-lg cursor-pointer lg:hover:scale-105
      w-full max-w-sm sm:max-w-lg md:max-w-2xl h-full min-h-[28rem]
    ">
      {/* Project image */}
      <div className="relative h-50 sm:h-60 md:h-70 w-full rounded-2xl overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full" 
          loading="lazy"
        />
      </div>
  <div className="flex flex-col flex-1 p-4">

      {/* Tech pills */}
      <div className="flex flex-wrap gap-2 p-4">
        {technologies.map((tech) => (
        <ShimmerPill key={tech} text={tech} />

        ))}
      </div>

      {/* Title + Description */}
      <div className="px-4 pb-4 flex flex-col flex-grow">
        <h3 className="font-display font-bold text-lg lg:text-2xl">{title}</h3>
        <p className="text-sm lg:text-base text-text/70 mt-2 flex-grow mb-3">{description}</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center px-4 pb-4 mt-auto">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 lg:py-3 rounded-md border border-white/55 text-text
                     hover:bg-accent hover:border-accent hover:text-bg transition-all font-body text-sm flex items-center gap-2 duration-400"
        >
          <FaBroadcastTower size={16} />
          <span>
           <span className="hidden md:inline">Live</span> Demo
          </span>
        </a>
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 px-4 py-2 lg:py-3 rounded-md border border-accent/75 text-text
                     hover:bg-accent hover:text-bg transition-colors font-body text-sm flex items-center gap-2 duration-400"
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




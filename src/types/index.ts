// Centralized TypeScript types for the portfolio

export interface Project {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  demoLink: string;
  codeLink: string;
}

export interface ShimmerPillProps {
  text: string;
  className?: string;
}

export interface ProjectCardProps extends Project {}

export interface TechStackItem {
  icon: React.ReactNode;
  label: string;
}

// src/components/SkillsSection.tsx
import { FaDocker, FaFigma, FaJava } from "react-icons/fa";
import { SiPython, SiCplusplus, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiReact, SiTailwindcss, SiBootstrap, SiD3Dotjs, SiNodedotjs, SiFlask, SiMysql, SiSupabase, SiPytorch, SiScikitlearn, SiHuggingface, SiPandas, SiNumpy, SiJupyter, SiGit } from "react-icons/si";
import type { TechStackItem } from "../types";

const techStack: TechStackItem[] = [
  // Programming Languages
  { icon: <SiPython />, label: "Python" },
  { icon: <FaJava />, label: "Java" },
  { icon: <SiCplusplus />, label: "C++" },
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <SiTypescript />, label: "TypeScript" },
  // Frontend
  { icon: <SiHtml5 />, label: "HTML" },
  { icon: <SiCss3 />, label: "CSS" },
  { icon: <SiReact />, label: "React" },
  { icon: <SiTailwindcss />, label: "Tailwind" },
  { icon: <SiBootstrap />, label: "Bootstrap" },
  { icon: <SiD3Dotjs />, label: "D3.js" },
  // Backend & Database
  { icon: <SiNodedotjs />, label: "Node.js" },
  { icon: <SiFlask />, label: "Flask" },
  { icon: <SiMysql />, label: "MySQL" },
  { icon: <SiSupabase />, label: "Supabase" },
  // ML & Data Science
  { icon: <SiPytorch />, label: "PyTorch" },
  { icon: <SiScikitlearn />, label: "scikit-learn" },
  { icon: <SiHuggingface />, label: "Hugging Face" },
  { icon: <SiPandas />, label: "Pandas" },
  { icon: <SiNumpy />, label: "NumPy" },
  { icon: <SiJupyter />, label: "Jupyter" },
  // Development Tools
  { icon: <SiGit />, label: "Git" },
  { icon: <FaDocker />, label: "Docker" },
  { icon: <FaFigma />, label: "Figma" }
];

export default function SkillsSection() {

  return (
    <section className="bg-bg/60 rounded-2xl border 
                        border-text/15 shadow-lg
                        p-6 sm:p-8 w-full mx-auto max-w-2xl lg:mx-0 lg:max-w-none xl:max-h-[384px] ">
      {/* Section title */}
      <h3 className="font-display font-bold text-xl sm:text-2xl 3xl:text-3xl mb-8 text-center">
        Skills & Technologies
      </h3>

    
      {/* Tech Stack Grid */}
      <div className="grid grid-cols-4 gap-5 lg:grid-cols-6 lg:gap-4">
        {techStack.map(({ icon, label }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center text-sm opacity-70 hover:opacity-100 hover:text-accent transition-opacity"
          >
            <div className="text-3xl text-text">{icon}</div>
            <span className="mt-1">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

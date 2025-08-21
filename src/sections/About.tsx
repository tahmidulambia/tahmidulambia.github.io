// src/sections/About.tsx
import BioCard from "../components/BioCard";
import SkillsSection from "../components/SkillsSection";
import Interests from "../components/Interests"; 

export default function About() {
  return (
    <section id="about" className="bg-bg text-text min-h-screen flex items-center">
      {/* Section Container */}
      <div className="max-w-screen-2xl mx-auto px-8 pt-38 pb-32 lg:pt-30">
        {/* Desktop Grid Layout */}
        <div className="grid gap-8 lg:grid-cols-[25%_1fr] lg:gap-10">
          
          {/* Left Column → BioCard + Interests */}
          <div className=" lg:items-stretch flex flex-col gap-8 ">
            <BioCard />
            
            {/* Desktop-only placement */}
            <div className="hidden lg:block">
              <Interests />
            </div>
          </div>

          {/* Right Column Content */}
          <div className="flex flex-col justify-between gap-8 items-center lg:items-stretch ">
            
            {/* About Me section */}
            <article className="bg-bg/80 backdrop-blur-sm ">
              <h2 className="font-display text-center font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 mt-6 lg:mt-2 lg:text-start">
                About Me
              </h2>
              <p
                className="font-body text-sm sm:text-base xl:text-lg 2xl:text-xl text-text/80
                          leading-relaxed tracking-wide 
                          max-w-prose"
              >
                I am a <strong>recent Cornell Grad</strong> software developer passionate about building
                impactful and reliable applications. My experience spans <strong>frontend</strong> development 
                with HTML, CSS, JavaScript, TypeScript, React, and Tailwind CSS, and <strong>backend</strong> 
                work with SQL, Express.js, and MySQL2.  
                I’ve also worked on projects involving <strong>machine learning</strong> and 
                <strong> AI development</strong>, applying these technologies to solve real-world 
                challenges. I enjoy designing intuitive <strong>UI</strong> and creating systems 
                that are both performant and maintainable.
                <br /><br />
                I am actively seeking opportunities to apply my skills in a dynamic team environment where I can contribute to meaningful projects and continue to grow as a developer.
              </p>
            </article>

            {/* Mobile-only Interests placement */}
            <div className="lg:hidden">
              <Interests />
            </div>

            {/* Skills Section */}
            <SkillsSection />

          </div>
        </div>
      </div>
    </section>
  );
}

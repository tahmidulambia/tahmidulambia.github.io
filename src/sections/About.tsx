// src/sections/About.tsx
import BioCard from "../components/BioCard";
import SkillsSection from "../components/SkillsSection";
import Interests from "../components/Interests"; 

export default function About() {
  return (
    <section id="about" className="text-text min-h-screen flex items-center">
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
            <article className="backdrop-blur-sm ">
              <h2 className="font-display text-center font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 mt-6 lg:mt-0 lg:text-start">
                About Me
              </h2>
              <p
                className="font-body text-sm sm:text-base lg:text-lg  2xl:xl text-text/80
                          leading-relaxed tracking-wide text-center lg:text-left
                          max-w-[95%]"
              >
                I recently graduated from <strong>Cornell University</strong> with my 
                <strong> Bachelor’s degree in Computer Science</strong>, where I developed a strong foundation in 
                <strong> object-oriented programming</strong> and <strong> data structures &amp; algorithms</strong>. 
                I’ve applied these fundamentals through both independent and collaborative projects, gaining practical 
                experience in <strong> frontend development</strong>, <strong> backend systems</strong>, and building 
                <strong> AI-powered solutions</strong>.
                
                <span className = "block mt-3">
                I currently work as a <strong> Coding Instructor</strong> at <strong> KTBYTE</strong>, where I 
                teach students <strong>Java programming</strong> fundamentals and guide them through 
                <strong> creative coding projects</strong>. This experience has allowed me to strengthen both my 
                <strong> technical communication</strong> and <strong> leadership skills</strong>. Outside of teaching, 
                I’ve been deeply engaged with the rapidly evolving world of <strong> artificial intelligence</strong>. 
                I enjoy exploring <strong> emerging tools</strong> and experimenting with ways to integrate them into 
                <strong> real-world applications</strong>. My goal is to combine these technologies with my 
                <strong> CS background</strong> to build software that is not only <strong> innovative</strong> but also 
                <strong> scalable</strong>, <strong> secure</strong>, and <strong> impactful</strong>.
                </span>
                
                <span className = "block mt-3">
                I am eager to bring these <strong>skills and experiences</strong> into a 
                <strong> dynamic team environment</strong> where I can contribute to 
                <strong> meaningful projects</strong> while continuing to learn and grow as a developer.
                </span>
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



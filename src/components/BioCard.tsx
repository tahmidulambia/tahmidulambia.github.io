// src/components/BioCard.tsx
import { LuMail, LuMapPin, LuDownload, LuSchool, LuGraduationCap } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function BioCard() {
  return (
    <div
      className="relative bg-bg/60 text-text p-6 shadow-lg lg:sticky 
            rounded-2xl border border-text/15 w-full mx-auto max-w-md" 
    >
      {/* Profile Image - only overlaps in mobile */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 lg:top-0 flex justify-center">
        <img
          src="/headshot.png"
          alt="Tahmidul Ambia"
          className="
            w-32 h-32 sm:w-38 sm:h-38
            object-cover rounded-full
            border-3 border-white/80
            lg:border-0
          "
          loading="lazy"
        />
      </div>

      {/* Card Content */}
      <div className="mt-14  lg:mt-0 flex flex-col gap-6">
        {/* Name + Title */}
        <div className="text-center mt-5 sm:mt-10 lg:mt-5">
          <h2 className="font-display text-2xl font-bold">Tahmidul Ambia</h2>
          <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-text mt-1">
            <LuMapPin size={16} />
            <span>New York City</span>
          </div>    
    </div>

        {/* Info List */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <LuSchool size={18} className="text-accent" />
            <span className="font-body">Cornell University</span>
          </div>
          <div className="flex items-center gap-3">
            <LuGraduationCap size={18} className="text-accent" />
            <span className="font-body">B.A. in Computer Science, 2025</span>
          </div>
          <div className="flex items-center gap-3">
            <LuMail size={18} className="text-accent" />
            <a
              href="mailto:ta278@cornell.edu?subject=Portfolio%20Inquiry&body=Hi%20Tahmidul,%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0ABest%20regards,"
              className="font-body underline hover:text-hover transition-colors"
            >
              ta278@cornell.edu
            </a>
          </div>
        </div>

        {/* Socials + Resume */}
        <div className="flex items-center justify-between">
          <div className="flex gap-5">
            <a
              href="https://github.com/tambiat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-all duration-1400 ease-in-out hover:rotate-y-360 hover:scale-125"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/tahmidul-ambia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-all duration-1400 ease-in-out hover:rotate-y-360 hover:scale-125"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
          <a
            href="/Ambia,Tahmidul Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-body px-3 py-2 rounded-md border border-accent text-accent 
                      hover:bg-accent hover:text-bg transition-all hover:font-[500] duration-400 hover:scale-110"
          >
            <LuDownload size={18} />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

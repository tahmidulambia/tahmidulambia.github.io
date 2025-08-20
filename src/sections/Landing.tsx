// src/sections/Landing.tsx
export default function Landing() {
  return (
    <section id="home" className="bg-bg text-text">
      {/* Full viewport height; extra top padding; centers content.
         Scales up spacing on xl/2xl so the hero breathes on desktops. */}
      <div className="max-w-screen-2xl mx-auto px-8 min-h-[100svh] pt-32 pb-16 grid gap-6 items-center lg:grid-cols-2 lg:gap-10 ">
        {/* Photo (top on mobile, right on desktop) */}
        <div className="flex justify-center lg:order-2">
          <div className="relative rounded-full border-4 xl:border-[6px] 2xl:border-8 border-accent p-2">
            <img
              src="/src/assets/personal-picture.jpg"
              alt="Portrait of Tahmidul Ambia"
              className="
                block rounded-full object-cover
                size-[min(16rem,60vw)]
                sm:size-[min(18rem,55vw)]
                md:size-[min(20rem,50vw)]
                lg:size-[28rem]
                xl:size-[32rem]
              "
            />
          </div>
        </div>

        {/* Text + CTAs */}
        <div className="text-center lg:text-left lg:order-1">
          <p className="font-body font-[600] text-accent text-base sm:text-2xl mb-3">
            Hello,
          </p>

          <h1 className="font-display font-[700] leading-tight text-4xl sm:text-5xl md:text-5xl lg:text-6xl min-[1230px]:text-7xl">
            I’m <span className="text-accent">Tahmidul Ambia</span>
          </h1>

          <h2 className="font-body font-[600] text-xl sm:text-2xl xl:text-3xl mt-3 opacity-90">
            I'm a Software Developer
          </h2>

          <p className="font-body mt-10 opacity-80
                         text-sm sm:text-base xl:text-lg 2xl:text-xl
                         max-w-prose xl:max-w-[65ch] mx-auto lg:mx-0">
            I’m passionate about creating reliable, impactful, and innovative software 
            across the stack and exploring how artificial intelligence can solve real problems.
          </p>

          {/* CTAs*/}
          <div className="mt-8 flex flex-row gap-3 justify-center lg:justify-start">
            <a
              href="#about"
              className="font-body font-[600] inline-flex items-center justify-center rounded-lg
                         px-5 py-3 text-base
                         xl:px-6 xl:py-3.5 xl:text-lg
                         2xl:px-7 2xl:py-4 2xl:text-xl
                         bg-accent text-bg hover:bg-hover transition-colors"
            >
              About Me
            </a>
          
            <a
              href="#projects"
              className="font-body font-[600] inline-flex items-center justify-center rounded-lg
                         px-5 py-3 text-base
                         xl:px-6 xl:py-3.5 xl:text-lg
                         2xl:px-7 2xl:py-4 2xl:text-xl
                         border border-accent text-accent hover:text-bg hover:bg-accent/90 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

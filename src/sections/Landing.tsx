// src/sections/Landing.tsx
import ShimmerButton from "../components/ShimmerButton.tsx";

export default function Landing() {
  return (
    <section id="home" className="text-text">
      <div className="max-w-screen-2xl mx-auto px-8 min-h-[100svh] pt-32 pb-16 grid gap-6 items-center lg:grid-cols-2 lg:gap-10 ">
        {/* Photo */}
        <div className="flex justify-center lg:order-2">
          <div className="relative rounded-full border-4 xl:border-[6px] 2xl:border-8 border-accent p-2">
            <img
              src="/src/assets/personal-pic.jpg"
              alt="Portrait of Tahmidul Ambia"
              className="block rounded-full object-cover
                size-[min(16rem,60vw)]
                sm:size-[min(18rem,55vw)]
                md:size-[min(20rem,50vw)]
                lg:size-[28rem]
                xl:size-[32rem]"
              loading="lazy"
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
            I build reliable and impactful AI powered software across the stack. 
            If you're looking to hire a self-starter with a strong classical foundation, explore more below!
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-row gap-4 justify-center lg:justify-start">
            <ShimmerButton href="#about" text="About me" />
            <ShimmerButton href="#projects" text="View Projects" /></div>
        </div>
      </div>
    </section>
  );
}

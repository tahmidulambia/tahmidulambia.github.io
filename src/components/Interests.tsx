// src/components/Interests.tsx


export default function Interests() {
  const interests = [
    "Web Dev",
    "App Dev",
    "AI Engineering",
    "Automation",
    "Machine Learning",
    "Data Analysis",
    "Data Visualization",
    "Fin Tech",
    "Health Tech",
  ];

  return (
    <div
      className={`flex flex-col gap-4 rounded-2xl border border-text/15 
                  p-6 sm:p-8 w-full mx-auto max-w-2xl`}
    >
      {/* Section Title */}
      <h2 className="font-display text-xl sm:text-2xl 3xl:text-3xl font-bold text-text text-center">
        Interests
      </h2>
      
      {/* Interests Pills */}
      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
        {interests.map((interest) => (
          <div
            key={interest}
            className="
              px-4 py-1.5 rounded-xl
              bg-bg-light text-text/90 
              text-sm sm:text-base font-medium
              shadow-sm border border-accent/20
              hover:bg-accent hover:text-bg 
              transition-colors
              cursor-default
              whitespace-nowrap
            "
          >
            {interest}
          </div>
        ))}
      </div>
    </div>
  );
}

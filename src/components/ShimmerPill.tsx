import type { ShimmerPillProps } from "../types";

export default function ShimmerPill({ text, className }: ShimmerPillProps) {
  return (
    <div
      className={`
        px-3 py-1 rounded-lg text-xs lg:text-sm
        bg-bg-light text-text/90 font-medium
        cursor-default
        whitespace-nowrap
        relative
        ${className || ""}
      `}
      style={{
        background: 'linear-gradient(var(--color-bg-light), var(--color-bg-light)) padding-box, conic-gradient(from var(--gradient-angle, 0deg), transparent, transparent 10%, transparent 20%) border-box',
        border: '1px solid transparent',
        transition: 'transform 0.2s ease-out',
      } as React.CSSProperties & { '--gradient-angle': string }}
      onMouseEnter={(e) => {
        const element = e.currentTarget;
        // Show the orange gradient and scale up
        element.style.background = 'linear-gradient(var(--color-bg-light), var(--color-bg-light)) padding-box, conic-gradient(from var(--gradient-angle, 0deg), transparent, rgba(255, 140, 0, 0.9) 10%, transparent 40%) border-box';
        element.style.transform = 'scale(1.1)';
        
        let angle = 0;
        const rotateGradient = () => {
          angle = (angle + 2) % 360;
          element.style.setProperty('--gradient-angle', `${angle}deg`);
          if (element.matches(':hover')) {
            requestAnimationFrame(rotateGradient);
          }
        };
        rotateGradient();
      }}
      onMouseLeave={(e) => {
        const element = e.currentTarget;
        // Hide the orange gradient, reset angle, and scale back down
        element.style.background = 'linear-gradient(var(--color-bg-light), var(--color-bg-light)) padding-box, conic-gradient(from var(--gradient-angle, 0deg), transparent, transparent 10%, transparent 20%) border-box';
        element.style.setProperty('--gradient-angle', '0deg');
        element.style.transform = 'scale(1)';
      }}
    >
      {/* Text content */}
      <span className="relative z-10">{text}</span>
    </div>
  );
}



import type { ShimmerPillProps } from "../types";

export default function ShimmerPill({ text, className }: ShimmerPillProps) {
  return (
    <div
      className={`
        px-3 py-1 rounded-lg text-xs lg:text-sm
        bg-bg-light text-text/90 font-medium
        shadow-sm border border-accent/20
        hover:bg-accent hover:text-bg 
        transition-colors
        cursor-default
        whitespace-nowrap
        ${className || ""}
      `}
    >
      {text}
    </div>
  );
}



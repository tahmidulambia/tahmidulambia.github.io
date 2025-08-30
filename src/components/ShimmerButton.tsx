export default function ShimmerButton({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      className="
        relative inline-flex items-center justify-center font-body font-[600]
        px-6 py-3 text-lg rounded-lg overflow-hidden
        bg-bg text-text border border-accent
        transition-all duration-500 ease-out
        hover:scale-105 hover:shadow-[0_0_30px_rgba(255,140,0,0.6)]
        before:content-[''] before:absolute before:w-[250%] before:h-[250%]
        before:-top-[85%] before:-left-[85%] before:-rotate-45 before:opacity-0
        before:bg-[linear-gradient(0deg,transparent,transparent_30%,rgba(255,140,0,0.4))]
        before:transition-all before:duration-400 before:ease-in-out
        hover:before:opacity-100 hover:before:translate-y-[180%]
      "
    >
      <span className="relative z-10">{text}</span>
    </a>
  );
}
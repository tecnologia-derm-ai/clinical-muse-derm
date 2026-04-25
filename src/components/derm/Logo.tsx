import logoDermAi from "@/assets/logo-derm-ai.png";

export function Logo({ className = "", invert = false }: { className?: string; invert?: boolean }) {
  const color = invert ? "text-background" : "text-navy";
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="relative overflow-hidden rounded-full border border-navy/15 bg-background p-1.5 shadow-elevated ring-1 ring-background/80">
        <img
          src={logoDermAi}
          alt="Logo Derm AI"
          loading="eager"
          width={104}
          height={104}
          className="h-20 w-20 rounded-full bg-background object-contain p-1 sm:h-24 sm:w-24"
        />
        {invert ? <div className="absolute inset-0 rounded-full bg-navy/18 mix-blend-multiply" /> : null}
      </div>
      <span className={`font-serif text-[1.9rem] font-semibold leading-none tracking-tight ${color} sm:text-[2.4rem]`}>
        Derm<span className="font-light italic"> AI</span>
      </span>
    </div>
  );
}

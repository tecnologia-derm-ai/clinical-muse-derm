import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Logo className="shrink-0" />
        <nav className="hidden items-center gap-8 text-sm text-navy/70 md:flex">
          <a href="#features" className="transition hover:text-navy">O que faz</a>
          <a href="#solution" className="transition hover:text-navy">Solução</a>
          <a href="#elite" className="transition hover:text-navy">Diferencial</a>
          <a href="#access" className="transition hover:text-navy">Acesso</a>
        </nav>
        <a
          href="#access"
          className="hidden rounded-full border border-navy/15 bg-background/60 px-5 py-2 text-sm font-medium text-navy backdrop-blur transition hover:border-navy/30 hover:bg-background md:inline-block"
        >
          Lista de espera
        </a>
      </div>
    </header>
  );
}

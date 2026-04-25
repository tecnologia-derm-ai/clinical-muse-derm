import { useEffect, useState } from "react";

const waveformHeights = [28, 46, 62, 38, 54, 72, 40, 58, 34, 64, 76, 44, 56, 32, 68, 52, 36, 60];

const flowSteps = [
  {
    title: "Consulta gravada",
    detail: "O áudio é capturado durante o atendimento, sem exigir digitação.",
    badge: "Etapa 01",
  },
  {
    title: "Resumo gerado ao final",
    detail: "A conversa vira história clínica e exame dermatológico estruturados.",
    badge: "Etapa 02",
  },
  {
    title: "CID e conduta sugeridos",
    detail: "O sistema organiza hipóteses diagnósticas e próximos passos para revisão.",
    badge: "Etapa 03",
  },
];

export function InterfaceMockup() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveStep((current) => (current + 1) % flowSteps.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] bg-[radial-gradient(ellipse_at_top,oklch(0.55_0.12_250/0.18),transparent_60%)] blur-2xl" />

      <div className="glass relative overflow-hidden rounded-3xl p-3 sm:p-5">
        <div className="mb-4 flex items-center justify-between px-2">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-navy/15" />
            <div className="h-2.5 w-2.5 rounded-full bg-navy/15" />
            <div className="h-2.5 w-2.5 rounded-full bg-navy/15" />
          </div>
          <div className="flex items-center gap-2 text-[10px] font-medium tracking-widest text-navy/50">
            <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-accent" />
            FLUXO DA CONSULTA · 14:32
          </div>
          <div className="text-[10px] font-medium text-navy/40">derm.ai</div>
        </div>

        <div className="grid gap-3 lg:grid-cols-5">
          <div className="rounded-2xl bg-background/60 p-4 lg:col-span-3 lg:p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-navy/60">
                Consulta em andamento
              </span>
              <div className="rounded-full border border-navy/10 bg-background/70 px-2.5 py-1 text-[10px] font-medium text-navy/55">
                Gravação ativa
              </div>
            </div>

            <div className="rounded-2xl border border-navy/10 bg-background/75 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-navy/40">
                    Status da captura
                  </div>
                  <div className="mt-1 text-sm font-medium text-navy">Áudio sendo registrado</div>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-background">
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 3a2 2 0 012 2v5a2 2 0 11-4 0V5a2 2 0 012-2zm-5 7a1 1 0 012 0 3 3 0 006 0 1 1 0 112 0 5 5 0 01-4 4.9V17h2a1 1 0 110 2H7a1 1 0 010-2h2v-2.1A5 5 0 015 10z" />
                  </svg>
                </div>
              </div>

              <div className="mt-5 flex h-12 items-end gap-1">
                {waveformHeights.map((height, index) => (
                  <div
                    key={height + index}
                    className="flex-1 animate-pulse-soft rounded-full bg-navy/30"
                    style={{ height: `${height}%`, animationDelay: `${index * 60}ms` }}
                  />
                ))}
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {flowSteps.map((step, index) => {
                  const active = index === activeStep;
                  return (
                    <div
                      key={step.title}
                      className={`rounded-2xl border p-3 transition ${
                        active
                          ? "border-navy bg-navy text-background shadow-soft"
                          : "border-navy/10 bg-background/70 text-navy"
                      }`}
                    >
                      <div
                        className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
                          active ? "text-background/70" : "text-navy/40"
                        }`}
                      >
                        {step.badge}
                      </div>
                      <div className="mt-2 text-sm font-medium">{step.title}</div>
                      <div className={`mt-1 text-[11px] leading-relaxed ${active ? "text-background/75" : "text-navy/65"}`}>
                        {step.detail}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-3 lg:col-span-2">
            <div className="rounded-2xl bg-background/60 p-4">
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-navy/60">
                Resumo pós-consulta
              </div>
              <ul className="space-y-1.5 text-[12px] text-navy/80">
                <li className="flex gap-2">
                  <span className="text-navy/40">•</span> História clínica estruturada automaticamente
                </li>
                <li className="flex gap-2">
                  <span className="text-navy/40">•</span> Exame dermatológico separado por tópicos
                </li>
                <li className="flex gap-2">
                  <span className="text-navy/40">•</span> Pontos críticos destacados para revisão
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-navy p-4 text-background">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-background/60">
                  Sugestão de CID
                </span>
                <span className="rounded-full bg-background/10 px-2 py-0.5 text-[10px] font-medium">
                  Revisar
                </span>
              </div>
              <div className="font-serif text-2xl font-semibold">C43.9</div>
              <div className="mt-0.5 text-[11px] text-background/70">
                Melanoma maligno da pele, local não especificado
              </div>
              <div className="mt-3 h-1 overflow-hidden rounded-full bg-background/10">
                <div className="h-full w-[84%] rounded-full bg-background/80" />
              </div>
              <div className="mt-1 text-[10px] text-background/60">Confiança 84%</div>
            </div>

            <div className="rounded-2xl border border-navy/10 bg-nude p-3">
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-navy/45">
                Apoio visual
              </div>
              <div className="mt-2 text-[11px] leading-snug text-navy/75">
                Análise assistida de dermatoscopias, tricoscopias e lesões elementares em um só fluxo.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-3 -top-3 hidden rotate-3 sm:block">
        <div className="glass rounded-2xl px-3 py-2 text-[10px] font-medium text-navy/80">
          Grava, resume e sugere
        </div>
      </div>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Header } from "@/components/derm/Header";
import { Logo } from "@/components/derm/Logo";
import { InterfaceMockup } from "@/components/derm/InterfaceMockup";
import { WaitlistForm } from "@/components/derm/WaitlistForm";
import dermNewPatient from "@/assets/derm-new-patient.png";
import dermRecording from "@/assets/derm-recording.png";
import dermClinicalHistory from "@/assets/derm-clinical-history.png";
import dermCidConduct from "@/assets/derm-cid-conduct.png";
import dermImageAnalysis from "@/assets/derm-image-analysis.png";
import doctorPatient from "@/assets/doctor-patient.jpg";
import logoDermAi from "@/assets/logo-derm-ai.png";
import skinTexture from "@/assets/skin-texture.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Derm AI — Copiloto clínico para dermatologistas" },
      {
        name: "description",
        content:
          "Inteligência artificial que escuta, organiza e auxilia decisões clínicas em tempo real. Acesso antecipado para dermatologistas.",
      },
      { property: "og:title", content: "Derm AI — Copiloto clínico para dermatologistas" },
      {
        property: "og:description",
        content:
          "IA que organiza a sua consulta dermatológica em tempo real: transcrição, resumo, CID e insights clínicos.",
      },
    ],
  }),
});

function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-6 lg:px-10 ${className}`}>
      {children}
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-background/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-navy/60 backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-navy" />
      {children}
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Comecei a usar o Derm AI no consultório e foi um divisor de águas. Reduzi muito o tempo gasto com prontuário e organização da consulta. No final do dia, estou menos cansado e consigo atender melhor sem aquela sensação de estar sempre atrasado.",
  },
  {
    quote:
      "O que mais me chamou atenção foi como o Derm AI organiza tudo automaticamente. A consulta fica fluida, sem eu precisar parar pra digitar ou estruturar raciocínio. Pela primeira vez, consegui focar 100% no paciente enquanto o sistema cuida do resto.",
  },
  {
    quote:
      "Fiquei sinceramente impressionado com a acurácia. Em vários casos, as sugestões do Derm AI bateram exatamente com as minhas hipóteses clínicas. Isso traz uma segurança adicional e ajuda muito principalmente em casos mais desafiadores.",
  },
  {
    quote:
      "Depois de usar o Derm AI, fica claro: o futuro chegou para a dermatologia. É o tipo de ferramenta que muda o padrão de atendimento. Quem não usar, vai ficar para trás.",
  },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-navy">
      <Toaster position="top-center" richColors />

      {/* Ambient backgrounds */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.93_0.025_75/0.7),transparent_60%),radial-gradient(ellipse_at_bottom_left,oklch(0.55_0.12_250/0.08),transparent_60%)]"
      />

      <Header />

      {/* HERO */}
      <Section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-5 rounded-[2rem] border border-navy/12 bg-background/92 px-5 py-4 shadow-elevated backdrop-blur">
              <img
                src={logoDermAi}
                alt="Emblema Derm AI"
                loading="eager"
                width={96}
                height={96}
                className="h-20 w-20 rounded-full border border-navy/10 bg-background object-contain p-1.5 shadow-soft sm:h-24 sm:w-24"
              />
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-navy/45">Marca oficial</div>
                <div className="font-serif text-2xl leading-none text-navy sm:text-[2rem]">Derm AI Copilot</div>
              </div>
            </div>
            <Eyebrow>Exclusivo para médicos</Eyebrow>
            <h1 className="mt-6 font-serif text-[2.6rem] font-medium leading-[1.05] tracking-tight text-navy sm:text-5xl lg:text-[3.7rem]">
              Um copiloto clínico para sua{" "}
              <span className="italic text-navy-soft">consulta dermatológica</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy/70">
              O Derm AI escuta, organiza, resume e auxilia suas decisões clínicas em
              tempo real — sem tirar você do paciente.
            </p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="#access"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-4 text-sm font-medium text-background shadow-soft transition hover:bg-navy-soft"
              >
                Entrar na lista de acesso antecipado
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 10a1 1 0 011-1h10.6l-3.3-3.3a1 1 0 111.4-1.4l5 5a1 1 0 010 1.4l-5 5a1 1 0 11-1.4-1.4L14.6 11H4a1 1 0 01-1-1z" />
                </svg>
              </a>
              <div className="flex items-center gap-3 text-xs text-navy/55">
                <div className="flex -space-x-2">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="h-7 w-7 rounded-full border-2 border-background bg-gradient-to-br from-nude-deep to-sand"
                    />
                  ))}
                </div>
                <span>+120 médicos já na lista</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <InterfaceMockup />
          </div>
        </div>
      </Section>

      {/* FEATURES STRIP */}
      <Section id="features" className="py-20 lg:py-28">
        <div className="max-w-3xl">
          <Eyebrow>O que ele faz</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-navy lg:text-5xl">
            Tudo que acontece na sua consulta,{" "}
            <span className="italic text-navy-soft">organizado automaticamente.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-navy/10 bg-navy/10 lg:grid-cols-3">
          {[
            {
              t: "Gravação da consulta",
              d: "Capta o atendimento e estrutura o conteúdo após a conversa, sem atrapalhar o fluxo clínico.",
              icon: "M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3zM5 10v2a7 7 0 0014 0v-2M12 19v4",
            },
            {
              t: "Resumo clínico estruturado",
              d: "Gera um resumo organizado pronto para o prontuário.",
              icon: "M4 5h16M4 12h10M4 19h16",
            },
            {
              t: "Sugestão automática de CID",
              d: "Indica CID-10 com base no contexto clínico capturado.",
              icon: "M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
            },
            {
              t: "Análise de anatomopatológicos",
              d: "Traduz laudos complexos em insights aplicáveis à conduta.",
              icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2",
            },
            {
              t: "Screening de melanoma",
              d: "Apoio na triagem ABCDE de lesões pigmentadas suspeitas.",
              icon: "M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z",
            },
            {
              t: "Dermatoscopia, tricoscopia e lesões elementares",
              d: "Organiza análises visuais e descrições semiológicas no mesmo fluxo da consulta.",
              icon: "M10 3H6a2 2 0 00-2 2v4m12-4h-4a2 2 0 00-2 2v4m0 0H4m6 0v6m0 0h6m-6 0H8",
            },
          ].map((f) => (
            <div
              key={f.t}
              className="group relative bg-background p-8 transition hover:bg-nude lg:p-10"
            >
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy/5 text-navy transition group-hover:bg-navy group-hover:text-background">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d={f.icon} />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-medium text-navy">{f.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/65">{f.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROBLEM */}
      <Section className="py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>O problema</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.1] text-navy lg:text-5xl">
              A tela entre você e seu paciente{" "}
              <span className="italic text-navy-soft">precisa desaparecer.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-navy/70">
              A prática dermatológica exige olho clínico e sensibilidade. No entanto, o médico
              gasta até <strong className="text-navy">40% da consulta digitando</strong>. O
              resultado: fadiga cognitiva, registros incompletos e perda de conexão humana.
            </p>

            <ul className="mt-8 space-y-3 text-sm text-navy/75">
              {[
                "Anotações incompletas ou demoradas",
                "Risco de esquecer detalhes importantes",
                "Tempo excessivo com prontuário",
                "Dificuldade de padronizar registros",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-1.5 inline-block h-1 w-6 rounded-full bg-navy/30" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="relative overflow-hidden rounded-3xl border border-navy/10 bg-background p-7">
                <div className="absolute right-5 top-5 rounded-full bg-destructive/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-destructive">
                  Sem Derm AI
                </div>
                <div className="mb-6 mt-10 font-serif text-2xl text-navy">
                  Olhar fixo no monitor
                </div>
                <ul className="space-y-2.5 text-sm text-navy/70">
                  <li>· Digitação mecânica durante a consulta</li>
                  <li>· Retrabalho pós-atendimento</li>
                  <li>· Conexão humana fragmentada</li>
                  <li>· Risco de omissões clínicas</li>
                </ul>
                <div className="mt-8 h-1 overflow-hidden rounded-full bg-destructive/15">
                  <div className="h-full w-[80%] rounded-full bg-destructive/55" />
                </div>
                <div className="mt-2 text-[11px] text-navy/50">Carga cognitiva alta</div>
              </div>

              <div className="relative overflow-hidden rounded-3xl bg-navy p-7 text-background shadow-elevated">
                <div className="absolute right-5 top-5 rounded-full bg-background/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-background/80">
                  Com Derm AI
                </div>
                <div className="mb-6 mt-10 font-serif text-2xl">
                  Contato visual com o paciente
                </div>
                <ul className="space-y-2.5 text-sm text-background/75">
                  <li>· Raciocínio clínico expandido</li>
                  <li>· Prontuário pronto ao dizer "até logo"</li>
                  <li>· Atenção plena na consulta</li>
                  <li>· Registros completos e padronizados</li>
                </ul>
                <div className="mt-8 h-1 overflow-hidden rounded-full bg-background/15">
                  <div className="h-full w-[22%] rounded-full bg-background/85" />
                </div>
                <div className="mt-2 text-[11px] text-background/55">Carga cognitiva reduzida</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SOLUTION */}
      <Section id="solution" className="py-24 lg:py-32">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-navy/10 bg-nude p-10 lg:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[radial-gradient(circle,oklch(0.55_0.12_250/0.18),transparent_70%)] blur-2xl"
          />

          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Eyebrow>A solução</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-navy lg:text-5xl">
                O Derm AI organiza{" "}
                <span className="italic text-navy-soft">enquanto você atende.</span>
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-navy/70">
                Enquanto você conduz a consulta, o Derm AI transforma cada palavra em
                informação estruturada e clinicamente útil. Você fica com o paciente. Ele
                cuida do resto.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-6">
                {[
                  { v: "1h30", l: "economizadas/dia" },
                  { v: "0", l: "cliques desnecessários" },
                  { v: "100%", l: "do prontuário pronto" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-serif text-3xl font-semibold text-navy">{s.v}</div>
                    <div className="mt-1 text-xs leading-tight text-navy/55">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl shadow-elevated">
                <img
                  src={doctorPatient}
                  alt="Médica dermatologista em consulta com paciente, fazendo contato visual"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-3">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 animate-pulse-soft rounded-full bg-accent" />
                    <div className="text-[11px] font-medium text-navy/70">
                      Derm AI ativo · gravando para resumir ao final da consulta
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* PRODUCT IN ACTION */}
      <Section className="py-24 lg:py-32">
        <div className="max-w-3xl">
          <Eyebrow>Software real</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-navy lg:text-5xl">
            O fluxo do produto, <span className="italic text-navy-soft">como ele realmente acontece.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy/70">
            Da abertura da consulta à análise visual, o Derm AI grava, estrutura e devolve a informação clínica pronta para revisão médica.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          <div className="overflow-hidden rounded-3xl border border-navy/10 bg-background">
            <div className="border-b border-navy/10 px-5 py-4">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy/45">Etapa 01</div>
              <div className="mt-1 font-serif text-2xl text-navy">Captação da consulta</div>
            </div>
            <img
              src={dermNewPatient}
              alt="Tela de cadastro de novo paciente no Derm AI"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full bg-nude p-4 object-contain"
            />
            <div className="border-t border-navy/10 px-5 py-4 text-sm leading-relaxed text-navy/65">
              Começa com a abertura rápida do paciente e segue para a gravação do atendimento sem interromper a consulta.
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-navy/10 bg-background">
              <div className="border-b border-navy/10 px-5 py-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy/45">Etapa 02</div>
                <div className="mt-1 font-serif text-2xl text-navy">Gravação e resumo</div>
              </div>
              <img
                src={dermRecording}
                alt="Tela de gravação da consulta no Derm AI"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full bg-nude p-4 object-contain"
              />
              <div className="border-t border-navy/10 px-5 py-4 text-sm leading-relaxed text-navy/65">
                Após a gravação, a plataforma entrega história clínica estruturada e exame dermatológico organizados automaticamente.
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-navy/10 bg-background">
              <div className="border-b border-navy/10 px-5 py-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy/45">Etapa 03</div>
                <div className="mt-1 font-serif text-2xl text-navy">CID e conduta sugeridos</div>
              </div>
              <img
                src={dermCidConduct}
                alt="Tela com CID provável e conduta sugerida no Derm AI"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full bg-nude p-4 object-contain"
              />
              <div className="border-t border-navy/10 px-5 py-4 text-sm leading-relaxed text-navy/65">
                O sistema organiza hipóteses diagnósticas e próximos passos para que a decisão final continue sob seu controle.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-12">
          <div className="overflow-hidden rounded-3xl border border-navy/10 bg-nude lg:col-span-7">
            <div className="grid items-stretch md:grid-cols-[1.15fr_0.85fr]">
              <img
                src={dermClinicalHistory}
                alt="Tela com história clínica e exame dermatológico gerados pelo Derm AI"
                loading="lazy"
                width={1365}
                height={721}
                className="h-full w-full bg-background p-4 object-contain"
              />
              <div className="flex flex-col justify-center px-6 py-8 lg:px-8">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy/45">Resumo estruturado</div>
                <h3 className="mt-3 font-serif text-3xl font-medium text-navy">Pronto para prontuário</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/65">
                  História clínica, exame dermatológico e observações relevantes aparecem organizados em blocos claros, reduzindo retrabalho e omissões.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-navy/10 bg-background lg:col-span-5">
            <div className="border-b border-navy/10 px-5 py-4">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy/45">Análise visual</div>
              <div className="mt-1 font-serif text-2xl text-navy">Dermatoscopias, tricoscopias e lesões elementares</div>
            </div>
            <img
              src={dermImageAnalysis}
              alt="Tela de análise de imagem dermatológica no Derm AI"
              loading="lazy"
              width={1399}
              height={668}
              className="w-full bg-nude p-4 object-contain"
            />
            <div className="px-5 py-4 text-sm leading-relaxed text-navy/65">
              A análise assistida descreve critérios semiológicos e ajuda a documentar achados de imagem com mais padronização clínica.
            </div>
          </div>
        </div>
      </Section>

      {/* BENEFITS */}
      <Section className="py-24 lg:py-32">
        <div className="max-w-3xl">
          <Eyebrow>Benefícios</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-navy lg:text-5xl">
            Mais foco clínico.{" "}
            <span className="italic text-navy-soft">Menos fricção.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {[
            { t: "Mais atenção ao paciente", d: "Olhe nos olhos. A IA cuida do registro." },
            { t: "Menos tempo em documentação", d: "Reduz drasticamente o tempo de prontuário." },
            { t: "Registros mais completos", d: "Nenhum detalhe relevante se perde." },
            { t: "Apoio à decisão clínica", d: "CID, screening e insights ao seu lado." },
            { t: "Mais segurança e confiança", d: "Padronização e rastreabilidade clínica." },
          ].map((b, i) => (
            <div
              key={b.t}
              className={`rounded-2xl border border-navy/10 bg-background p-6 transition hover:-translate-y-1 hover:shadow-soft ${
                i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <div className="font-serif text-3xl font-light text-navy/30">0{i + 1}</div>
              <h3 className="mt-3 font-serif text-lg font-medium text-navy">{b.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-navy/65">{b.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ELITE FEATURES */}
      <Section id="elite" className="py-24 lg:py-32">
        <div className="max-w-3xl">
          <Eyebrow>Diferencial técnico</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-navy lg:text-5xl">
            Pensado para a{" "}
            <span className="italic text-navy-soft">prática real.</span>
          </h2>
          <p className="mt-5 text-lg text-navy/70">
            Não é uma ferramenta genérica. Foi desenhado especificamente para a rotina dermatológica.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {[
            {
              tag: "Análise de Laudos",
              t: "Tradução instantânea de anatomopatológicos",
              d: "Receba uma leitura clara e aplicável de laudos complexos em segundos.",
            },
            {
              tag: "Derm-Screening",
              t: "Apoio à triagem de melanoma",
              d: "Suporte estruturado para avaliação de lesões pigmentadas suspeitas.",
            },
            {
              tag: "Clinical Assistant",
              t: "Conhecimento dermatológico sob demanda",
              d: "Consulta uma base atualizada por voz ou texto, durante o atendimento.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="group relative overflow-hidden rounded-3xl border border-navy/10 bg-background p-8 transition hover:bg-nude"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy/50">
                {c.tag}
              </div>
              <h3 className="mt-4 font-serif text-2xl font-medium leading-tight text-navy">
                {c.t}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/65">{c.d}</p>
              <div className="mt-8 flex items-center gap-2 text-xs font-medium text-navy/60">
                Disponível na fase inicial
                <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 10a1 1 0 011-1h10.6l-3.3-3.3a1 1 0 111.4-1.4l5 5a1 1 0 010 1.4l-5 5a1 1 0 11-1.4-1.4L14.6 11H4a1 1 0 01-1-1z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Value props ROI */}
        <div className="mt-10 grid gap-5 rounded-3xl border border-navy/10 bg-nude p-8 sm:grid-cols-3 lg:p-10">
          {[
            { v: "Eficiência", d: "Ganhe até 1h30 por dia eliminando a digitação de evoluções." },
            { v: "Segurança", d: "Reduza o risco de omissões em prontuários complexos." },
            { v: "Presença", d: "Eleve o valor percebido da consulta com atenção plena." },
          ].map((r) => (
            <div key={r.v} className="border-l-2 border-navy/15 pl-5">
              <div className="font-serif text-xl font-semibold text-navy">{r.v}</div>
              <p className="mt-1.5 text-sm leading-relaxed text-navy/65">{r.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* OBJECTION + AUTHORITY */}
      <Section className="py-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-navy/10 bg-background p-10 lg:p-12">
            <Eyebrow>Você no comando</Eyebrow>
            <h3 className="mt-5 font-serif text-3xl font-medium leading-tight text-navy lg:text-4xl">
              O Derm AI{" "}
              <span className="italic text-navy-soft">não substitui</span>{" "}
              o raciocínio médico.
            </h3>
            <p className="mt-5 text-base leading-relaxed text-navy/70">
              Ele organiza informações e apoia decisões. A conduta é, e sempre será, sua.
              Você revisa, valida e edita tudo antes de qualquer registro definitivo.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-navy p-10 text-background lg:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{ backgroundImage: `url(${skinTexture})`, backgroundSize: "cover", mixBlendMode: "overlay" }}
            />
            <div className="relative">
              <Eyebrow>
                <span className="text-background/70">Autoridade</span>
              </Eyebrow>
              <h3 className="mt-5 font-serif text-3xl font-medium leading-tight lg:text-4xl">
                Criado por quem{" "}
                <span className="italic">viveu a consulta dermatológica.</span>
              </h3>
              <p className="mt-5 text-base leading-relaxed text-background/75">
                Desenvolvido com base na prática clínica real, entendendo as dores e o
                fluxo do atendimento — não a partir de uma planilha de funcionalidades.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SOCIAL PROOF */}
      <Section className="py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Eyebrow>Prova social</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-navy lg:text-5xl">
              Veja o que os <span className="italic text-navy-soft">médicos ao redor do Brasil</span> estão dizendo sobre o Derm AI.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy/70">
              Uma experiência pensada para parecer natural na rotina médica, com clareza clínica e confiança desde a primeira consulta.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-navy/10 bg-nude/60 p-4 lg:p-5">
            <div className="testimonial-marquee flex gap-5">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <article
                  key={`${index}-${testimonial.quote.slice(0, 24)}`}
                  className="testimonial-card min-h-[260px] w-[300px] shrink-0 rounded-3xl border border-navy/10 bg-background p-6 shadow-soft md:w-[340px]"
                >
                  <div className="flex h-full flex-col justify-between gap-6">
                    <div className="text-4xl leading-none text-navy/18">“</div>
                    <p className="text-sm leading-7 text-navy/78">{testimonial.quote}</p>
                    <div className="flex items-center justify-between border-t border-navy/10 pt-4">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy/45">
                        Depoimento anônimo
                      </span>
                      <span className="h-2 w-2 rounded-full bg-accent" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section id="access" className="py-24 lg:py-36">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-navy px-8 py-16 text-background lg:px-16 lg:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[radial-gradient(circle,oklch(0.55_0.12_250/0.4),transparent_70%)] blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,oklch(0.7_0.08_80/0.18),transparent_70%)] blur-3xl"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-background/15 bg-background/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-background/80 backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-accent" />
              Acesso inicial limitado
            </div>

            <h2 className="mt-6 font-serif text-4xl font-medium leading-[1.1] lg:text-6xl">
              Experimente uma nova forma de{" "}
              <span className="italic">conduzir suas consultas.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-background/70">
              Estamos liberando o Derm AI para um grupo seleto de médicos na fase inicial.
              Garanta sua vaga e seja um dos primeiros a transformar sua prática.
            </p>

            <div className="mx-auto mt-10 max-w-xl">
              <div className="rounded-3xl bg-background p-2 text-navy">
                <WaitlistForm />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-navy/10">
        <Section className="flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
          <div>
            <Logo />
            <p className="mt-3 max-w-sm text-sm italic text-navy/60">
              Inteligência artificial aplicada à prática clínica.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 text-xs text-navy/55 sm:items-end">
            <div>© {new Date().getFullYear()} Derm AI. Todos os direitos reservados.</div>
            <div>Uso restrito a profissionais médicos.</div>
          </div>
        </Section>
      </footer>
    </div>
  );
}

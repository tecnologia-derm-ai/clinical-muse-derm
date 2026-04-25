import { useState } from "react";
import { toast } from "sonner";

export function WaitlistForm({ id, compact = false }: { id?: string; compact?: boolean }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setDone(true);
    toast.success("Solicitação recebida", {
      description: "Entraremos em contato com os próximos convites.",
    });
  };

  if (done) {
    return (
      <div id={id} className="glass rounded-2xl p-6 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-navy text-background">
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" />
          </svg>
        </div>
        <p className="font-serif text-xl text-navy">Você está na lista.</p>
        <p className="mt-1 text-sm text-navy/60">Convites são liberados gradualmente.</p>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={submit}
      className={`glass rounded-2xl ${compact ? "p-4" : "p-5 sm:p-6"}`}
    >
      <div className={`grid gap-3 ${compact ? "" : "sm:grid-cols-2"}`}>
        <input
          type="text"
          required
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-navy/10 bg-background/70 px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:border-navy/30 focus:outline-none focus:ring-2 focus:ring-navy/10"
        />
        <input
          type="email"
          required
          placeholder="Email profissional"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-navy/10 bg-background/70 px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:border-navy/30 focus:outline-none focus:ring-2 focus:ring-navy/10"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-sm font-medium text-background shadow-soft transition hover:bg-navy-soft disabled:opacity-60"
      >
        {loading ? "Enviando..." : "Solicitar acesso antecipado"}
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 10a1 1 0 011-1h10.6l-3.3-3.3a1 1 0 111.4-1.4l5 5a1 1 0 010 1.4l-5 5a1 1 0 11-1.4-1.4L14.6 11H4a1 1 0 01-1-1z" />
        </svg>
      </button>
      <p className="mt-3 text-center text-xs text-navy/50">
        Convites liberados gradualmente · Exclusivo para médicos
      </p>
    </form>
  );
}

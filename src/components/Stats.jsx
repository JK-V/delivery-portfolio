import { stats, caseStudies } from "../data/content";

export default function Stats() {
  return (
    <section id="impact" className="border-t border-border bg-grid">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <span className="font-mono text-xs tracking-widest text-info">
          IMPACT LOG
        </span>
        <h2 className="mt-3 font-display font-bold text-2xl sm:text-3xl tracking-tight max-w-2xl">
          VelocityFoundry — Numbers from past engagements.
        </h2>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="border border-border rounded-md p-5 bg-surface/50"
            >
              <div className="font-mono font-bold text-3xl text-pass">
                {s.value}
              </div>
              <div className="mt-2 text-xs text-text-muted leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid sm:grid-cols-3 gap-6">
          {caseStudies.map((c) => (
            <div
              key={c.title}
              className="border border-border rounded-md p-5 bg-surface/30 hover:border-pass/60 transition-colors"
            >
              <span className="font-mono text-[10px] text-running tracking-wide">
                {c.tag}
              </span>
              <h3 className="mt-3 font-display font-semibold text-base leading-snug">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                {c.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { profile, pipeline } from "../data/content";

const statusColor = {
  pass: "bg-pass text-pass",
  running: "bg-running text-running",
  pending: "bg-pending text-pending",
};

export default function Hero() {
  // On load, the pipeline "runs" once — stages light up in sequence.
  const [litCount, setLitCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLitCount(pipeline.length);
      return;
    }
    const timers = pipeline.map((_, i) =>
      setTimeout(() => setLitCount((c) => Math.max(c, i + 1)), 300 + i * 260)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-grid overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs tracking-[0.2em] text-info mb-5">
          $ ./run-delivery-audit --org=yours
        </p>

        <div className="flex items-center gap-3">
          <span className="font-mono text-sm text-pass font-semibold">
            {profile.name}
          </span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-6xl leading-[1.05] tracking-tight max-w-3xl">
          {profile.tagline}
        </h1>

        <p className="mt-6 max-w-2xl text-base sm:text-lg text-text-muted leading-relaxed">
          {profile.summary}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="px-5 py-3 rounded-sm bg-pass text-bg font-semibold text-sm hover:brightness-110 transition"
          >
            Start a delivery audit
          </a>
          <a
            href="#setup"
            className="px-5 py-3 rounded-sm border border-border text-text font-mono text-sm hover:border-pass hover:text-pass transition"
          >
            See how the pipeline runs ↓
          </a>
        </div>

        {/* Signature element: the pipeline spine, running once on load */}
        <div className="mt-16 border border-border rounded-md bg-surface/60 p-5 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-[11px] text-text-muted tracking-widest">
              DELIVERY PIPELINE
            </span>
            <span className="font-mono text-[11px] text-pass">
              {litCount >= pipeline.length ? "BUILD PASSED" : "BUILDING…"}
            </span>
          </div>

          <div className="flex items-center">
            {pipeline.map((stage, i) => {
              const lit = i < litCount;
              const isLast = i === pipeline.length - 1;
              return (
                <div key={stage.key} className="flex items-center flex-1 min-w-0">
                  <div className="flex flex-col items-center gap-2 shrink-0">
                    <div
                      className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                        lit
                          ? "bg-pass border-pass"
                          : "bg-transparent border-border"
                      }`}
                    />
                    <span
                      className={`font-mono text-[10px] tracking-wide whitespace-nowrap transition-colors duration-300 ${
                        lit ? "text-text" : "text-text-muted"
                      }`}
                    >
                      {stage.stage}
                    </span>
                  </div>
                  {!isLast && (
                    <div className="h-px flex-1 mx-2 bg-border relative overflow-hidden">
                      <div
                        className="h-full bg-pass transition-all duration-500 ease-out"
                        style={{ width: lit ? "100%" : "0%" }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

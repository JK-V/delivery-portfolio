import { pipeline } from "../data/content";

const statusStyles = {
  pass: "text-pass border-pass",
  running: "text-running border-running",
  pending: "text-pending border-pending",
};

export default function Process() {
  return (
    <>
      {pipeline.map((stage, i) => (
        <section
          key={stage.key}
          id={stage.key}
          className={`border-t border-border ${
            i % 2 === 1 ? "bg-surface/40" : ""
          }`}
        >
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 grid sm:grid-cols-[auto_1fr] gap-6 sm:gap-12">
            <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-2">
              <span className="font-mono text-xs text-text-muted">
                STAGE {stage.code}
              </span>
              <span
                className={`font-mono text-[10px] px-2 py-0.5 rounded-sm border ${statusStyles[stage.status]}`}
              >
                {stage.status.toUpperCase()}
              </span>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight">
                {stage.label}
              </h2>
              <p className="mt-3 max-w-2xl text-text-muted leading-relaxed">
                {stage.description}
              </p>

              <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {stage.details.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-2 text-sm text-text/90"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-pass shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

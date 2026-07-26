import { profile, nav } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";

const sectionIds = [...nav.map((n) => n.key), "impact", "contact"];

export default function Header() {
  const activeId = useActiveSection(sectionIds);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-bg/85 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between gap-6">
        <a
          href="#hero"
          className="font-display font-bold tracking-tight text-sm sm:text-base text-text shrink-0"
        >
          {profile.name.split(" ").map((w) => w[0]).join("")}
          <span className="text-pass">.</span>pipeline
        </a>

        <nav className="hidden md:flex items-center gap-1 font-mono text-[11px] tracking-wide">
          {nav.map((item) => {
            const isActive = activeId === item.key;
            return (
              <a
                key={item.key}
                href={`#${item.key}`}
                className={`px-3 py-1.5 rounded-sm transition-colors ${
                  isActive
                    ? "text-pass bg-surface-2"
                    : "text-text-muted hover:text-text"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <a
          href="#contact"
          className="flex items-center gap-2 shrink-0 font-mono text-[11px] px-3 py-1.5 border border-border rounded-sm text-text-muted hover:text-pass hover:border-pass transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-pass status-dot text-pass animate-pulse-soft" />
          AVAILABLE
        </a>
      </div>
    </header>
  );
}

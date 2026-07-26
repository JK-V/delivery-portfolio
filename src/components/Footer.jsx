import { profile } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] text-text-muted">
        <span>
          © {year} {profile.name} — exit code 0
        </span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-pass" />
          all systems green
        </span>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { profile } from "../data/content";

export default function Contact() {
  const [form, setForm] = useState({ name: "", org: "", message: "" });

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Delivery audit inquiry from ${form.name || "your site"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nOrganization: ${form.org}\n\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid sm:grid-cols-2 gap-12">
          <div>
            <span className="font-mono text-xs tracking-widest text-info">
              STAGE 06 · DEPLOY
            </span>
            <h2 className="mt-3 font-display font-bold text-2xl sm:text-3xl tracking-tight">
              Let's ship your pipeline.
            </h2>
            <p className="mt-4 text-text-muted leading-relaxed max-w-md">
              Tell me where releases are slow, risky, or unpredictable. I'll
              reply with a straight read on where the bottleneck actually is.
            </p>

            <div className="mt-8 space-y-2 font-mono text-sm">
              <p className="text-text-muted">{profile.location}</p>
              <a
                href={`mailto:${profile.email}`}
                className="text-pass hover:underline"
              >
                {profile.email}
              </a>
              <div className="flex gap-4 pt-2">
                {profile.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-text-muted hover:text-pass transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border border-border rounded-md p-6 bg-surface/50 space-y-4"
          >
            <div>
              <label className="block font-mono text-[11px] text-text-muted mb-1">
                NAME
              </label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-bg border border-border rounded-sm px-3 py-2 text-sm text-text focus:border-pass outline-none"
              />
            </div>
            <div>
              <label className="block font-mono text-[11px] text-text-muted mb-1">
                ORGANIZATION
              </label>
              <input
                value={form.org}
                onChange={(e) => setForm({ ...form, org: e.target.value })}
                className="w-full bg-bg border border-border rounded-sm px-3 py-2 text-sm text-text focus:border-pass outline-none"
              />
            </div>
            <div>
              <label className="block font-mono text-[11px] text-text-muted mb-1">
                WHAT'S BREAKING
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full bg-bg border border-border rounded-sm px-3 py-2 text-sm text-text focus:border-pass outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-sm bg-pass text-bg font-semibold text-sm hover:brightness-110 transition"
            >
              Send message
            </button>
            <p className="text-[11px] text-text-muted">
              Opens your email client — no data leaves your device.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

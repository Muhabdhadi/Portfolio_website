import { about } from "@/data/resume";

export function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="section-label">About Me</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-frost sm:text-4xl">
              Precision engineering.
              <span className="block text-muted">Human-centered delivery.</span>
            </h2>
            <div className="mt-8 h-px w-16 bg-gradient-to-r from-accent to-violet" />
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-6">
              {about.summary.map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed text-muted sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {about.highlights.map((item) => (
                <div
                  key={item.label}
                  className="edge-border rounded-xl bg-surface-elevated p-5 transition-transform hover:-translate-y-1"
                >
                  <p className="text-xs tracking-wider text-muted uppercase">
                    {item.label}
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold text-frost">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

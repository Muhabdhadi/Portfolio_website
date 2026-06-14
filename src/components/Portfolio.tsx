import { portfolioItems, profile } from "@/data/resume";

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-28 lg:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-bright to-transparent" />
      <div className="glow-orb pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/10" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label">Portfolio</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-frost sm:text-4xl">
              Selected <span className="gradient-text">Work</span>
            </h2>
          </div>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-accent-dim"
          >
            View GitHub Profile
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <article
              key={item.title}
              className="edge-border group relative overflow-hidden rounded-2xl bg-surface transition-all hover:-translate-y-1 hover:bg-surface-elevated"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-violet/5 opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative p-8">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-xs text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs font-medium text-accent">
                    Coming Soon
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-frost">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-muted before:mr-1.5 before:text-accent before:content-['#']"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-2 text-sm text-muted/60">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Case study launching soon
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

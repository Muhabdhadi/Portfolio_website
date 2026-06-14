import { profile } from "@/data/resume";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="glow-orb absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent/20" />
      <div
        className="glow-orb absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-violet/20"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="animate-fade-up section-label mb-6 opacity-0">
            Angular Developer · Cairo, Egypt
          </p>

          <h1 className="animate-fade-up animate-delay-100 font-display text-5xl font-bold leading-[1.05] tracking-tight opacity-0 sm:text-6xl lg:text-7xl">
            <span className="block text-frost">{profile.name.split(" ").slice(0, 2).join(" ")}</span>
            <span className="gradient-text block">
              {profile.name.split(" ").slice(2).join(" ")}
            </span>
          </h1>

          <p className="animate-fade-up animate-delay-200 mt-8 max-w-2xl text-lg leading-relaxed text-muted opacity-0 sm:text-xl">
            {profile.tagline}
          </p>

          <div className="animate-fade-up animate-delay-300 mt-10 flex flex-wrap items-center gap-4 opacity-0">
            <a
              href="#journey"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:bg-accent-dim hover:shadow-[0_0_40px_rgba(0,229,255,0.3)]"
            >
              View My Journey
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border-bright px-7 py-3.5 text-sm font-medium text-frost transition-all hover:border-accent/50 hover:text-accent"
            >
              <GitHubIcon />
              GitHub
            </a>
            <a
              href="/Muhammad-Abdelhadi-CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-violet/30 px-7 py-3.5 text-sm font-medium text-violet transition-all hover:border-violet hover:bg-violet/5"
            >
              <DownloadIcon />
              Download CV
            </a>
          </div>

          <div className="animate-fade-up animate-delay-400 mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-8 opacity-0">
            <Stat label="Role" value={profile.title} />
            <Stat label="Location" value={profile.location} />
            <Stat label="Status" value="Open to Opportunities" accent />
          </div>
        </div>

        <div className="animate-fade-in animate-delay-500 absolute bottom-12 right-6 hidden opacity-0 lg:block">
          <div className="flex flex-col items-center gap-3 text-muted">
            <span className="rotate-90 text-xs tracking-widest uppercase">Scroll</span>
            <div className="h-16 w-px bg-gradient-to-b from-accent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div>
      <p className="text-xs tracking-wider text-muted uppercase">{label}</p>
      <p className={`mt-1 text-sm font-medium ${accent ? "text-accent" : "text-frost"}`}>
        {value}
      </p>
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

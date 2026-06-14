import { skillGroups } from "@/data/resume";

export function Skills() {
  return (
    <section id="skills" className="relative py-28 lg:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-bright to-transparent" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center">
          <p className="section-label">Technical Arsenal</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-frost sm:text-4xl">
            Skills &amp; <span className="gradient-text">Expertise</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            A toolkit honed across enterprise Angular applications, from UI craft to
            algorithmic foundations.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="edge-border group rounded-2xl bg-surface p-8 transition-all hover:-translate-y-1 hover:bg-surface-elevated"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="h-8 w-1 rounded-full bg-gradient-to-b from-accent to-violet" />
                <h3 className="font-display text-lg font-semibold text-frost">
                  {group.category}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-border bg-ink/60 px-3 py-2 text-sm text-frost/90 transition-colors group-hover:border-accent/30"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

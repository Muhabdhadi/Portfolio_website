import { education, experience } from "@/data/resume";

export function CareerJourney() {
  return (
    <section id="journey" className="relative py-28 lg:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-bright to-transparent" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label">Career Journey</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-frost sm:text-4xl">
              From intern to
              <span className="gradient-text"> industry engineer</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted">
            Four years of continuous growth across healthcare, fintech, and enterprise
            front-end development.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[19px] top-0 hidden h-full w-px timeline-line md:block" />

          <div className="space-y-8">
            {experience.map((job, index) => (
              <article
                key={`${job.company}-${job.period}`}
                className="relative md:pl-16"
              >
                <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border border-border-bright bg-surface md:flex">
                  <div
                    className={`h-3 w-3 rounded-full ${
                      job.current
                        ? "bg-accent shadow-[0_0_12px_rgba(0,229,255,0.6)]"
                        : "bg-violet"
                    }`}
                  />
                </div>

                <div
                  className={`edge-border rounded-2xl bg-surface p-6 transition-all hover:bg-surface-elevated sm:p-8 ${
                    job.current ? "ring-1 ring-accent/20" : ""
                  }`}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-display text-xl font-semibold text-frost">
                          {job.role}
                        </h3>
                        {job.current && (
                          <span className="rounded-full bg-accent/10 px-3 py-0.5 text-xs font-medium text-accent">
                            Current
                          </span>
                        )}
                        {job.duration && (
                          <span className="rounded-full border border-border-bright px-3 py-0.5 text-xs text-muted">
                            {job.duration}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-accent">{job.company}</p>
                    </div>
                    <time className="shrink-0 font-mono text-sm text-muted">
                      {job.period}
                    </time>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {job.highlights.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-border bg-ink/50 px-2.5 py-1 text-xs text-frost/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {index === 0 && (
                  <div className="mt-2 ml-4 text-xs text-muted md:ml-16">
                    ↳ Longest tenure · Healthcare & FHIR specialization
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>

        <div className="edge-border mt-16 rounded-2xl bg-surface p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="section-label">Education</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-frost">
                {education.institution}
              </h3>
              <p className="mt-1 text-muted">{education.degree}</p>
            </div>
            <time className="font-mono text-sm text-accent">{education.period}</time>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {education.coursework.map((course) => (
              <span
                key={course}
                className="rounded-md border border-border px-3 py-1.5 text-xs text-muted"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

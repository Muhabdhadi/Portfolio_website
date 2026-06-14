import { profile } from "@/data/resume";

export function Contact() {
  return (
    <section id="contact" className="relative py-28 lg:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-bright to-transparent" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="edge-border overflow-hidden rounded-3xl bg-surface">
          <div className="grid lg:grid-cols-2">
            <div className="relative p-8 sm:p-12 lg:p-16">
              <div className="glow-orb absolute -left-20 -top-20 h-40 w-40 rounded-full bg-accent/20" />
              <p className="section-label">Contact</p>
              <h2 className="relative mt-4 font-display text-3xl font-bold tracking-tight text-frost sm:text-4xl">
                Let&apos;s build
                <span className="gradient-text block">something sharp.</span>
              </h2>
              <p className="relative mt-6 max-w-md text-muted">
                Open to new opportunities, collaborations, and conversations about
                front-end engineering, healthcare tech, and Angular architecture.
              </p>
            </div>

            <div className="border-t border-border bg-surface-elevated p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-16">
              <div className="space-y-6">
                <ContactLink
                  label="Email"
                  value={profile.email}
                  href={`mailto:${profile.email}`}
                />
                <ContactLink
                  label="Phone"
                  value={profile.phone}
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                />
                <ContactLink
                  label="Location"
                  value={profile.location}
                  href="#"
                  static
                />
                <ContactLink
                  label="GitHub"
                  value="github.com/Muhabdhadi"
                  href={profile.links.github}
                  external
                />
                <ContactLink
                  label="LeetCode"
                  value="leetcode.com/Muhabdhadi"
                  href={profile.links.leetcode}
                  external
                />
              </div>

              <a
                href={`mailto:${profile.email}?subject=Hello%20Muhammad`}
                className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-sm font-semibold text-ink transition-all hover:bg-accent-dim hover:shadow-[0_0_40px_rgba(0,229,255,0.25)] sm:w-auto"
              >
                Send an Email
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  label,
  value,
  href,
  external,
  static: isStatic,
}: {
  label: string;
  value: string;
  href: string;
  external?: boolean;
  static?: boolean;
}) {
  const content = (
    <>
      <p className="text-xs tracking-wider text-muted uppercase">{label}</p>
      <p className="mt-1 text-sm font-medium text-frost transition-colors group-hover:text-accent">
        {value}
      </p>
    </>
  );

  if (isStatic) {
    return <div className="group">{content}</div>;
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group block rounded-lg border border-transparent p-3 transition-all hover:border-border hover:bg-ink/40"
    >
      {content}
    </a>
  );
}

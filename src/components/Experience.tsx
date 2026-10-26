/**
 * Experience & education, grouped by type.
 * Content comes from portfolio.ts → experience.
 */
import { headings } from "@/data/portfolio";
import { getExperienceGroups } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Experience() {
  const groups = getExperienceGroups();
  return (
    <Section id="experience" number="02" label="Experience" title={headings.experience}>
      <div className="space-y-14 md:space-y-16">
        {groups.map((group) => {
          const compact = group.type === "Work";
          return (
            <Reveal key={group.type} className="grid gap-6 md:grid-cols-[11rem_1fr] md:gap-10">
              <h3 className="font-mono text-xs tracking-[0.14em] text-muted uppercase md:pt-1.5">{group.heading}</h3>

              {compact ? (
                <ul className="grid gap-px overflow-hidden rounded-[4px] bg-line ring-1 ring-line sm:grid-cols-2">
                  {group.items.map((item) => {
                    const when = item.period || item.duration;
                    return (
                      <li key={item.organisation} className="bg-paper p-5">
                        <p className="font-medium">{item.organisation}</p>
                        <p className="mt-0.5 text-sm text-ink-soft">
                          {item.role}
                          {when && <span className="text-muted"> · {when}</span>}
                        </p>
                        {item.summary && <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.summary}</p>}
                        {item.highlights.length > 0 && (
                          <ul className="mt-3 space-y-1 text-sm text-ink-soft">
                            {item.highlights.map((h) => (
                              <li key={h} className="flex gap-2">
                                <span aria-hidden="true" className="text-accent">–</span>
                                {h}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <ol className="space-y-8">
                  {group.items.map((item) => {
                    const when = item.period || item.duration;
                    return (
                      <li key={item.organisation} className="grid gap-1 border-l border-line pl-5 sm:grid-cols-[1fr_auto] sm:gap-x-8">
                        <div>
                          <p className="text-xl font-medium tracking-tight">{item.organisation}</p>
                          <p className="mt-1 text-ink-soft">
                            {item.role}
                            {item.location && <span className="text-muted"> · {item.location}</span>}
                          </p>
                        </div>
                        {when && (
                          <p className="font-mono text-xs text-muted sm:pt-2 sm:text-right">{when}</p>
                        )}
                        {item.summary && (
                          <p className="mt-2 max-w-2xl leading-relaxed text-ink-soft sm:col-span-2">{item.summary}</p>
                        )}
                        {item.highlights.length > 0 && (
                          <ul className="mt-2 max-w-2xl space-y-1.5 text-ink-soft sm:col-span-2">
                            {item.highlights.map((h) => (
                              <li key={h} className="flex gap-2.5">
                                <span aria-hidden="true" className="text-accent">–</span>
                                {h}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ol>
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

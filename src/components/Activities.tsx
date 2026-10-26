/**
 * Leadership & activities: what each activity shows about you.
 * Content comes from portfolio.ts → activities.
 */
import { headings } from "@/data/portfolio";
import { getActivities, getPhotos } from "@/lib/content";
import { Figure } from "./Figure";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Activities() {
  const activities = getActivities();
  const [main, ...rest] = getPhotos().leadership;
  if (activities.length === 0) return null;
  return (
    <Section id="leadership" number="05" label="Leadership" title={headings.leadership}>
      <div className="grid gap-6 md:grid-cols-2">
        {activities.map((a, i) => (
          <Reveal key={a.organisation} delay={i * 80}>
            <article className="h-full border-t-2 border-ink pt-6">
              <p className="font-mono text-xs tracking-[0.14em] text-accent uppercase">{a.organisation}</p>
              {a.focus && <h3 className="mt-3 font-display text-2xl leading-snug md:text-3xl">{a.focus}</h3>}
              {a.description && <p className="mt-4 leading-relaxed text-ink-soft">{a.description}</p>}
              {a.points.length > 0 && (
                <ul className="mt-4 space-y-1.5 text-ink-soft">
                  {a.points.map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <span aria-hidden="true" className="text-accent">–</span>
                      {p}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </Reveal>
        ))}
      </div>

      {main && (
        <Reveal className="mt-16 grid gap-6 md:mt-20 lg:grid-cols-[1.6fr_1fr]">
          <Figure photo={main} sizes="(min-width: 1024px) 680px, 100vw" imageClassName="aspect-[16/10]" />
          {rest.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {rest.slice(0, 2).map((p) => (
                <Figure key={p.src} photo={p} sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw" imageClassName="aspect-[16/10]" />
              ))}
            </div>
          )}
        </Reveal>
      )}
    </Section>
  );
}

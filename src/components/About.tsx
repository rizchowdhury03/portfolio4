/**
 * About section. Text comes from portfolio.ts → profile.about and profile.quickFacts.
 */
import { headings, profile } from "@/data/portfolio";
import { filled, getPhotos } from "@/lib/content";
import { Figure } from "./Figure";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function About() {
  const facts = profile.quickFacts.filter((f) => filled(f.label) && filled(f.value));
  const photo = getPhotos().about;
  return (
    <Section id="about" number="01" label="About" title={headings.about}>
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-20">
        <Reveal className="space-y-6 text-lg leading-relaxed text-ink-soft">
          {profile.about.filter(filled).map((paragraph, i) => (
            <p key={i} className={i === 0 ? "text-ink" : undefined}>
              {paragraph}
            </p>
          ))}
        </Reveal>
        {(facts.length > 0 || photo) && (
          <Reveal delay={100} className="space-y-10">
            {photo && <Figure photo={photo} sizes="(min-width: 768px) 420px, 100vw" />}
            {facts.length > 0 && (
            <dl className="divide-y divide-line border-y border-line">
              {facts.map((fact) => (
                <div key={fact.label} className="grid grid-cols-[7rem_1fr] gap-4 py-4">
                  <dt className="font-mono text-xs tracking-[0.1em] text-muted uppercase">{fact.label}</dt>
                  <dd className="text-sm">{fact.value}</dd>
                </div>
              ))}
            </dl>
            )}
          </Reveal>
        )}
      </div>
    </Section>
  );
}

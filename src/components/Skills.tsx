/**
 * Skills and languages. Content comes from portfolio.ts → skills and languages.
 * No percentages or star ratings on purpose.
 */
import { headings, skills } from "@/data/portfolio";
import { filled, getLanguages } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Skills() {
  const groups = skills.filter((g) => filled(g.category) && g.skills.some(filled));
  const languages = getLanguages();
  return (
    <Section id="skills" number="04" label="Skills" title={headings.skills}>
      <div className="grid gap-px overflow-hidden rounded-[4px] bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((group, i) => (
          <Reveal key={group.category} delay={i * 60} className="bg-paper p-6 md:p-7">
            <h3 className="font-display text-2xl">{group.category}</h3>
            <ul className="mt-5 space-y-2.5 text-ink-soft">
              {group.skills.filter(filled).map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Reveal>
        ))}
        {languages.length > 0 && (
          <Reveal delay={groups.length * 60} className="bg-paper p-6 md:p-7">
            <h3 className="font-display text-2xl">Languages</h3>
            <ul className="mt-5 space-y-2.5 text-ink-soft">
              {languages.map((l) => (
                <li key={l.name} className="flex items-baseline justify-between gap-3">
                  <span>{l.name}</span>
                  {filled(l.level) && <span className="font-mono text-xs text-muted">{l.level}</span>}
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </Section>
  );
}
